import './App.css'
import Header from './header'

function Recommended() {

    return (
        <>
            <div className="tudo">
                <Header />
                <div className="pagina-principal">
                    <main className="homepage">
                        <div className="titulo-da-pagina">
                            <h1>Recomendações</h1>
                        </div> {/* fim div conteudo */}
                        <div className="conteudo">
                            <h2>Backup do WhatsApp</h2>
                            <p>Para fazer o backup do WhatsApp, vá em Configurações {'>'} Conversas {'>'} Backup de conversas.
                                Lá deve-se escolher a opção <strong>Diariamente</strong> assim quando houver a necessidade ou em casos de acidentes com o celular
                                não sera perdido quase nenhuma conversa, imagens e afins.</p>
                            <h2>Sincronização do celular</h2>
                            <p>Para sincronizar o celular com o google, vá para Configurações {'>'} Contas e Backup {'>'} Gerencias contas.
                                Escolha a conta e clique em  <strong>sincronizar a conta</strong>, depois clique nos três pontinhos e aperte <strong>Sincronizar agora</strong>.</p>
                                <h2>Sincronizar Contatos</h2>
                                <p></p>
                                <h2>Atualizar o sistema</h2>
                                <p></p>                   
                        </div> {/* fim div conteudo */}
                    </main> { /* fim main */}
                </div> {/* fim div pagina-principal */}
            </div> {/* fim div tudo */}
        </>
    )
}
export default Recommended