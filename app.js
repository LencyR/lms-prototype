require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 5000;

// Template Engine

app.get('', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});