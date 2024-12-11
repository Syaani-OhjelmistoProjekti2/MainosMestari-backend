const app = require("./app");
require("dotenv").config();
const express = require("express");
const path = require("path");

// Lisää tämä: frontend buildin tarjoilu
app.use(express.static(path.join(__dirname, "/dist")));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
