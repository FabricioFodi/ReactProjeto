import '../App.css'
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
                        </div> {/* fim div titulo-da-pagina */}
                        <div className="conteudo">
                            <h2>Backup do WhatsApp</h2>
                            <p>Para fazer o backup do WhatsApp, vá em Configurações {'>'} Conversas {'>'} Backup de conversas.
                                Lá deve-se escolher a opção <strong>Diariamente</strong> assim quando houver a necessidade ou em casos de acidentes com o celular
                                não sera perdido quase nenhuma conversa, imagens e afins.</p>
                            <h2>Sincronização do celular</h2>
                            <p>Para sincronizar o celular com o google, vá para Configurações {'>'} Contas e Backup {'>'} Gerencias contas.
                                Escolha a conta e clique em  <strong>sincronizar a conta</strong>, depois clique nos três pontinhos e aperte <strong>Sincronizar agora</strong>.</p>
                                <h2>Sincronizar Contatos</h2>
                                <p>Antes de tirar o chip do celular deverá ser feito uma <strong>Sincronização dos contatos</strong>, para sincronizar os contatos, vá para Contatos {'>'} 
                                    Gerenciar Contatos {'>'} Sincronizar Contatos. Caso seja um telefone mais antigo, deverá ser feito um <i>backup</i> dos contatos no chip.
                                </p>
                                <h2>Atualizações</h2>
                                <p>Depois de configurar um celular, sempre verifique se há atualizações de <strong>Sistema</strong> ou dos <strong>aplicativos do sistema</strong></p>                   
                        </div> {/* fim div conteudo */}
                    </main> { /* fim main */}
                </div> {/* fim div pagina-principal */}
            </div> {/* fim div tudo */}
        </>
    )
}
export default Recommended