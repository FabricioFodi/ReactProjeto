import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='tudo'>
        <div className='cabecalho'>
          <div className='img-da-esquerda'>
            <img src={reactLogo} alt='react logo' />
          </div> {/* fim div img-da-esquerda */}
          <div className="escolhas">
            <nav className='header-menu'>
              <ul className='menu-list'>
                <li className='menu-item'><a href="#">Home</a></li>
                <li className='menu-item'><a href="#">Tabela</a></li>
                <li className='menu-item'><a href="#">Sobre</a></li>
              </ul>
            </nav>
          </div> {/* fim div escolhas */}
        </div> {/* fim div cabecalho */}
        <div className='img-da-direita'>
          <img src={viteLogo} alt='vite logo' />
        </div> {/* fim div img-da-direita */}
      </div> {/* fim div tudo */}
    </>
  )
}

export default App

// projeto para anotar novos celulares persistir os dados no banco de dados