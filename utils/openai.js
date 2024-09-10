const OpenAI = require("openai");
const fs = require('fs');
require('dotenv').config();
const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});

const encodeImage = (imagePath) => {
    const image = fs.readFileSync(imagePath);
    return image.toString('base64');
};


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

    return completion.choices[0].message;
};

const openAiImg = async () => {
    const image = await openai.images.edit({ 
        image: fs.createReadStream("sohva.png"),
        prompt: "use the given sova and make an add from it. super realistic. tiktok add.",
    });

    return image.data;
};

const openAiNewImg = async () => {
    const image = await openai.images.generate({ 
        model: "dall-e-3", 
        prompt: "generate instagram add from this furniture describtion: The chair in the picture has a rustic design with several notable characteristics:\n\n- **Material**: It appears to be made of wood, giving it a classic and vintage look.\n- **Structure**: The chair features a simple, straight back with multiple spindles, which provide support and enhance its aesthetic.\n- **Seat**: The seat is slightly rounded and has a worn appearance, suggesting it may have been used extensively.\n- **Legs**: The legs are slender and slightly tapered, with decorative turning near the base, adding to its traditional style.\n- **Finish**: The wood surface has a natural, possibly distressed finish, highlighting its age and contributing to a rustic charm.\n\nOverall, the chair exudes a nostalgic and timeless quality, suitable for various settings, especially in outdoor or garden areas." 
    });

    return image.data;
};

const describeImg = async () => {

    const imagePath = "chair.jpeg";
    const base64Image = encodeImage(imagePath);

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "There is a piece of furniture in this picture, can you describe its specific characteristics?" },
              {
                type: "image_url",
                image_url: {
                  "url": `data:image/png;base64,${base64Image}`,
                },
              },
            ],
          },
        ],
      });

    return response;
};

module.exports = { openAiAd, openAiImg, openAiNewImg, describeImg };