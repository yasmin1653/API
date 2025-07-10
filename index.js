const express = require('express');
const app = express();

const calculadoraIMC = require("./calculadoraIMC");

app.get('/',(req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);

    res.json({imc: imc});
});

app.listen(8080, () => {
    let data = new Data();
    console.log("Servidor node iniciado em: " + data);
})




// AULA DO DIA 3 DE JULHO

import express from 'express';

const app = express();

app.get('/', (req, res) =>  {
    res.json({mensagem: "API de fato histórico"});
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});



function sevicoBuscarFatoPorAno (ano)
{
    return ano;
}