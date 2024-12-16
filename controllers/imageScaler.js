const express = require("express");
const sharp = require("sharp");
const { getFormatConfig } = require("../utils/formatConfig");

const router = express.Router();

router.post("/scale", async (req, res) => {
  try {
    const { imageData, platform, format } = req.body;
    if (!imageData) {
      return res.status(400).json({ error: "Missing image data" });
    }

    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    if (platform && format) {
      const config = getFormatConfig(platform, format);
      if (!config) {
        return res.status(400).json({ error: "Invalid platform or format" });
      }

      // Käytä sharp-kirjastoa kuvan tietojen hakemiseen
      const { width, height } = await sharp(buffer).metadata();
      const aspectRatio = width / height;

      let resizeHeight = config.height;

      const scaledImage = await sharp(buffer)
        .resize(config.width, resizeHeight, {
          fit: config.fit,
          position: "center",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
          withoutEnlargement: false,
          withoutReduction: false,
          kernel: "lanczos3",
        })
        .png({ quality: 100 })
        .toBuffer();

      res.json({
        scaledImage: `data:image/png;base64,${scaledImage.toString("base64")}`,
      });
    } else {
      res.json({
        scaledImage: `data:image/png;base64,${buffer.toString("base64")}`,
      });
    }
  } catch (error) {
    console.error("Error scaling image:", error);
    res.status(500).json({
      error: "Error processing image",
      details: error.message,
    });
  }
});

module.exports = router;
