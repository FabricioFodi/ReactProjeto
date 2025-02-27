import Header from './header.js';
import '../backend/styles/page-about.css'

function About() {

    return (
        <>
            <Header />
            <div className="tudo-sobre">
                <header className="header-sobre">
                    <h1><span>SOBRE O PROJETO</span></h1>
                </header>
                <main className='main-sobre'>
                    <p>Este projeto foi criado com um único e exclusivo obejtivo de cadastrar os celulares novos dos colaboradores da Trapp</p>
                </main>
            </div>
        </>
    )

}
export default About