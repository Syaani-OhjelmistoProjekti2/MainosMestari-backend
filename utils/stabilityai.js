const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const FormData = require('form-data');

const stabilityAiKey = process.env.STABILITY_KEY_API

const stabilityimg = async ({ prompt, imgPath }) => {

    const payload = {
        image: fs.createReadStream(`controllers/uploads/${imgPath}`),
        prompt: prompt,
        output_format: "png"
    }

    const aiAnswer = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/inpaint`,
        axios.toFormData(payload, new FormData()),
            {
                validateStatus: undefined,
                responseType: "arraybuffer",
                headers: { 
                    Authorization: `Bearer ${stabilityAiKey}`, 
                    Accept: "image/*",
                },
            },
    );

    return aiAnswer;
};

const stabilitymask = async ({ imgPath }) => {

    console.log("mask operation started")

    const payload = {
        image: fs.createReadStream(`controllers/mask/${imgPath}`),
        output_format: "png"
    }

    const aiMask = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/remove-background`,
        axios.toFormData(payload, new FormData()),
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${stabilityAiKey}`,
                Accept: "image/*"
            },
        },
    );

    return aiMask;
}

module.exports = { stabilityimg, stabilitymask };