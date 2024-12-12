const PROMPT_OPTIONS = {
  durability: {
    prompt:
      "Tuotteen kestävyys ja laadukkuus: materiaalien laatu, pitkäikäisyys, kestävä rakenne",
  },
  repairability: {
    prompt:
      "Tuotteen korjattavuus: vaihdettavat osat, korjausmahdollisuudet, yksinkertainen rakenne",
  },
  maintainability: {
    prompt:
      "Tuotteen huollettavuus: helppo puhdistettavuus, huollon tarve, huolto-ohjeet",
  },
  upgradability: {
    prompt:
      "Tuotteen päivitettävyys: muokattavuus, osien vaihdettavuus, monikäyttöisyys",
  },
  recyclability: {
    prompt:
      "Tuotteen arvon säilyminen: laadukkaat materiaalit, ajaton design, kierrätettävyys",
  },
};

const buildUserPrompt = ({ prompt, options }) => {
  const selectedPrompts = options
    .map((option) => PROMPT_OPTIONS[option]?.prompt || "")
    .filter(Boolean)
    .join("\n- ");

  return `
  Kirjoita myyvä ja houkutteleva myynti-ilmoitus suomeksi. 
  
  Kuvaus tuotteesta: "${prompt}"
  
  ${
    options.length > 0
      ? `
  Korosta erityisesti seuraavia näkökulmia:
  - ${selectedPrompts}`
      : ""
  }
  
Tekstin ohjeet:
1. Pidä teksti ytimekkäänä ja selkeänä
2. Tee ilmoituksesta konkreettinen ja vakuuttava
3. Herätä lukijan kiinnostus
4. Korosta tuotteen arvoa ja hyötyjä
5. Käytä luonnollista kieltä ilman erikoismerkkejä
6. Sisällytä aitoja yksityiskohtia jotka tekevät ilmoituksesta uskottavan

Vältä erikoismerkkejä ja formatointia. Kirjoita puhtaasti tekstimuodossa.
  `;
};

module.exports = {
  PROMPT_OPTIONS,
  buildUserPrompt,
};
