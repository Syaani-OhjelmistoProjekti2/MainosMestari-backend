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

const openAiNewImg = async () => {
    const image = await openai.images.generate({ 
        model: "dall-e-3", 
        prompt: "generate ad for a piece of furniture, dont add anything extra to the furniture, Place said furniture on a snowy mountain top and santa claus admires the furniture. Here is the furniture description: The main furniture piece in the image is a simple wooden chair, characterized by its classic design and rustic charm. Here are its key characteristics:\n\n### Shape:\n- **Structure**: The chair has a traditional, upright shape with a slightly curved backrest and a flat seat. It features a spindle back with multiple vertical slats that give it a classic feel.\n- **Legs**: The chair has four legs, each straight and slightly tapered toward the ground.\n\n### Material:\n- **Construction**: Made primarily from wood, the chair showcases natural grain patterns, suggesting the use of a solid hardwood.\n- **Finish**: The wood appears to have a matte finish, highlighting its organic texture and character without any glossy coating.\n\n### Color:\n- **Tone**: The color of the wood is a warm, medium brown that suggests it has aged naturally over time, perhaps with some variations in hue due to wear and exposure to the elements.\n\n### Texture:\n- **Surface**: The surface of the seat and legs is smooth but may have some wear marks, adding to its vintage appeal. The backrest's spindles have a slightly rougher texture due to the natural wood grain.\n\n### Design Features:\n- **Backrest**: The distinctive spindle back design not only provides support but also adds an aesthetic charm common in country or farmhouse styles.\n- **Seat**: The seat is slightly contoured for comfort, with a simple, functional shape.\n- **Legs**: The legs exhibit turning details at the joints, enhancing the craftsmanship and traditional style.\n\n### Size:\n- **Proportion**: The chair appears to be a standard dining chair size, comfortably suitable for adult seating. \n\n### Style:\n- **Aesthetic**: The overall design reflects a rustic or farmhouse style, embodying a timeless quality that fits well in both modern and traditional settings.\n\n### Functionality:\n- **Use**: While primarily designed for sitting, the chair's light weight suggests it can easily be moved or repositioned.\n\n### Distinctive Details:\n- **Worn Appearance**: The visible signs of wear and natural aging give the chair character, hinting at its history and use over time, making it a statement piece in any setting.\n\nIn summary, this wooden chair embodies a blend of functionality and historic charm, making it a perfect addition to a garden or rustic interior space.", 
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

module.exports = { openAiAd, openAiImg, openAiNewImg, describeImg, imgVariation, imgMask };
