import express from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from "path";

// Configurando o arquivo da variavel de ambiente
dotenv.config()

//Criando servidor
const server = express();

// Configurando o template engine mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Configurando pasta de arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));

// Rotas


server.listen(process.env.PORT);