require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");

const stabilityAiKey = process.env.STABILITY_KEY_API;

if (!stabilityAiKey) {
  throw new Error(
    "STABILITY_KEY_API environment variable is not set. Please check your .env file."
  );
}

const stabilityimg = async ({ newPrompt, aiMask }) => {
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
  try {
    if (!Buffer.isBuffer(resizedBuffer)) {
      throw new Error("Input must be a Buffer");
    }

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

const stabilityInpaint = async ({
  translatedPrompt,
  aiMask,
  description,
  creativity = false,
}) => {
  try {
    if (!Buffer.isBuffer(aiMask)) {
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

    // Säädä parametreja luovuustason mukaan
    if (creativity) {
      // Luovempi moodi
      formData.append("preserve_original_subject", "0.3"); // Enemmän vapautta muokkaukseen
      formData.append("original_background_depth", "0.2"); // Vapaampi tausta
      formData.append(
        "background_prompt",
        `${translatedPrompt}, furniture perfectly scaled and fitted to the scene`
      );
      formData.append(
        "negative_prompt",
        "unrealistic proportions, misaligned furniture, perspective errors, disproportionate scaling, background inconsistencies, furniture appearing too large or too small"
      );
    } else {
      // Konservatiivisempi moodi
      formData.append("preserve_original_subject", "0.7"); // Tarkempi alkuperäinen
      formData.append("original_background_depth", "0.8"); // Maltillisempi tausta
      formData.append(
        "background_prompt",
        `${translatedPrompt}, high quality commercial photography style`
      );
      formData.append(
        "negative_prompt",
        "border artifacts, blurry edges, background residue, seams, distortion, oversaturation, unrealistic lighting"
      );
    }
    // Vältetään häiriöitä kuvassa

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
      }
    );

    if (aiAnswer.status === 400) {
      throw new Error(`API Error: ${JSON.stringify(aiAnswer.data)}`);
    }

    if (!aiAnswer.data || !aiAnswer.data.id) {
      throw new Error(
        `No valid ID in response: ${JSON.stringify(aiAnswer.data)}`
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

    if (response.status === 202) {
      return 202;
    } else if (response.status === 200 && response.data.result) {
      return response.data.result;
    } else if (response.status === 400) {
      console.error("API error:", response.data);
      throw new Error(
        "API-kutsu epäonnistui: " + JSON.stringify(response.data)
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
