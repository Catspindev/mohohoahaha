const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/checkName/:name', async (req, res) => {
    const name = req.params.name;
    const apiUrl = `https://api.mojang.com/users/profiles/minecraft/${name}`;

    try {
        const response = await fetch(apiUrl);
        res.status(response.status).send();
    } catch (error) {
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
