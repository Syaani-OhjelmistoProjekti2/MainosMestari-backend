const path = require("path");

const randomFilePath = (file) => {
  // Luodaan ainutlaatuinen tunniste tiedoston nimeen käyttämällä aikaleimaa ja satunnaista numeroa
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

  // Luodaan tiedostonimi, johon lisätään alkuperäisen tiedoston laajennus
  const filename = "image-" + uniqueSuffix + path.extname(file.originalname);

  return filename;
};

module.exports = { randomFilePath };
