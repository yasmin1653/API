import express from 'express';
import {sevicoBuscarFatoPorAno} from './servico/servico.js';

const app = express();

app.get('/', (req, res) => {
    
    let anoFato = req.query.ano;

    var fato = sevicoBuscarFatoPorAno(anoFato);

    res.json({ano:fato});
});


import fatosHistoricos from './dados/fatos.js';

function sevicoBuscarFatoPorAno (ano)
{
    //Aq entrará a lógica da busca do fato
}

function servicoValidaAno (ano)
{
    //Lógica da Validação aq
}

function sevicoBuscarFatoPorAno (ano)
{

}

app.get('/', (req, res) => {
    let anoFato=req.query.ano;

    if{servicoValidaAno(anoFato)
        {
            //Executa se o ano for válido
        }
    else
    {
        //Executa se o ano for válido
    }
    }
}
);