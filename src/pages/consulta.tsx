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
                    <p>Para visualizar os celulares cadastrados, consulte a pasta <strong> Documentos </strong>no seguinte caminho: <strong> Documents/Dados Celulares.XLSX</strong></p>
                </main>
            </div>
        </>
    )
}
export default Consulta