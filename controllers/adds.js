const addsRouter = require('express').Router();
const openAi = require('../utils/openai');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const stabilityai = require('../utils/stabilityai')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'controllers/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = 'image-' + uniqueSuffix + path.extname(file.originalname);
        
        req.filename = filename;

        cb(null, filename);
    }
  });

const upload = multer({ storage: storage });

addsRouter.post('/image', upload.single('img'), async (req, res) => {
    console.log("TOIMII");

    const imgPath = req.filename;
    console.log(imgPath)
    const prompt = req.body.prompt
    console.log(prompt)
    const aiAnswer = await openAi.openAiImg({ prompt, imgPath });

    res.json(aiAnswer);
    await fs.unlinkSync(`controllers/uploads/${imgPath}`); 
});

addsRouter.post('/stabilityimg', upload.single('img'), async (req, res) => {
    const imgPath = req.filename;
    const prompt = req.body.prompt;

    const stabilityimg = await stabilityai.stabilityimg({ prompt, imgPath });
    const base64img = stabilityimg.data.toString('base64');
    res.json({ data: base64img }); 

    await fs.unlinkSync(`controllers/uploads/${imgPath}`); 
})

// Alla olevat on teistailuun, ei käytetä apissa

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

addsRouter.get('/stabilityimg', async (req, res) => {

    console.log("TOIMII");

    const payload = {
        image: fs.createReadStream('sohva2.png'),
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
    res.json({ data:base64img });
});



module.exports = addsRouter;