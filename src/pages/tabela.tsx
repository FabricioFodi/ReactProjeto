
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
    }

    return (
            <form onSubmit={handleSubmit} id="formTabela">
                <label htmlFor="imei">IMEI</label>
                <input type="number" id="imei"/>

                <label htmlFor="user">Usuário</label>
                <input type="text" id="user"/>

                <label htmlFor="cad_funcionario">Cadastro Funcionario</label>
                <input type="number" id="cad_funcionario"/>

                <label htmlFor="telefone">Telefone</label>
                <input type="text" placeholder="(11) 12345-6789" id="telefone"/>
                
                <label htmlFor="modelo">Modelo</label>
                <input type="text" id="modelo"/>

                <button type="submit" id="enviar">Enviar</button>
            </form>
    )

}
export default Tabela