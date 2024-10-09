import './Navbar.css'

function Navbar() {
  return (
    
       <nav className="navbar">
      <div className="navbar-1">
        <img src="logo spectrum.png" alt="spectrum logo" className="logo" />

        <button><img src="pontos-do-menu.png" alt="estrategias para usuários" /></button>
      </div>

      <div className="navbar-2">
        <div className="navbar-menu">
          <p>INICIO</p>
          <p>ESPECIALISTAS</p>
        </div>

        <div className="navbar-pesquisa">
          <input type="text" className="pesquisa" id="inputPesquisar" placeholder="Pesquisar" readOnly/>
          <img src="lupa.png" alt="Barra de pesquisa" className="lupa-pesquisa" />

          <button id="botao-modal" className="menu-usuario">
            <img src="do-utilizador.png" alt="usuário" />
          </button>

          <div className="modal-content">
            <span className="fechar">&times;</span>

            <label className="labelmodal">Configurações</label>
            <br /><br />

            {/*              <a class="textoModal" href="./ver perfil de usuário.html">Ver perfil</a>
             <br><br>
//             <a class="textoModal" href="">Agendamentos</a>
//             <br><br><br> */}

             <div className="divBotao">
              <button className="deletarConta">Deletar Conta</button>

              <button className="deletarConta">Sair da conta</button>
             </div>

             
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
