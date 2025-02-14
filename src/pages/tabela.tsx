import Header from './header';

function Tabela() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const imei = (form.querySelector('#imei') as HTMLInputElement).value;
        const user = (form.querySelector('#user') as HTMLInputElement).value;
        const cad_funcionario = (form.querySelector('#cad_funcionario') as HTMLInputElement).value;
        const telefone = (form.querySelector('#telefone') as HTMLInputElement).value;
        const modelo = (form.querySelector('#modelo') as HTMLInputElement).value;

        console.log({ imei, user, cad_funcionario, telefone, modelo });

        // fetch('') // Finalizar o backend primeiro para fazer a requisição
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
                    <p>Os campos com * são obrigatórios</p>

                    <form onSubmit={handleSubmit} id="formTabela">
                        <div className='forma'>
                            <label htmlFor="imei">IMEI*</label>
                            <input type="number" id="imei" />
                        </div>

                        <div className='forma'>
                            <label htmlFor="user">Usuário*</label>
                            <input type="text" id="user" />
                        </div>

                        <div className="forma">
                            <label htmlFor="cad_funcionario">Cadastro Funcionario*</label>
                            <input type="number" id="cad_funcionario" />
                        </div>

                        <div className="forma">
                            <label htmlFor="telefone">Telefone*</label>
                            <input type="text" placeholder="(11) 12345-6789" id="telefone" />
                        </div>
                        <div className='forma'>
                            <label htmlFor="modelo">Modelo*</label>
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