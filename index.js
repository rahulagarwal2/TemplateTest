const express = require("express");
var app = express();


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/About', (req, res) => {
    res.send("Welcome to about page!");
});

app.listen(3000,() => {
    console.log("Server Started");
});