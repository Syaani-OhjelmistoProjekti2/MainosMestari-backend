const OpenAI = require("openai");
require("dotenv").config();
const { buildUserPrompt } = require("./promptConfig");

const openAIKey = process.env.OPENAI_KEY_API;

const openai = new OpenAI({ apiKey: openAIKey });

const describeImg = async ({ imgBuffer }) => {
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
  const adText = await openai.chat.completions.create({
    model: "gpt-4o-2024-11-20",
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
  const newPrompt = await openai.chat.completions.create({
    model: "gpt-4o-2024-11-20",
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

const generateFinAdText = async ({ prompt, options }) => {
  const userPrompt = buildUserPrompt({ prompt, options });

  const newPrompt = await openai.chat.completions.create({
    model: "gpt-4o-2024-11-20",
    messages: [
      {
        role: "system",
        content: "Olet suomenkielinen myynti-ilmoitusten luoja",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  return newPrompt.choices[0].message.content;
};

module.exports = {
  describeImg,
  createAdText,
  translatePrompt,
  describeImg,
  generateFinAdText,
};
