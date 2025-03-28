const express = require('express');
const { somar, subtrair, multiplicar, dividir } = require('./util/calculadora');
const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = somar(Number(a), Number(b));
  res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = subtrair(Number(a), Number(b));
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = multiplicar(Number(a), Number(b));
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  if (b == 0) {
    return res.send('Erro: Não é possível dividir por zero!');
  }
  const resultado = dividir(Number(a), Number(b));
  res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
