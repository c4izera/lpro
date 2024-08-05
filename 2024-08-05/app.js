const express = require('express');

const app = express();

const users = [
    {id: 1, name: 'Alice', status: 'Disponivel' },
    {id: 2, name: 'Caio', status: 'Ocupado' },
]

app.get('/api/users', (req, res) => {
    return res.status(200).json(users);
});

app.get('/api/users/:id', (req, res) => {
    console.log(req.params);

    const id = parseInt(req.params.id);
    console.log(id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'O "id" do usuario deve ser um numero.' });
    }

    const user = users.find(user => user.id === id);
    console.log(user);
    if (!user) {
        return res.status(404).json({ error: 'Usuario não encontrado.'});
    }

    return res.status(200).json(user);
});

app.listen(3000, () => {
    console.log("Servirdor rodando na porta 3000...");
}); 