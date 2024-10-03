const OpenAI = require("openai");
const fs = require('fs');
require('dotenv').config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const encodeImage = (imagePath) => {
  const image = fs.readFileSync(imagePath);
  return image.toString('base64');
};

const openAiImg = async ({ prompt, imgPath }) => {
    const image = await openai.images.edit({ 
        image: fs.createReadStream(`controllers/uploads/${imgPath}`),
        prompt: prompt,
    });

  return image.data;
};

const openAiNewImg = async ({ userPrompt, description }) => {

    const image = await openai.images.generate({ 
        model: "dall-e-3", 
        prompt: `generate ad for a piece of furniture, dont add anything extra to the furniture, ${userPrompt}. Here is the furniture description: ${description}`, 
      });

  return image.data[0].url;
};

const imgVariation = async () => {
  const response = await openai.images.createVariation({
    model: "dall-e-2",
    image: fs.createReadStream("goodChair.png"),
    n: 1,
    size: "1024x1024"
  });
  image_url = response.data[0].url;
  return image_url;
}

const describeImg = async ({ imgPath }) => {

  const base64Image = encodeImage(`controllers/uploads/${imgPath}`);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Describe the main furniture piece in this image with as much detail as possible, focusing on its key characteristics such as shape, material, color, texture, and design features. Pay close attention to elements like size, style, functionality, and any distinctive details or patterns that make it stand out. Be precise in identifying these important aspects to create a thorough and accurate description of the furniture." },
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

  return response.choices[0].message.content;
};

const imgMask = async () => {
  const response = await openai.images.edit({
    model: "dall-e-2",
    image: fs.createReadStream("chair.png"),
    mask: fs.createReadStream("maskChair.png"),
    prompt: "Modify the background of the image while keeping the chair exactly the same. Do not alter the appearance, color, or shape of the furniture in any way. Only adjust the background color as blue, and ensure the furniture remains intact and unaffected.",
    n: 1,
    size: "1024x1024"
  });
  image_url = response.data[0].url;
  return image_url;
};

module.exports = { openAiImg, openAiNewImg, describeImg, imgVariation, imgMask };
