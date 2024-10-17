import React from 'react'
import './Cadastro.css'

function Cadastro() {
  return (
    <div>
      <div className='Container'>
        <center>
            <h1 className='escrita'>COMECE SEU CADASTRO</h1>
           
           <br /><br />

           <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" /><br />
      <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" /><br />
      <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" /> <br />
      <br />

      <div className='radio-wrapper'>
        <label className='radio-button'>
            <input type="radio" id='radioum' name='radio-group' />
            <span className='radio-checkmark' ></span>
            <span className='radio-label'>Sou TEA</span>
        </label>
      </div>

        <div className='radio-wrapper'>
            <label className='radio-button'>
                <input type="radio" id='radioDois' name='radio-group' />
                <span className='radio-checkmark' ></span>
                <span className='radio-label'>Sou Responsavel</span>
            </label>

        </div>

        <div className='radio-wrapper'>
            <label className='radio-button'>
                <input type="radio" id='radioTres' name='radio-group' />
                <span className='radio-checkmark' ></span>
                <span className='radio-label'>Sou Cuidador</span>
            </label>

        </div>
        
        <div className='radio-wrapper'>
            <label className='radio-button'>
                <input type="radio" id='radioQuatro' name='radio-group' />
                <span className='radio-checkmark' ></span>
                <span className='radio-label'>Tenho interesse no Assunto</span>
            </label>

        </div>

        <div className='radio-wrapper'>
            <label className='radio-button'>
                <input type="radio" id='radioCinco' name='radio-group' />
                <span className='radio-checkmark' ></span>
                <span className='radio-label'>Sou profissional Colaborador</span>
            </label>

        </div>
    
            

            <input type="checkbox" id="cbx2" style={{ display: "none" }} />
        <label htmlFor="cbx2" className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
            <polyline points="1 9 7 14 15 4" />
          </svg> &nbsp;Termos de uso
        </label>

        <br /><br />

            <button className='oi'>Cadastra-se</button>
        </center>
</div>
    </div>
  )
}

export default Cadastro
