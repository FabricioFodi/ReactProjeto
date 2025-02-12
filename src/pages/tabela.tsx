import { useState } from 'react';

export function tabela() {

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
                <label htmlFor="">IMEI</label>
                <input type="number" id="imei"/>
                <label htmlFor="">Usuário</label>
                <input type="text" id="user"/>
                <label htmlFor="">Cadastro Funcionario</label>
                <input type="number" id="cad_funcionario"/>
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder="(11) 12345-6789" id="telefone"/>
                <label htmlFor="">Modelo</label>
                <input type="text" id="modelo"/>
                <button id="enviar">Enviar</button>
            </form>
    )

}