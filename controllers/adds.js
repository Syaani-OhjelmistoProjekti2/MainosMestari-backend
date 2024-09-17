const addsRouter = require('express').Router();
const openAi = require('../utils/openai');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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


addsRouter.get('/', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.openAiAd();

    res.json(aiAnswer);
});

addsRouter.get('/image', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.openAiImg();

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