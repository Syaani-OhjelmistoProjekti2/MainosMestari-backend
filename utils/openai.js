const OpenAI = require("openai");
require("dotenv").config();

const openAIKey = process.env.OPENAI_KEY_API;

const openai = new OpenAI({ apiKey: openAIKey });

const describeImg = async ({ imgBuffer }) => {
  console.log("image description started");
  const base64img = imgBuffer.toString("base64");
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe the main furniture piece in this image with as much detail as possible, focusing on its key characteristics such as shape, material, color, texture, and design features. Pay close attention to elements like size, style, functionality, and any distinctive details or patterns that make it stand out. Be precise in identifying these important aspects to create a thorough and accurate description of the furniture.",
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${base64img}`,
            },
          },
        ],
      },
    ],
  });

  return response.choices[0].message.content;
};

const describeImg2 = async ({ imgBuffer }) => {
  console.log("image description started");
  const base64img = imgBuffer.toString("base64");
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe the main piece of furniture, give me style, color, shape and size of the furniture",
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${base64img}`,
            },
          },
        ],
      },
    ],
  });

  return response.choices[0].message.content;
};

const createAdText = async ({ description, viewPoints }) => {
  console.log("addText generation started");
  const adText = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are advertiser." },
      {
        role: "user",
        content: `Write a advertisment text for used furniture from this viewpont: ${viewPoints}. And from this furniture description: ${description} write the advertisment text in finnish and it should be short`,
      },
    ],
  });
  return adText.choices[0].message;
};

const translatePrompt = async ({ prompt }) => {
  console.log("translation operation started");
  const newPrompt = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are professional translator." },
      {
        role: "user",
        content: `Translate this to english: ${prompt} if the given text is already english return me just the given text, give me just the translation, nothing more.`,
      },
    ],
  });
  return newPrompt.choices[0].message.content;
};

const generateFinAdText = async ({ prompt }) => {
  // Lisää viewpoints eli käytettävyys, korjattuvuus, huolletoisuus, käyttötarkoitus yms.
  console.log("translation operation started");
  const newPrompt = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "Olet suomenkielinen myynti-ilmoitusten luoja",
      },
      {
        role: "user",
        content: `Kirjoita myyvä ja houkutteleva myynti-ilmoitus käytetylle huonekalulle suomeksi. Keskity erityisesti seuraaviin näkökulmiin:
        - **Korjattavuus**: Kuinka helposti huonekalu voidaan korjata tai huoltaa? 
        - **Parhaat puolet**: Mitkä ovat huonekalun tärkeimmät edut ja ominaisuudet?
        - **Käyttötarkoitukset**: Missä ja miten huonekalua voidaan käyttää?
         
        Kuvaus huonekalusta: "${prompt}"
        
        Ilmoituksen tulee olla lyhyt, ytimekäs ja vakuuttava. Pyri herättämään kiinnostus ja houkuttelemaan ostajia. Vältä käyttämästä markdown-muotoilua tai muita erikoismerkkejä, kuten tähtiä (*), ja kirjoita puhtaasti tekstimuotoista sisältöä.`,
      },
    ],
  });
  return newPrompt.choices[0].message.content;
};

module.exports = {
  describeImg,
  createAdText,
  translatePrompt,
  describeImg2,
  generateFinAdText,
};
