const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const adsRouter = require("./controllers/ads");
const imageScalerRouter = require("./controllers/imageScaler");

const app = express();

app.use(express.static("dist"));

app.use(morgan("tiny"));

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/ads", adsRouter);
app.use("/api/image", imageScalerRouter);

module.exports = app;
