import '../App.css'
import Header from './header.js'
import '../backend/styles/page-home.css'


function Home() {

  return (
    <>
      <Header />
      <div className='tudo'>
        <main className='homepage'>
          <div className='titulo-da-pagina'>
            <h1>
              <span className="linha1">ANOTANDO</span>
              <span className="linha2"><i>OS DADOS DOS NOVOS</i></span>
              <span className="linha3">CELULARES</span>
            </h1>
          </div> {/* fim div conteudo */}
        </main>
      </div > {/* fim div tudo */}
    </>
  )
}

export default Home