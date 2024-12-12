// POST metodi openAi:n dall-E 2 käyttöön !!Removed from forntend!!
adsRouter.post("/dall2image", upload.single("img"), async (req, res) => {
  try {
    // Tallennetaan ladatun kuvatiedoston nimi (imgPath) ja käyttäjän syöttämä prompt
    const imgPath = req.filename;
    const prompt = req.body.prompt;

    // Kutsutaan OpenAI:ta kuvan luomiseksi käyttäjän syöttämän promptin ja kuvatiedoston polun perusteella
    const aiAnswer = await openAi.openAiImg({ prompt, imgPath });

    // Lähetetään OpenAI:n vastaus asiakkaalle JSON-muodossa
    res.json(aiAnswer);
  } catch (error) {
    // Käsitellään virhe ja lähetetään virheilmoitus vastauksena
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Image processing failed" });
  } finally {
    // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
    try {
      await fs.unlinkSync(`controllers/uploads/${req.filename}`);
    } catch (unlinkError) {
      console.error("Error removing image file:", unlinkError);
    }
  }
});

// POST metodi openAi:n dall-E 3 käyttöön !!Removed from forntend!!
adsRouter.post("/dall3image", upload.single("img"), async (req, res) => {
  try {
    // Tallennetaan ladatun kuvatiedoston nimi (imgPath) ja käyttäjän syöttämä prompt
    const imgPath = req.filename;
    const userPrompt = req.body.prompt;

    // Kutsutaan OpenAI:ta kuvaustiedon saamiseksi ladatusta kuvasta
    const description = await openAi.describeImg({ imgPath });

    // Kutsutaan OpenAI:ta uuden kuvan luomiseksi käyttäjän syöttämän promptin ja kuvauksen perusteella
    const aiAnswer = await openAi.openAiNewImg({ userPrompt, description });

    // Lähetetään OpenAI:n vastaus asiakkaalle JSON-muodossa
    res.json(aiAnswer);
  } catch (error) {
    // Käsitellään virhe ja lähetetään virheilmoitus vastauksena
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Image processing failed" });
  } finally {
    // Poista ladattu kuva palvelimelta riippumatta siitä, onnistuiko prosessi tai ei
    try {
      await fs.unlinkSync(`controllers/uploads/${req.filename}`);
    } catch (unlinkError) {
      console.error("Error removing image file:", unlinkError);
    }
  }
});
