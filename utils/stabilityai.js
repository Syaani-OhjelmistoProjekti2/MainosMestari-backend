const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const FormData = require('form-data');

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
                    Authorization: `Bearer ${process.env.STABILITY_KEY}`, 
                    Accept: "image/*",
                },
            },
    );

    return aiAnswer;
};

module.exports = { stabilityimg };