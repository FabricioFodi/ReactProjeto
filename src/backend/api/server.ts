import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql, { ConnectionOptions } from 'mysql2';
import XLSX from 'xlsx';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

// Conexão com o MySQL
const access: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'celulares'
};

const conexao = mysql.createConnection(access);

conexao.connect((erro) => {
    if (erro) {
        return console.log('❌ Erro ao conectar ao banco de dados', erro);
    }
    console.log('✅ Conectado ao banco de dados');
});

interface ExcelRequestBody {
    imei: string;
    usuario: string;
    cad_funcionario: string;
    telefone: string;
    modelo: string;
}

app.post('/excel', (req: express.Request<{}, {}, ExcelRequestBody>, res: express.Response) => {
    try {
        const { imei, usuario, cad_funcionario, telefone, modelo } = req.body;
        const filePath = 'C:/Users/fabricio/Desktop/teste.xlsx';

        let arquivo: XLSX.WorkBook;
        let planilha: XLSX.WorkSheet;

        if(fs.existsSync(filePath)) { // Verifica se a planilha existe
            arquivo = XLSX.readFile(filePath);
            planilha = arquivo.Sheets['Planilha 1']; // Pega a planilha pelo nome

            if(!planilha) { // Se a planilha não existir, cria uma nova
                planilha = XLSX.utils.json_to_sheet([]);
                XLSX.utils.book_append_sheet(arquivo, planilha, 'Planilha 1');
            }
        } else {
            arquivo = XLSX.utils.book_new();
            planilha = XLSX.utils.json_to_sheet([]);
            XLSX.utils.book_append_sheet(arquivo, planilha, 'Planilha 1');
        }

        const data = XLSX.utils.sheet_to_json(planilha); // Converte a planilha para JSON
        data.push({ imei, usuario, cad_funcionario, telefone, modelo }); // Adiciona os novos dados

        XLSX.utils.sheet_add_json(planilha, data); // Adiciona os dados na planilha
        XLSX.writeFile(arquivo, filePath); // Sobrescreve a planilha com os novos dados

        console.log('✅ Planilha atualizada com sucesso', data);
        res.status(201).json({ mensagem: 'Planilha atualizada' });

    } catch (erro) {
        const mensagemErro = erro instanceof Error ? erro.message : 'Erro não identificado';
        console.error('❌ Erro ao atualizar planilha', mensagemErro);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
});

// Rota para postar os dados na tabela do MySQL
app.post('/tabela', (req: Request, res: Response) => {
    const { imei, usuario, cad_funcionario, telefone, modelo } = req.body;
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
    console.log(`🚀 Servidor rodando na porta 5000`);
});
//npx tsx watch server.ts 
//comando para rodar o servidor