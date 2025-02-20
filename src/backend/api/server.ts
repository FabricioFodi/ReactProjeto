import express, { Request, Response } from 'express'
import cors from 'cors';
import mysql, { ConnectionOptions } from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const access: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'celulares'
};

const conexao = mysql.createConnection(access);

conexao.connect((erro) => {
    if (erro) {
        return console.log('Erro ao conectar ao banco de dados', erro);
    }
    console.log('Conectado ao banco de dados');
});

app.post('/tabela', (req: Request, res: Response) => {
    const { imei, usuario, cad_funcionario, telefone, modelo } = req.body;
    console.log({ imei, usuario, cad_funcionario, telefone, modelo });
    const sql = 'INSERT INTO dados (imei, usuario, cad_funcionario, telefone, modelo) VALUES (?, ?, ?, ?, ?)';
    conexao.query(sql, [imei, usuario, cad_funcionario, telefone, modelo], (erro, resultado) => {
        if (erro) {
            console.error('Erro no MySQL:', erro);
            return res.status(400).json({ erro: erro.message });
        }
        return res.status(201).json({ mensagem: 'Cadastrado com sucesso' });
    });

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta 5000`);
})
