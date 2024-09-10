const OpenAI = require("openai");
const fs = require('fs');
require('dotenv').config();
const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});


const openAiAd = async () => {

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "Anna lomakohde ehdotuksia.",
            },
        ],
    });

    return completion.choices[0].message
};

const openAiImg = async () => {
    const image = await openai.images.createVariation({ 
        image: fs.createReadStream("kissa.png"),
        prompt: "Make the cat more happier and add a dog",
        size: "1024x1024",
    });

    return image.data;
};

module.exports = { openAiAd, openAiImg } 