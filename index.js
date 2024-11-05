const app = require("./app");
require('dotenv').config();

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