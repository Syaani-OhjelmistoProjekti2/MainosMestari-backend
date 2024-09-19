const OpenAI = require("openai");
const fs = require('fs');
require('dotenv').config();
const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});

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

const openAiNewImg = async () => {
    const image = await openai.images.generate({ 
        model: "dall-e-3", 
        prompt: "generate ad for a piece of furniture, Place said furniture on a snowy mountain top and santa claus admires the furniture. Here is the furniture description: The main furniture piece in the image is a wooden chair characterized by its simple yet elegant design. \n\n### Key Characteristics:\n\n- **Shape:** The chair has a traditional, upright form with a rounded seat and a slightly curved backrest. The backrest features several vertical spindles, lending it a classic aesthetic.\n\n- **Material:** It is constructed from wood, giving it a sturdy feel while also contributing to a rustic, vintage charm.\n\n- **Color:** The wood has a warm, natural brown hue, showing variations in tone that enhance its organic look. Some areas may exhibit a weathered or aged appearance, hinting at its use over time.\n\n- **Texture:** The surface of the chair appears somewhat smooth, but it may have a slightly worn texture due to age, particularly on the seat where it has likely received the most wear. The spindles and legs may have a slightly rougher texture, indicative of the wooden finish.\n\n- **Design Features:** The chair showcases several distinct design elements, including:\n  - **Spindles:** The vertical slats in the backrest create a classic look while providing support.\n  - **Turned Legs:** The legs are turned with a spiral design near the base, contributing to its decorative appeal.\n  - **Seat Shape:** The seat is broad and slightly concave, promoting comfort.\n\n### Size and Style:\n\n- **Size:** The chair appears to be of standard height, suitable for sitting at a dining table or as a standalone piece. The overall proportions are well-balanced, ensuring stability.\n- **Style:** The chair embodies a country or farmhouse style, fitting into both rustic and traditional settings.\n\n### Functionality:\n\n- This chair is practical for everyday use, serving as a dining or accent chair. Its sturdy construction allows for frequent use, while its aesthetic can complement various decor schemes.\n\n### Distinctive Details:\n\n- The combination of the spindles, turned legs, and the overall simplicity of the design provides a charming vintage allure.\n- There may be visible knots or grain patterns in the wood that add character.\n\n### Characteristics it Lacks:\n\n- The chair does not have upholstery or cushioning, which might make it less comfortable for prolonged sitting compared to more modern designs.\n- It lacks modern features such as ergonomic design or armrests, focusing instead on a straightforward and functional form.\n- There are no elaborate carvings or embellishments, maintaining a minimalist appearance that prioritizes function over ornate design elements.", 
      });

    return image.data;
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

const describeImg = async () => {

    const imagePath = "chair.jpeg";
    const base64Image = encodeImage(imagePath);

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

    return response;
};

module.exports = { openAiImg, openAiNewImg, describeImg, imgVariation };