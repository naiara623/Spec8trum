import React from 'react'
import './NavBar_Principal.css'

function NavBar_Principal() {
  return (
    <div className='Navbar-Container'>
    <div className="navbar-1">
        <img src="logo spectrum.png" alt="spectrum logo" className="logo" />

        <button className="menu-janela">
            <img src="pontos-do-menu.png" alt="estrategias para usuários" />
        </button>
    </div>

    <div className="navbar-2">
        <div className="navbar-menu">
            <a className="inicio" href="./Tela 4 - Tela inicial.html">INICIO</a>
            <a href="">ESPECIALISTAS</a>
        </div>

        <div className="navbar-pesquisa">
            <input type="text" className="pesquisar" id="inputPesquisar" placeholder="  Pesquisar" readOnly />
            <img src="lupa.png" alt="barra de pesquisa" className="lupa-pesquisa" />

            <button id="botao-modal" className="menu-usuario">
                <img src="do-utilizador.png" alt="usuario" />
            </button>

            
                <div id="modal" className="modal">
                    <div className="modal-content">
                        <span className="fechar">&times;</span>
                        <label className="labelModal">Configurações</label>
                        <br /><br />
                        <a className="textoModal" href="./ver perfil de usuário.html">Ver perfil</a>
                        <br /><br />
                        <a className="textoModal" href="">Agendamentos</a>
                        <br /><br /><br />

                        <div className="divBotao">
                            <button className="deletarConta">Excluir conta</button>
                            <button className="deletarConta">Sair da conta</button>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</div>

  )
}

export default NavBar_Principal