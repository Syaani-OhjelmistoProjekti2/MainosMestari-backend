const adsRouter = require('express').Router();
const openAi = require('../utils/openai');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();
const stabilityai = require('../utils/stabilityai');
const sharp = require('sharp');

// Set up memory storage for multer (used for handling file uploads)
const storage = multer.memoryStorage();
// Create an upload middleware using the memory storage
const upload = multer({ storage: storage });

// POST method for Stability.ai's inpaint
adsRouter.post('/stabilityimg', upload.single('img'), async (req, res) => {

    // Log the request to the console
    console.log("Post method request: /stabilityimg");

    // Get the image buffer from the uploaded file
    const imgBuffer = req.file.buffer;
    // Get the prompt from the request body
    const prompt = req.body.prompt;

    try {
        // Asynchronously resize the image and store it in a buffer
        const resizedBuffer = await sharp(imgBuffer)
            .withMetadata({ orientation: undefined }) // Remove orientation metadata
            .resize(1350, 1080) // Resize the image to 1350x1080
            .jpeg() // Convert the image to JPEG format
            .toBuffer();  // Convert the image to a buffer

        // Generate an AI mask using the resized image buffer
        const aiMask = await stabilityai.stabilitymask({ resizedBuffer });

        // Generate a new image using the prompt and AI mask
        const stabilityimg = await stabilityai.stabilityimg({ prompt, aiMask });
        // Convert the generated image to a base64 string
        const base64img = stabilityimg.data.toString('base64');
        // Send the base64 image as a JSON response
        res.json({ data: base64img });

    } catch (error) {
        // Log any errors to the console
        console.error('Error processing image:', error);
        // Send a 500 error response if image processing fails
        res.status(500).json({ error: 'Image processing failed' });
    };
});

// POST method for OpenAi's text generation
adsRouter.post('/getadtext', upload.single('img'), async (req, res) => {
    // Log the request to the console
    console.log("Post method request: /getadtext");

    // Get the image buffer from the uploaded file
    const imgBuffer = req.file.buffer;
    // Get the view points from the request body
    const viewPoints = req.body.viewPoints;
    console.log(viewPoints)
    try {
        // Describe the image using OpenAI
        const description = await openAi.describeImg({ imgBuffer });
        // Create ad text using the image description and view points
        const adText = await openAi.createAdText({ description, viewPoints });
        // Send the generated ad text as a JSON response
        res.json({ adText: adText.content })
    } catch (error) {
        // Log any errors to the console
        console.error('Error processing image:', error);
        // Send a 500 error response if image processing fails
        res.status(500).json({ error: 'Image processing failed' });
    }
});



// POST metodi openAi:n dall-E 2 käyttöön !!Removed from forntend!!
adsRouter.post('/dall2image', upload.single('img'), async (req, res) => {

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
        console.error('Error processing image:', error);
        res.status(500).json({ error: 'Image processing failed' });
    } finally {
        // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
        try {
            await fs.unlinkSync(`controllers/uploads/${req.filename}`);
        } catch (unlinkError) {
            console.error('Error removing image file:', unlinkError);
        }
    }
});

// POST metodi openAi:n dall-E 3 käyttöön !!Removed from forntend!!
adsRouter.post('/dall3image', upload.single('img'), async (req, res) => {
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
        console.error('Error processing image:', error);
        res.status(500).json({ error: 'Image processing failed' });
    } finally {
        // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
        try {
            await fs.unlinkSync(`controllers/uploads/${req.filename}`);
        } catch (unlinkError) {
            console.error('Error removing image file:', unlinkError);
        }
    }
});




module.exports = adsRouter;