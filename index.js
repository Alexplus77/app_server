const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
app.use(cors());
const PORT = 5055;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});
app.listen(PORT, () =>
    console.log(`Server started on port: ${PORT}`),
)