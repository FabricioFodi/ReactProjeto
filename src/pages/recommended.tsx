import Header from './header.js'
import '../backend/styles/page-recomendado.css'

function Recommended() {

    return (
        <>
            <Header />
            <div className="tudo-recomendacoes">
                <div className="pagina-recomendacoes">
                    <main className="homepage-recomendacoes">
                        <div className="titulo-da-pagina-recomendacoes">
                            <h1>RECOMENDAÇÕES</h1>
                        </div> {/* fim div titulo-da-pagina */}
                        <div className="conteudo-recomendacoes">
                            <h2>Backup do WhatsApp</h2>
                            <p>Para fazer o backup do WhatsApp, vá em <code> Configurações {'>'} Conversas {'>'} Backup de conversas. </code>
                                Lá deve-se escolher a opção <strong>Diariamente</strong> assim quando houver a necessidade ou em casos de acidentes com o celular
                                não sera perdido quase nenhuma conversa, imagens e afins.</p>
                            <h2>Sincronização do celular</h2>
                            <p>Para sincronizar o celular com o google, vá para <code> Configurações {'>'} Contas e Backup {'>'} Gerencias contas. </code>
                                Escolha a conta e clique em  <strong>sincronizar a conta</strong>, depois clique nos três pontinhos e aperte <strong>Sincronizar agora</strong>.</p>
                            <h2>Sincronizar Contatos</h2>
                            <p>Antes de tirar o chip do celular deverá ser feito uma <strong>Sincronização dos contatos</strong>, para sincronizar os contatos, vá para <code> Contatos {'>'} Gerenciar 
                                Contatos {'>'} Sincronizar Contatos.</code> Caso seja um telefone mais antigo, deverá ser feito um <i>backup</i> dos contatos no chip.
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