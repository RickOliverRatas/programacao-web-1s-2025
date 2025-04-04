const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let estoque = [];

app.post('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = { id, nome, qtd: parseInt(qtd) };

    estoque.push(produto);
    res.send(`Produto ${nome} adicionado com sucesso.`);
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.delete('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send(`Produto com id ${id} removido com sucesso.`);
});

app.put('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(produto => produto.id === id);

    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send(`Quantidade do produto ${id} alterada para ${qtd}.`);
    } else {
        res.status(404).send('Produto não encontrado.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
