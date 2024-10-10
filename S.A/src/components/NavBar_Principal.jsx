import React from 'react'
import './NavBar_Principal.css'
function NavBar_Principal() {

  return (
    <nav className='nav-conteine'>

      <img src="logo spectrum.png" alt="" />
      
      <button>Inicio</button> <button>Informações</button>

       <input type="text"  className='Pesquisa' placeholder='Pesquisa'/> 
       <img src="lupa.png" alt="Lupa_pesquisa" />

       <button> <img src="do-utilizador.png" alt="" /></button>

       <div className='Modal_conteiner'> 
        <span className='fechar'>&times;</span>

        <label className='Label_modal'>Configurações</label><br /><br />
         
         <link rel="" href="" />

       </div>

    </nav>
  )
}

export default NavBar_Principal
