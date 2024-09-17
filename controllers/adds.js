const addsRouter = require('express').Router();
const openAi = require('../utils/openai');

addsRouter.get('/', async (req, res) => {
    console.log("TOIMII");
    const aiAnswer = await openAi.openAiAd();

    res.json(aiAnswer);
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