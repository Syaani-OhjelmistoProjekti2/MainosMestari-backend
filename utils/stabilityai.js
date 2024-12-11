require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const stabilityAiKey = process.env.STABILITY_KEY_API;

if (!stabilityAiKey) {
  throw new Error(
    "STABILITY_KEY_API environment variable is not set. Please check your .env file.",
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
    },
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
    formData.append("grow_mask", 15); // Pehmennetään reunat

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
      },
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
            `Failed with status ${response.status}: ${errorText}`,
          );
        }
      } else {
        throw new Error(`Failed with status ${response.status}`);
      }
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorData = error.response.headers["content-type"]?.includes(
        "application/json",
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

const stabilityInpaint = async ({ translatedPrompt, aiMask, description }) => {
  console.log("stabilityTest started");
  console.log("translatedPrompt: " + translatedPrompt);
  console.log("description: " + description);

  try {
    if (!Buffer.isBuffer(aiMask)) {
      console.log("Converting aiMask to Buffer");
      aiMask = Buffer.from(aiMask);
    }

    const formData = new FormData();

    // Päätiedot
    formData.append("subject_image", aiMask, {
      filename: "image.png",
      contentType: "image/png",
    });

    if (!translatedPrompt) {
      throw new Error("Background prompt is required");
    }

    // Tehokkaampi taustakuvaus mainoskuville
    formData.append(
      "background_prompt",
      `${translatedPrompt}, high quality commercial photography style`,
    );

    // Varmistetaan että tuote säilyy alkuperäisen näköisenä
    formData.append("preserve_original_subject", 1); // Korkeampi arvo säilyttää tuotteen tarkemmin

    // Kuvaile tuotetta tarkemmin
    formData.append(
      "foreground_prompt",
      `professional product photo of ${description}, maintain original colors and details, commercial photography quality`,
    );

    // Säädetään taustan syvyysvaikutelmaa
    formData.append("original_background_depth", 0.4);

    // Vältetään häiriöitä kuvassa
    formData.append(
      "negative_prompt",
      "border artifacts, frames, blurry edges, background residue, seams, transitions, noise, distortion, blurry edges, oversaturation, unrealistic lighting",
    );

    // Määritellään output-formaatti
    formData.append("output_format", "png");

    const aiAnswer = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/edit/replace-background-and-relight`,
      formData,
      {
        validateStatus: undefined,
        headers: {
          Authorization: `Bearer ${stabilityAiKey}`,
          Accept: "application/json",
        },
      },
    );

    console.log("API Response:", {
      status: aiAnswer.status,
      data: aiAnswer.data,
    });

    if (aiAnswer.status === 400) {
      throw new Error(`API Error: ${JSON.stringify(aiAnswer.data)}`);
    }

    if (!aiAnswer.data || !aiAnswer.data.id) {
      throw new Error(
        `No valid ID in response: ${JSON.stringify(aiAnswer.data)}`,
      );
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
      return 202;
    } else if (response.status === 200 && response.data.result) {
      return response.data.result;
    } else if (response.status === 400) {
      console.error("API error:", response.data);
      throw new Error(
        "API-kutsu epäonnistui: " + JSON.stringify(response.data),
      );
    } else {
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
module.exports = {
  stabilityimg,
  stabilitymask,
  stabilityInpaint,
  getImageById,
};
