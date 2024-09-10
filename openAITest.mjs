import OpenAI from "openai";
const openai = new OpenAI({apiKey: " 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"});

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

console.log(completion.choices[0].message);