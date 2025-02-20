import Header from './header.js';

function About() {

    return (
        <>
            <div className="container">
                <Header />
                <header className="header-content">
                    <h1><span>Sobre o Projeto</span></h1>
                </header>
                <main className='main-content'>
                    <p>Este projeto foi criado com um único e exclusivo obejtivo de cadastrar os celulares novos dos colaboradores da Trapp</p>
                </main>
            </div>
            <footer className="footer-content">
                <p>Desenvolvido por Fabricio Fodi</p>
            </footer>
        </>
    )

}
export default About