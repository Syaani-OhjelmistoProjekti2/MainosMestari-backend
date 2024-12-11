const sharp = require("sharp");

const optimizeImage = async (imgBuffer) => {
  try {
    const metadata = await sharp(imgBuffer).metadata();

    // Remove Background API rajoitukset
    const MAX_PIXELS = 4194304; // 4.19M pikseliä (mask rajoitus)
    const MAX_RATIO = 2.0; // Kuvasuhde max 1:2
    const MIN_SIDE = 64; // Minimi sivun pituus

    let aspectRatio = metadata.width / metadata.height;

    // Rajoita kuvasuhde
    aspectRatio = Math.min(Math.max(aspectRatio, 1 / MAX_RATIO), MAX_RATIO);

    // Laske optimaaliset mitat
    let newWidth, newHeight;

    if (aspectRatio > 1) {
      newWidth = Math.min(
        Math.floor(Math.sqrt(MAX_PIXELS * aspectRatio)),
        Math.floor(Math.sqrt(MAX_PIXELS) * aspectRatio),
      );
      newHeight = Math.floor(newWidth / aspectRatio);
    } else {
      newHeight = Math.min(
        Math.floor(Math.sqrt(MAX_PIXELS / aspectRatio)),
        Math.floor(Math.sqrt(MAX_PIXELS) / aspectRatio),
      );
      newWidth = Math.floor(newHeight * aspectRatio);
    }

    // Varmista minimikoko
    newWidth = Math.max(newWidth, MIN_SIDE);
    newHeight = Math.max(newHeight, MIN_SIDE);

    // Varmista ettei ylitetä maksimipikselimäärää
    while (newWidth * newHeight > MAX_PIXELS) {
      newWidth = Math.floor(newWidth * 0.95);
      newHeight = Math.floor(newHeight * 0.95);
    }

    return sharp(imgBuffer)
      .withMetadata({ orientation: undefined })
      .resize(newWidth, newHeight, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
        position: "center",
      })
      .png({
        quality: 100,
        compressionLevel: 0,
      })
      .toBuffer();
  } catch (error) {
    console.error("Error optimizing image:", error);
    throw error;
  }
};

module.exports = {
  optimizeImage,
};
