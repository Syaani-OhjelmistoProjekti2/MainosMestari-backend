require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const stabilityAiKey = process.env.STABILITY_KEY_API;

if (!stabilityAiKey) {
  throw new Error(
    "STABILITY_KEY_API environment variable is not set. Please check your .env file."
  );
}

const stabilityimg = async ({ newPrompt, aiMask }) => {
  console.log("image generation started");

  const formData = new FormData();
  formData.append("image", aiMask, { filename: "image.png" });
  formData.append("prompt", newPrompt);
  formData.append("output_format", "jpeg");
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
        Accept: "image/*",
      },
    }
  );

  return aiAnswer;
};

const stabilitymask = async ({ resizedBuffer }) => {
  console.log("background removal started");

  try {
    if (!Buffer.isBuffer(resizedBuffer)) {
      throw new Error("Input must be a Buffer");
    }

    console.log("Image buffer size:", resizedBuffer.length);

    const formData = new FormData();
    formData.append("image", resizedBuffer, {
      filename: "input.png",
      contentType: "image/png",
    });
    formData.append("output_format", "png");

    // Poistetaan formData.entries() debug-tulostus, koska se ei toimi Node.js:ssä

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/edit/remove-background`,
      formData,
      {
        validateStatus: null,
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${stabilityAiKey}`,
          Accept: "image/*",
        },
      }
    );

    // Jos vastaus ei ole onnistunut, käsitellään virhe
    if (response.status !== 200) {
      if (response.headers["content-type"]?.includes("application/json")) {
        const errorText = new TextDecoder().decode(response.data);
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(`API Error: ${JSON.stringify(errorJson)}`);
        } catch (e) {
          throw new Error(
            `Failed with status ${response.status}: ${errorText}`
          );
        }
      } else {
        throw new Error(`Failed with status ${response.status}`);
      }
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      // Jos meillä on API:n vastaus virheestä
      const errorData = error.response.headers["content-type"]?.includes(
        "application/json"
      )
        ? JSON.parse(new TextDecoder().decode(error.response.data))
        : new TextDecoder().decode(error.response.data);

      console.error("API Error:", {
        status: error.response.status,
        data: errorData,
      });
    }
    throw error;
  }
};

const stabilityTest = async ({ newPrompt, aiMask, description }) => {
  console.log("stabilityTest started");

  try {
    // Tarkistetaan että aiMask on Buffer
    if (!Buffer.isBuffer(aiMask)) {
      console.log("Converting aiMask to Buffer");
      aiMask = Buffer.from(aiMask);
    }

    const formData = new FormData();

    // Lisätään kuva FormDataan oikeassa muodossa
    formData.append("subject_image", aiMask, {
      filename: "image.png",
      contentType: "image/png", // Määritellään content type eksplisiittisesti
    });

    formData.append("background_prompt", newPrompt);
    formData.append("foreground_prompt", description);
    formData.append("original_background_depth", 0);
    formData.append(
      "negative_prompt",
      "background elements, shadows, artifacts, residual objects, extra pixels, distortion, unnecessary details, unrelated objects, clutter, blurred edges, leftover noise"
    );

    const aiAnswer = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/edit/replace-background-and-relight`,
      formData,
      {
        validateStatus: undefined,
        headers: {
          Authorization: `Bearer ${stabilityAiKey}`,
          Accept: "application/json",
        },
      }
    );

    console.log("API Response:", {
      status: aiAnswer.status,
    });

    if (!aiAnswer.data || !aiAnswer.data.id) {
      throw new Error("No valid ID in response");
    }

    if (aiAnswer.status === 400) {
      throw new Error(`API Error: ${JSON.stringify(aiAnswer.data)}`);
    }

    return aiAnswer.data.id;
  } catch (error) {
    console.error("Error in stabilityTest:", error);
    if (error.response) {
      console.error("API Error Response:", error.response.data);
    }
    throw error;
  }
};

const getImageById = async ({ imageId }) => {
  console.log("image fetching started");
  console.log("imageId: " + imageId);

  try {
    const response = await axios.request({
      url: `https://api.stability.ai/v2beta/results/${imageId}`,
      method: "GET",
      validateStatus: undefined,
      headers: {
        Authorization: `Bearer ${stabilityAiKey}`,
        Accept: "application/json",
      },
    });

    console.log("Response status:", response.status);

    if (response.status === 202) {
      // Kuva on vielä prosessoinnissa
      return 202;
    } else if (response.status === 200 && response.data.result) {
      // Kuva on valmis
      return response.data.result;
    } else if (response.status === 400) {
      // API-virhe
      console.error("API error:", response.data);
      throw new Error(
        "API-kutsu epäonnistui: " + JSON.stringify(response.data)
      );
    } else {
      // Muu virhe
      throw new Error("Odottamaton vastaus API:lta");
    }
  } catch (error) {
    console.error("Error in getImageById:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
    }
    throw error;
  }
};

module.exports = { stabilityimg, stabilitymask, stabilityTest, getImageById };
