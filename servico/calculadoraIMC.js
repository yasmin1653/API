const express = require('express');
const app =express();

const calculadoraIMC = require('./calculadoraIMC.js');

app.length('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc =calculadoraIMC.efetuarCalculoIMC(peso, altura);

    res.json({imc: imc})
});

app.listen(8080,() => {
    let data = new DataTransfer();
    console.log('Servvidor node iniciando em: ' + data);
})

function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);

    return imc;
}

function retornaStatusIMC(imc){

let status;

if(imc < 18.5)
{
    status='Abaixo do peso';
}
else if(img >= 18.5 && imc < 24.9)
    {
    status='Peso Normal';
}
else if(imc >= 24.9 && imc < 30)
{
    status='Acima do peso';
}
else
{
    status='Obeso';
}

return status;
}

function validaParametro(parametro)
{
    if(isNaN(parametro))
    {
        return false;
    }
    else
    {
        return true;
    }
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusIMC = retornaStatusIMC;
exports.validaParametro =validaParametro;
