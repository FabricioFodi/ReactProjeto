import Header from './header.js';

function Consulta() {
    return (
        <div className="container">
            <Header />
            <header className="header-content">
                <h1>Consulta</h1>
            </header>
            <main className='main-content'>
                <p>Para visualizar os celulares cadastrados, consulte a pasta de TI no seguinte caminho: TI:\Telefones Celulares\Aparelhos com Funcionários 2022 2</p>
            </main>
            <footer className="footer-content">
                <p>Desenvolvido por Fabricio Fodi</p>
            </footer>
        </div>
    )
}
export default Consulta