import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql, { ConnectionOptions } from 'mysql2';
import ExcelJS from 'exceljs';
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


app.post('/exportar-excel', (req: express.Request<{}, {}, ExcelRequestBody>, res: express.Response) => {
    try {
        const query = 'SELECT * FROM dados'

        conexao.query(query, (erro, resultado) => {
            if (erro) {
                console.error('❌ Erro ao buscar dados do MySQL', erro);
                return res.status(400).json({ erro: erro.message });
            }
            if ((resultado as any[]).length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum dado encontrado' });
            }

            const filePath = 'C:/Users/fabricio/Desktop/teste-excel';
            const fileName = `${filePath}/dados.xlsx`;

            //verifica se o diretório existe, se não cria
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }

            //Cria um novo arquivo
            const arquivo = new ExcelJS.Workbook();
            const planilha = arquivo.addWorksheet('Dados')

            const headers = Object.keys((resultado as any[])[0]);
            planilha.addRow(headers);

            //Adiciona os dados ao arquivo
            const dados = (resultado as any[]).map(row => Object.values(row));
            planilha.addRows(dados); // Adiciona as linhas

            planilha.eachRow((row, rowNumber) => {
                row.eachCell((cell, colNumber) => {
                    // Centraliza todas as células
                    cell.alignment = { vertical: 'middle', horizontal: 'center' };

                    if (colNumber === 2) {
                        cell.numFmt = '@';
                    }
                });
            });

            planilha.columns = [
                { width: 4 }, // A
                { width: 15 }, // B
                { width: 36 }, // C
                { width: 15 }, // D
                { width: 16 }, // E
                { width: 25 }  // F
            ];

            //Salva o arquivo
            arquivo.xlsx.writeFile(fileName)
                .then(() => {
                    console.log('✅ Planilha exportada com sucesso');
                    res.status(201).json({ mensagem: 'Planilha exportada' });
                })
                .catch((error) => {
                    console.error('❌ Erro ao salvar planilha', error);
                    res.status(500).json({ mensagem: 'Erro ao salvar planilha' });
                });
        });
    } catch (error) {
        const mensagemErro = error instanceof Error ? error.message : 'Erro não identificado';
        console.error('❌ Erro ao exportar planilha', mensagemErro);
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