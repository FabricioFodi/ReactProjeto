import '../App.css'
import Header from './header.js'
import '../backend/styles/page1.css'


function Home() {

  return (
    <>
      <Header />
      <div className='tudo'>
        <main className='homepage'>
          <div className='titulo-da-pagina'>
            <h1>ANOTANDO<br/> OS DADOS DOS NOVOS<br/> <span>CELULARES</span></h1>
          </div> {/* fim div conteudo */}
        </main>
      </div > {/* fim div tudo */}
    </>
  )
}

export default Home