import './App.css'
import Header from './header'


function Home() {

  return (
    <>
      <div className='tudo'>
        <Header />
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

export default Home