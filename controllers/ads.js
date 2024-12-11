const adsRouter = require("express").Router();
const openAi = require("../utils/openai");
const multer = require("multer");
const fs = require("fs/promises");
require("dotenv").config();
const stabilityai = require("../utils/stabilityai");
const sharp = require("sharp");
const path = require("path");
const { optimizeImage } = require("../helpers/ÏmageOptimizer");

const storage = multer.memoryStorage();
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
  const prompt = req.body.prompt || "";

  try {
    console.log("Original image type:", req.file.mimetype);

    await saveDebugImage(req.file.buffer, "original");

    const resizedBuffer = await optimizeImage(imgBuffer);
    await saveDebugImage(resizedBuffer, "resized");

    // Suoritetaan API-kutsut rinnakkain
    const [translatedPrompt, description, aiMask] = await Promise.allSettled([
      prompt ? openAi.translatePrompt({ prompt }) : Promise.resolve(""),
      openAi.describeImg2({ imgBuffer }),
      stabilityai.stabilitymask({ resizedBuffer }), // Otettu kommentti pois
    ]);

    const results = {
      translatedPrompt:
        translatedPrompt.status === "fulfilled" ? translatedPrompt.value : "",
      description: description.status === "fulfilled" ? description.value : "",
      aiMask: aiMask.status === "fulfilled" ? aiMask.value : null,
    };

    console.log("API Results:", {
      promptStatus: translatedPrompt.status,
      descriptionStatus: description.status,
      maskStatus: aiMask.status,
    });

    if (!results.aiMask) {
      throw new Error(`Failed to process image mask: ${aiMask.reason}`);
    }

    // Tallennetaan maski debuggausta varten
    await saveDebugImage(results.aiMask, "mask");
    // Suoritetaan InPaint operaatio
    const stabilityimgId = await stabilityai.stabilityInpaint({
      translatedPrompt: results.translatedPrompt,
      aiMask: results.aiMask,
      description: results.description,
    });

    res.json({
      imageId: stabilityimgId,
      promptStatus: translatedPrompt.status,
      description: results.description,
    });
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

    // result on jo base64-muodossa, joten ei tarvitse muuntaa
    res.json({ image: result });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({
      error: "Image fetch failed",
      details: error.message,
    });
  }
});

adsRouter.post("/translate", async (req, res) => {
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

adsRouter.post("/generateFinAdText", async (req, res) => {
  console.log("Post method request: /generateFinAdText");
  const body = req.body;
  const prompt = body.prompt;
  console.log("body,", body);

  try {
    console.log(prompt);
    const newPrompt = await openAi.generateFinAdText({ prompt });
    res.json({ newPrompt });
  } catch (error) {
    // Log any errors to the console
    console.error("Error processing translation:", error);
    // Send a 500 error response if translation processing fails
    res.status(500).json({ error: "prompt translation processing failed" });
  }
});

adsRouter.post("/getadtext", upload.single("img"), async (req, res) => {
  console.log("Post method request: /getadtext");

  const imgBuffer = req.file.buffer;
  const viewPoints = req.body.viewPoints;
  console.log(viewPoints);
  try {
    const description = await openAi.describeImg({ imgBuffer });
    const adText = await openAi.createAdText({ description, viewPoints });
    res.json({ adText: adText.content });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Image processing failed" });
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

module.exports = adsRouter;
