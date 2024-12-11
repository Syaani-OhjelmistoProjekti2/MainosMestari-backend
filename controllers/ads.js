const adsRouter = require("express").Router();
const openAi = require("../utils/openai");
const multer = require("multer");
const fs = require("fs/promises");
require("dotenv").config();
const stabilityai = require("../utils/stabilityai");
const sharp = require("sharp");
const path = require("path");

// Set up memory storage for multer (used for handling file uploads)
const storage = multer.memoryStorage();
// Create an upload middleware using the memory storage
const upload = multer({ storage: storage });

const debugDir = path.join(__dirname, "debug-images");
const ensureDebugDir = async () => {
  try {
    await fs.access(debugDir);
  } catch {
    await fs.mkdir(debugDir, { recursive: true });
  }
};

const saveDebugImage = async (buffer, suffix) => {
  await ensureDebugDir();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filepath = path.join(debugDir, `debug-${timestamp}-${suffix}.png`);
  await fs.writeFile(filepath, buffer);
  console.log(`Debug image saved: ${filepath}`);
  return filepath;
};

adsRouter.post("/image", upload.single("img"), async (req, res) => {
  const imgBuffer = req.file.buffer;
  const prompt = req.body.prompt;

  try {
    console.log("Original image size:", imgBuffer.length);
    console.log("Original image type:", req.file.mimetype);

    await saveDebugImage(req.file.buffer, "original");

    // Muunnetaan kuva optimaaliseen kokoon
    // Stability AI mask endpoint rajoittaa koon 4,194,304 pikseliin
    const maxPixels = 4000000; // Hieman alle maksimin varmuuden vuoksi
    const dimension = Math.floor(Math.sqrt(maxPixels)); // Noin 2000x2000

    const resizedBuffer = await sharp(imgBuffer)
      .withMetadata({ orientation: undefined })
      .resize(dimension, dimension, {
        fit: "fill", // Vaihdetaan "contain" -> "fill" välttääksemme läpinäkyviä reunoja
        background: { r: 255, g: 255, b: 255, alpha: 1 }, // Valkoinen tausta läpinäkyvän sijaan
      })
      .png({
        quality: 100,
        compressionLevel: 0,
      })
      .toBuffer();

    await saveDebugImage(resizedBuffer, "resized");

    console.log("Optimized image size:", resizedBuffer.length);
    console.log("Optimized dimensions:", `${dimension}x${dimension}`);

    const newPrompt = await openAi.translatePrompt({ prompt });
    const description = await openAi.describeImg2({ imgBuffer });
    const aiMask = await stabilityai.stabilitymask({ resizedBuffer });

    // Tallennetaan maski debuggausta varten
    await saveDebugImage(aiMask, "mask");

    const stabilityimgId = await stabilityai.stabilityInpaint({
      newPrompt,
      aiMask,
      description,
    });

    res.json({ imageId: stabilityimgId });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({
      error: "Image processing failed",
      details: error.message,
    });
  }
});
adsRouter.post("/getimage", upload.single(), async (req, res) => {
  const imageId = req.body.imageId;

  try {
    const result = await stabilityai.getImageById({ imageId });

    if (result === 202) {
      return res.json({ image: 202 }); // Prosessointi kesken
    }

    // Tallenna debug-kuva jos mahdollista
    try {
      const imageBuffer = Buffer.from(result, "base64");
      await saveDebugImage(imageBuffer, "final");
    } catch (debugError) {
      console.error("Debug image save failed:", debugError);
    }

    // Lähetä base64-data clientille
    res.json({ image: result });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({
      error: "Image fetch failed",
      details: error.message,
    });
  }
});

// POST metodi openAi:n dall-E 2 käyttöön !!Removed from forntend!!
adsRouter.post("/dall2image", upload.single("img"), async (req, res) => {
  try {
    // Tallennetaan ladatun kuvatiedoston nimi (imgPath) ja käyttäjän syöttämä prompt
    const imgPath = req.filename;
    const prompt = req.body.prompt;

    // Kutsutaan OpenAI:ta kuvan luomiseksi käyttäjän syöttämän promptin ja kuvatiedoston polun perusteella
    const aiAnswer = await openAi.openAiImg({ prompt, imgPath });

    // Lähetetään OpenAI:n vastaus asiakkaalle JSON-muodossa
    res.json(aiAnswer);
  } catch (error) {
    // Käsitellään virhe ja lähetetään virheilmoitus vastauksena
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Image processing failed" });
  } finally {
    // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
    try {
      await fs.unlinkSync(`controllers/uploads/${req.filename}`);
    } catch (unlinkError) {
      console.error("Error removing image file:", unlinkError);
    }
  }
});

// POST metodi openAi:n dall-E 3 käyttöön !!Removed from forntend!!
adsRouter.post("/dall3image", upload.single("img"), async (req, res) => {
  try {
    // Tallennetaan ladatun kuvatiedoston nimi (imgPath) ja käyttäjän syöttämä prompt
    const imgPath = req.filename;
    const userPrompt = req.body.prompt;

    // Kutsutaan OpenAI:ta kuvaustiedon saamiseksi ladatusta kuvasta
    const description = await openAi.describeImg({ imgPath });

    // Kutsutaan OpenAI:ta uuden kuvan luomiseksi käyttäjän syöttämän promptin ja kuvauksen perusteella
    const aiAnswer = await openAi.openAiNewImg({ userPrompt, description });

    // Lähetetään OpenAI:n vastaus asiakkaalle JSON-muodossa
    res.json(aiAnswer);
  } catch (error) {
    // Käsitellään virhe ja lähetetään virheilmoitus vastauksena
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Image processing failed" });
  } finally {
    // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
    try {
      await fs.unlinkSync(`controllers/uploads/${req.filename}`);
    } catch (unlinkError) {
      console.error("Error removing image file:", unlinkError);
    }
  }
});

adsRouter.post("/translate", upload.single(), async (req, res) => {
  console.log("Post method request: /translate");
  const prompt = req.body.prompt;
  try {
    console.log(prompt);
    const newPrompt = await openAi.translatePrompt({ prompt });
    res.json({ newPrompt });
  } catch (error) {
    // Log any errors to the console
    console.error("Error processing translation:", error);
    // Send a 500 error response if translation processing fails
    res.status(500).json({ error: "prompt translation processing failed" });
  }
});

// POST method for OpenAi's text generation
adsRouter.post("/getadtext", upload.single("img"), async (req, res) => {
  // Log the request to the console
  console.log("Post method request: /getadtext");

  // Get the image buffer from the uploaded file
  const imgBuffer = req.file.buffer;
  // Get the view points from the request body
  const viewPoints = req.body.viewPoints;
  console.log(viewPoints);
  try {
    // Describe the image using OpenAI
    const description = await openAi.describeImg({ imgBuffer });
    // Create ad text using the image description and view points
    const adText = await openAi.createAdText({ description, viewPoints });
    // Send the generated ad text as a JSON response
    res.json({ adText: adText.content });
  } catch (error) {
    // Log any errors to the console
    console.error("Error processing image:", error);
    // Send a 500 error response if image processing fails
    res.status(500).json({ error: "Image processing failed" });
  }
});

module.exports = adsRouter;
