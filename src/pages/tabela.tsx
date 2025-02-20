import Header from './header.js';

function Tabela() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
            alert('Cadastro realizado com sucesso');

        } catch (error) {
            console.error('Erro ao enviar dados', error);
            alert('Erro ao enviar dados');
        }
    }

    return (
        <>
            <div className="tudo">
                <Header />
                <div className="titulo-pagina">
                    <h1>Cadastro de Celular</h1>
                </div>
                <div className="form-cadastro">
                    <h2>Preencha todos os campos abaixo:</h2>
                    <span><p>Os campos com * são obrigatórios</p></span>

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
                            <input type="number" id="cad_funcionario" />
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
                        </div>
                    </form> {/* fim form */}
                </div> {/* fim div form-cadastro */}
            </div> {/* fim div tudo */}
        </>
    )
}
export default Tabela