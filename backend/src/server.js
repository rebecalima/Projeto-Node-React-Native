const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes'); 

const server = express();

 mongoose.connect('mongodb+srv://user1:user1@cluster0-hu4dh.mongodb.net/oministack?retryWrites=true&w=majority',{
     useNewUrlParser: true
 });
//Função de teste
/*server.get('/', (req, res) => {
    return res.send("Hello World");
})*/
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333); // Escutar na porta 3333