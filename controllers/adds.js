const addsRouter = require('express').Router();
const openAi = require('../utils/openai');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'controllers/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = 'image-' + uniqueSuffix + path.extname(file.originalname);
        
        req.fileFilename = filename;

        cb(null, filename);
    }
  });

const upload = multer({ storage: storage });

addsRouter.post('/image', upload.single('img'), async (req, res) => {
    console.log("TOIMII");

    const imgPath = req.fileFilename;
    console.log(imgPath)
    const prompt = req.body.prompt
    console.log(prompt)
    const aiAnswer = await openAi.openAiImg({ prompt, imgPath });

    res.json(aiAnswer);
    await fs.unlinkSync(`controllers/uploads/${imgPath}`); 
});

addsRouter.get('/stabilityimg', async (req, res) => {

    console.log("TOIMII");

    const payload = {
        image: fs.createReadStream('sohva2.png'),
        prompt: "make an advertisment for these sofas, put santaclauses admiring the sofas",
        output_format: "jpeg"
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

    res.json(aiAnswer.data);
});


addsRouter.get('/image', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.openAiNewImg();

    res.json(aiAnswer);
});

addsRouter.get('/describe', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.describeImg();

    res.json(aiAnswer);
});

addsRouter.get('/imagevariation', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.imgVariation();

    res.json(aiAnswer);
});



module.exports = addsRouter;