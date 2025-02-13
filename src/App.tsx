import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='tudo'>
        <header className='header'>
          <div className='cabecalho'>
            <div className='img-da-esquerda'>
              <img src={reactLogo} alt='react logo' />
            </div> {/* fim div img-da-esquerda */}
            <div className="escolhas">
              <nav className='header-menu'>
                <ul className='menu-list'>
                  <li className='menu-item'><a href="#">Home</a></li>
                  <li className='menu-item'><a href="#">Tabela</a></li>
                  <li className="menu-item"><a href="#">Consultar</a></li> {/* escrever um mensagem que para consultar deverá acessar o .10 */}
                  <li className='menu-item'><a href="#">Recomendações</a></li> {/* escrever sobre ligar o backup do whatsapp, backup do celular */}
                  <li className='menu-item'><a href="#">Sobre</a></li>
                </ul>
              </nav>
            </div> {/* fim div escolhas */}
            <div className='img-da-direita'>
              <img src={viteLogo} alt='vite logo' />
            </div> {/* fim div img-da-direita */}
          </div> {/* fim div cabecalho */}
        </header> {/* fim header */}
        <div className="pagina-principal">
          <main className='homepage'>
            <div className='titulo-da-pagina'>
              <h1>Anotando os dados dos novos celulares</h1>
            </div> {/* fim div conteudo */}
          </main>
        </div>
      </div > {/* fim div tudo */}
    </>
  )
}

export default App

// projeto para anotar novos celulares persistir os dados no banco de dados