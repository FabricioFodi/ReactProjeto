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
          </div>
          <div className="escolhas">
            <p><a href="#">Home</a></p>
            <p><a href="#">Tabela</a></p>
            <p><a href="#">Sobre</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// projeto para anotar novos celulares persistir os dados no banco de dados