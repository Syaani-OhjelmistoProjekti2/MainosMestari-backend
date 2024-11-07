const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const FormData = require('form-data');

const stabilityAiKey = process.env.STABILITY_KEY_API

const stabilityimg = async ({ prompt, aiMask }) => {

    console.log("image generation started");

    const formData = new FormData();
    formData.append('image', aiMask, { filename: 'image.png' });
    formData.append('prompt', prompt);
    formData.append('output_format', 'png');

    const aiAnswer = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/inpaint`,
        formData,
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${stabilityAiKey}`,
                Accept: "image/*"
            },
        },
    );

    return aiAnswer;
};

const stabilitymask = async ({ resizedBuffer }) => {

    console.log("background removal started");

    const formData = new FormData();
    formData.append('image', resizedBuffer, { filename: 'image.png' });
    formData.append('output_format', 'png');

    const aiMask = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/remove-background`,
        formData,
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${stabilityAiKey}`,
                Accept: "image/*"
            },
        },
    );

    return aiMask.data;
}

module.exports = { stabilityimg, stabilitymask };