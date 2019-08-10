const express = require('express');
const routes = require('./routes'); 

const server = express();

//Função de teste
/*server.get('/', (req, res) => {
    return res.send("Hello World");
})*/
server.use(express.json());
server.use(routes);
server.listen(3333); // Escutar na porta 3333