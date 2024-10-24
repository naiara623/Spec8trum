import React from 'react'

import './NavBar_Principal.css'
import { Link } from 'react-router-dom'


function NavBar_Principal() {
  return (

    <nav >

     

          <div className='containe'>
                <div className='logo_div'>
                  <img className='Logo_Spec' src="logo spectrum.png" alt="Logo Spectrum" /> 
                </div>

                <div className='navbar-menu'>
                  <Link className='inicio'>INICIO</Link>      
                  <Link>ESPECIALISTAS</Link>
                </div>
                <div className='buscar'>
                  <img src="lupa.png" alt="lupa de pesquisa" className='lupa'/>
                  <input type="text" className='input-busca' />
                  
                </div>

                  <img src="menu.png" alt="" className='menu' />
          
          </div>
    </nav>

  )
}

export default NavBar_Principal
