// Importando bibliotecas
import express from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from "path";

// Importando arquivos de Rotas
import mainroutes from './routes'

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
server.use(mainroutes)
//Rota de pagina não encontrada.
server.use((req, res) => {
    res.render('pages/404')
})


server.listen(process.env.PORT);