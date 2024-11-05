const app = require("./app");
require('dotenv').config();


const express = require('express');
const path = require('path');

// Lisää tämä: frontend buildin tarjoilu
app.use(express.static(path.join(__dirname, '/dist')));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

/*
const options = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.cert')
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
*/