const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const FormData = require('form-data');

const stabilityAiKey = process.env.STABILITY_KEY_API

const stabilityimg = async ({ newPrompt, aiMask }) => {

    console.log("image generation started");
    
    const formData = new FormData();
    formData.append('image', aiMask, { filename: 'image.png' });
    formData.append('prompt', newPrompt);
    formData.append('output_format', 'jpeg');
    //formData.append('negative_prompt', 'Dont touch the given image');
    //formData.append('grow_mask', 10);

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

const stabilityTest = async ({ newPrompt, aiMask, description }) => {
    console.log('stabilityTest started')

    const bufferData = Buffer.from(aiMask, 'base64');
    fs.writeFileSync('image.png', bufferData);

    const formData = new FormData();
    formData.append('subject_image', aiMask, { filename: 'image.png' });
    formData.append('background_prompt', newPrompt);
    formData.append('foreground_prompt', description);
    formData.append('original_background_depth', 0)
    formData.append('negative_prompt', 'background elements, shadows, artifacts, residual objects, extra pixels, distortion, unnecessary details, unrelated objects, clutter, blurred edges, leftover noise');
    //formData.append('light_source_direction', 'right');

    const aiAnswer = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/replace-background-and-relight`,
        formData,
        {
            validateStatus: undefined,
            headers: {
                Authorization: `Bearer ${stabilityAiKey}`,
            },
        },
    );

    console.log('AiAnswer status: ' + aiAnswer.status);

    const imageId = aiAnswer.data.id

    return imageId;
    /*
    console.log('ImageId: ' + imageId)

    let progress = true

    while(progress) {
        const response = await axios.request({
            url: `https://api.stability.ai/v2beta/results/${imageId}`,
            method: "GET",
            validateStatus: undefined,
            headers: {
                Authorization: `Bearer ${stabilityAiKey}`,
                Accept: 'application/json', // Use 'application/json' to receive base64 encoded JSON
            },
            });
        
            console.log('Response status: ' + response.status)

            if (response.status === 404 || response.status === 202) {
                console.log("in progress")
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 5 seconds
            } else {
                progress = false;
                return response.data.result;
            }
    }
    */
}

const getImageById = async ({ imageId }) => {
    console.log('image fetching started');
    console.log('imageId: ' + imageId);
    const response = await axios.request({
        url: `https://api.stability.ai/v2beta/results/${imageId}`,
        method: "GET",
        validateStatus: undefined,
        headers: {
            Authorization: `Bearer ${stabilityAiKey}`,
            Accept: 'application/json', // Use 'application/json' to receive base64 encoded JSON
        },
        });

    console.log('Response status: ' + response.status);

    if (response.status === 202) {
        console.log('Palautetaan statuskoodi 202')
        return response.status
    } else {
        return response.data.result;
    };
}
module.exports = { stabilityimg, stabilitymask, stabilityTest, getImageById };