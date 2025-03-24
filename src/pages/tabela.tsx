import Header from './header.js';
import '../backend/styles/pagina-tabela.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tabela() {

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    async function exportarExcel() {
        const toastId = 'export-toast';
        try {
            const response = await fetch('http://localhost:5000/exportar-excel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.erro || 'Erro na resposta do servidor');
            }

            console.log(data);
            if (!toast.isActive(toastId)) {
                toast.success('Planilha criada com sucesso', { toastId, autoClose: 3000 });
            }
        } catch (error) {
            console.error('Erro ao criar planilha', error);

            if (!toast.isActive(toastId)) {
                toast.error('Erro ao criar Planilha', { toastId, autoClose: 3000 });
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Lista de campos obrigatórios
        const camposObrigatorios = ['imei', 'user', 'cad_funcionario', 'telefone', 'modelo'];
        let formValido = true;
        const inputs: HTMLInputElement[] = [];

        //Verifica se os campos obrigatórios estão preenchidos
        camposObrigatorios.forEach((id) => {
            const input = document.getElementById(id) as HTMLInputElement;

            if (!input.value.trim()) {
                formValido = false;
                input.style.border = '2px solid red';
                inputs.push(input);
            }
        });

        if (!formValido) {
            if (!toast.isActive('form-validation-toast')) {
                toast.error('Preencha todos os campos obrigatórios', { toastId: 'form-validation-toast', autoClose: 3000 });
            }
            await sleep(3000);
            inputs.forEach((input) => (input.style.border = '1px solid black'));
            return;
        }

        //se o formulário for válido, envia os dados
        const imei = (document.getElementById('imei') as HTMLInputElement).value;
        const usuario = (document.getElementById('user') as HTMLInputElement).value;
        const cad_funcionario = (document.getElementById('cad_funcionario') as HTMLInputElement).value;
        const telefone = (document.getElementById('telefone') as HTMLInputElement).value;
        const modelo = (document.getElementById('modelo') as HTMLInputElement).value;

        console.log({ imei, usuario, cad_funcionario, telefone, modelo });

        try {
            const response = await fetch('http://localhost:5000/tabela', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imei, usuario, cad_funcionario, telefone, modelo })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.erro || 'Erro na resposta do servidor');
            }
            console.log(data);
            if (!toast.isActive('form-validation-toast')) {
                toast.success('Cadastro realizado com sucesso', { toastId: 'form-validation-toast', autoClose: 3000 });
            }
        } catch (error) {
            console.error('Erro ao enviar dados', error);
            if (!toast.isActive('form-validation-toast')) {
                toast.error('Erro ao enviar dados', { toastId: 'form-validation-toast', autoClose: 3000 });
            }
        }
    }

    return (
        <>
            <Header />
            <div className="tudo-tabela">
                <div className="titulo-pagina">
                    <h1>CADASTRO DE CELULAR</h1>
                </div>
                <div className="form-cadastro">
                    <h2>Preencha todos os campos abaixo:</h2>

                    <form onSubmit={handleSubmit} id="formTabela">
                        <div className='forma'>
                            <label htmlFor="imei">IMEI <span>*</span></label>
                            <input type="number" id="imei" />
                        </div>

                        <div className='forma'>
                            <label htmlFor="user">Usuário <span>*</span></label>
                            <input type="text" id="user" />
                        </div>

                        <div className="forma">
                            <label htmlFor="cad_funcionario">Cadastro Funcionario <span>*</span></label>
                            <input type="text" id="cad_funcionario" />
                        </div>

                        <div className="forma">
                            <label htmlFor="telefone">Telefone <span>*</span></label>
                            <input type="text" placeholder="(11) 12345-6789" id="telefone" />
                        </div>

                        <div className='forma'>
                            <label htmlFor="modelo">Modelo <span>*</span></label>
                            <input type="text" id="modelo" />
                        </div>

                        <div className="butao">
                            <button type="submit" id="enviar">Enviar</button>
                            <button type="reset" id="limpar">Limpar</button>
                        </div>
                    </form> {/* fim form */}
                    <div className="butao">
                    <button onClick={exportarExcel} id='excel'>Exportar p/ Excel</button>
                    </div>
                </div> {/* fim div form-cadastro */}
            </div> {/* fim div tudo-tabela */}
        </>
    )
}



export default Tabela