const express = require("express");
const cors = require("cors");
const adsRouter = require("./controllers/ads");
const morgan = require("morgan");

const app = express();

app.use(express.static("dist"));

app.use(morgan("tiny"));

app.use(cors());
app.use(express.json());

app.use("/api/ads", adsRouter);

module.exports = app;
