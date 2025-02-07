import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql, { ConnectionOptions } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.VITE_PORT;
const app = express();
app.use(cors());
app.use(express.json());


const access: ConnectionOptions = {
    host: process.env.VITE_DB_HOST,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASSWORD,
    database: process.env.VITE_DB_NAME
};

const conexao = mysql.createConnection(access);

conexao.connect((erro) => {
    if (erro) {
        return console.log('Erro ao conectar ao banco de dados', erro);
    }
    console.log('Conectado ao banco de dados');
});



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta 3000`);
})
