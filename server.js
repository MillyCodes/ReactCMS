const express = require("express");
const app = express();
const PORT = 4444;

//mongoose
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose
    .connect(process.env.MONO_URI)
    .then(() => console.log("db connected"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log("Listening on PORT 4444");
});

app.get("/", function(req, res) {
    res.send("Hello World");
});
