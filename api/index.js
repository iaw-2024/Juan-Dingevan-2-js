const express = require("express");
const fs = require("fs");
const app = express();

app.get("/express", (req, res) => {
    fs.readFile("public/express/index.html", "utf8", (err, html) => {
        if(err) {
            console.log(err)
            res.status(500).send("Error del servidor");
            return;
        }

        fs.readFile("./public/datos.json", "utf8", (err2, datosCrudos) => {
            if(err2) {
                console.log(err2)
                res.status(500).send("Error 2 del servidor");
                return;
            }

            let datos = JSON.parse(datosCrudos);

            let tableHTML = '<table class="w-full border-collapse border shadow-lg bg-white">';
            tableHTML += '<thead><tr class="bg-green-600 text-white">';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Tostadores</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">País de Origen</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Región de Origen</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Varietales</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Proceso</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Notas de Cata</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Peso (gr)</th>';
            tableHTML += '<th class="py-3 px-6 text-left border-b border-black-200">Precio (USD)</th>';
            tableHTML += '</tr></thead><tbody>';

            datos.forEach(cafe => {
                tableHTML += '<tr class="border-b border-gray-200">';
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['tostadores']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['paisDeOrigen']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['regionDeOrigen']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['varietales']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['proceso']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['notasDeCata']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['peso']}</td>`;
                tableHTML += `<td class="py-3 px-6 text-left whitespace-nowrap">${cafe['precio']}</td>`;
                tableHTML += '</tr>';
            });

            tableHTML += '</tbody></table>';

            console.log(tableHTML);

            const htmlNew = html.replace("<TABLA />", tableHTML);

            res.send(htmlNew);
        })
    })
});

app.get("/cliente_servidor", (req, res) => {
    res.sendFile("./public/cliente_servidor/index.html", { root: '.' });
});

app.get("/datos", (req, res) => {
    res.send("pepe");
    //res.sendFile("./public/datos.json", { root: '.' });
});

app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;