import Header from './header.js';
import '../backend/styles/pagina-consulta.css';

function Consulta() {
    return (
        <>
            <Header />
            <div className="tudo-consulta">
                <header className="header-container">
                    <h1>CONSULTAR</h1>
                </header>
                <main className='main-container'>
                    <p>Para visualizar os celulares cadastrados, consulte a pasta <strong> T.I </strong>no seguinte caminho: <strong> TI:\Telefones Celulares\Aparelhos com Funcionários 2022 2</strong></p>
                </main>
            </div>
        </>
    )
}
export default Consulta