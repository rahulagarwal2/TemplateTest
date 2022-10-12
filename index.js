const express = require("express");
var app = express();


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/home', (req, res) => {
    res.send("Hurray!!! you hit the home page");
});

app.listen(3000,() => {
    console.log("Server Started");
});