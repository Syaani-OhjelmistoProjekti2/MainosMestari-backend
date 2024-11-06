const adsRouter = require('express').Router();
const openAi = require('../utils/openai');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const stabilityai = require('../utils/stabilityai');
const sharp = require('sharp');
const { randomFilePath } = require('../helpers/randomFilePath');

const storage = multer.diskStorage({
    // Määritetään kohdekansio, johon tiedostot tallennetaan
    destination: (req, file, cb) => {
        cb(null, 'controllers/uploads');
    },
    // Määritetään tiedostonimi tallennuksen aikana
    filename: (req, file, cb) => {
        const filename = randomFilePath(file);

        req.filename = filename; // Tallennetaan luotu tiedostonimi request-objektiin// Tallennetaan luotu tiedostonimi request-objektiin

        cb(null, filename); // Palautetaan luotu tiedostonimi
    }
});

const upload = multer({ storage: storage });

// POST metodi openAi:n dall-E 2 käyttöön
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

// POST metodi openAi:n dall-E 3 käyttöön
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

// POST metodi Stability.ai:n inpaintin käyttöön
adsRouter.post('/stabilityimg', upload.single('img'), async (req, res) => {

    console.log("Post method request");

    const imgPath = req.filename;
    const prompt = req.body.prompt;
    const isAdText = req.body.isAdText;

    try {

        const inputPath = `controllers/uploads/${imgPath}`;
        const maskPath = `controllers/mask/${imgPath}`;

        // Asynkroninen kuvan muokkaus ja tallennus
        await sharp(inputPath)
            .withMetadata({ orientation: undefined })
            .resize(1350, 1080)
            .toFile(maskPath);

        // Käsittele Stability.ai ja OpenAI-kutsut rinnakkain
        const aiMask = await stabilityai.stabilitymask({ imgPath });
        fs.writeFileSync(inputPath, Buffer.from(aiMask.data));

        const stabilityimg = await stabilityai.stabilityimg({ prompt, imgPath });
        const base64img = stabilityimg.data.toString('base64');

        if (isAdText === "true") {
            const viewPoint = req.body.viewPoint;
            const description = await openAi.describeImg({ imgPath });
            const adText = await openAi.createAdText({ description, viewPoint });
            res.json({ data: base64img, adText: adText.content });
        } else {
            res.json({ data: base64img });
        }

    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).json({ error: 'Image processing failed' });
    } finally {
        // Poista tiedostot heti, kun niitä ei enää tarvita
        await fs.promises.unlink(`controllers/mask/${imgPath}`).catch(console.error);
        await fs.promises.unlink(`controllers/uploads/${imgPath}`).catch(console.error);
    }
});

// POST metodi Stability.ai:n inpaintin käyttöön
/* adsRouter.post('/stabilityimg', upload.single('img'), async (req, res) => {
    try {
        // Tallennetaan ladatun kuvatiedoston nimi (imgPath) ja käyttäjän syöttämä prompt-muuttuja
        const imgPath = req.filename;
        const prompt = req.body.prompt;

        // Lähetetään kuva ja prompt Stability AI -palveluun
        const stabilityimg = await stabilityai.stabilityimg({ prompt, imgPath });

        // Muunnetaan palautettu kuva base64-muotoon
        const base64img = stabilityimg.data.toString('base64');

        // Lähetetään base64-koodattu kuva vastauksena
        res.json({ data: base64img });
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
}); */

// Alla olevat on teistailuun, ei käytetä apissa

adsRouter.get('/image', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.openAiNewImg();

    res.json(aiAnswer);
});

adsRouter.get('/describe', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.describeImg();

    res.json(aiAnswer);
});

adsRouter.get('/imagevariation', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.imgVariation();

    res.json(aiAnswer);
});

adsRouter.get('/stabilitymask', async (req, res) => {

    console.log("TOIMII");

    const payload = {
        image: fs.createReadStream('picture2.jpeg'),
        output_format: "png"
    }

    const aiMask = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/remove-background`,
        axios.toFormData(payload, new FormData()),
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${process.env.STABILITY_KEY}`,
                Accept: "image/*"
            },
        },
    );

    fs.writeFileSync('controllers/uploads/mask_image.png', Buffer.from(aiMask.data));

    const base64img = aiMask.data.toString('base64');
    res.json({ data: base64img });

});

adsRouter.get('/stabilityimg', async (req, res) => {

    console.log("TOIMII");

    const payload = {
        image: fs.createReadStream('controllers/uploads/mask_image.png'),
        prompt: "sofa on a countryside where a house is on fire",
        output_format: "png"
    }

    const aiAnswer = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/inpaint`,
        axios.toFormData(payload, new FormData()),
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${process.env.STABILITY_KEY}`,
                Accept: "image/*",
            },
        },
    );

    fs.writeFileSync('controllers/uploads/output_image.png', Buffer.from(aiAnswer.data));

    const base64img = aiAnswer.data.toString('base64');
    res.json({ data: base64img });
});



module.exports = adsRouter;