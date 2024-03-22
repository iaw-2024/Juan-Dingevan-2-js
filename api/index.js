const express = require("express");
const app = express();

app.get("/express", (req, res) => {
    res.sendFile("./public/express/index.html", { root: '.' });
});

app.get("/cliente_servidor", (req, res) => {
    res.sendFile("./public/cliente_servidor/index.html", { root: '.' });
});

app.get("/datos", (req, res) => {
    res.sendFile("./public/datos.json", { root: '.' });
});

app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;