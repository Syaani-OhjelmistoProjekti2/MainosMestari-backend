const express = require("express");
const sharp = require("sharp");
const { getFormatConfig } = require("../utils/formtaConfig");

const router = express.Router();

router.post("/scale", async (req, res) => {
  try {
    const { imageData, platform, format } = req.body;

    if (!imageData) {
      return res.status(400).json({ error: "Missing image data" });
    }

    // Poistetaan data:image/png;base64, jos se on mukana
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    // Jos platform ja format on annettu, skaalataan kuva
    if (platform && format) {
      // Haetaan konfiguraatio valitulle alustalle ja formaatille
      const config = getFormatConfig(platform, format);
      if (!config) {
        return res.status(400).json({ error: "Invalid platform or format" });
      }

      // Skaalataan kuva optimoiduilla asetuksilla
      const scaledImage = await sharp(buffer)
        .resize(config.width, config.height, {
          fit: config.fit, // Käytetään formaatin oletus fit-asetusta
          position: "center",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
          withoutEnlargement: true,
        })
        .toBuffer();

      res.json({
        scaledImage: `data:image/png;base64,${scaledImage.toString("base64")}`,
      });
    } else {
      // Jos platformia ja formattia ei ole annettu, palautetaan alkuperäinen kuva
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
