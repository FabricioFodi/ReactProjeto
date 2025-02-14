import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {

    return (
        <>
            <header className='header'>
                <div className='cabecalho'>
                    <div className='img-da-esquerda'>
                        <img src={reactLogo} alt='react logo' />
                    </div> {/* fim div img-da-esquerda */}
                    <div className="escolhas">
                        <nav className='header-menu'>
                            <ul className='menu-list'>
                                <li className='menu-item'><Link to="/">Home</Link></li>
                                <li className='menu-item'><Link to="/tabela">Tabela</Link></li>
                                <li className="menu-item"><Link to="/consulta">Consultar</Link></li> {/* escrever um mensagem que para consultar deverá acessar o .10 */}
                                <li className='menu-item'><Link to="/recomendacoes">Recomendações</Link></li> {/* escrever sobre ligar o backup do whatsapp, backup do celular */}
                                <li className='menu-item'><Link to="/sobre">Sobre</Link></li>
                            </ul>
                        </nav>
                    </div> {/* fim div escolhas */}
                    <div className='img-da-direita'>
                        <img src={viteLogo} alt='vite logo' />
                    </div> {/* fim div img-da-direita */}
                </div> {/* fim div cabecalho */}
            </header> {/* fim header */}
        </>
    )
}
export default Header