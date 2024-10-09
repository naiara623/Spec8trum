import React from 'react'
import './Cadastro.css'

function Cadastro() {
  return (
    <div>
      <div className='container'>
        <center>
            <h1 className='escrita'>COMECE SEU CADASTRO</h1>
           
           <br /><br />

           <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" />
      <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" />
      <input id="nomeUsuario" type="text" name="text" class="search-bar" placeholder="Nome Completo" />

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
    
            <br /><br />

            <button className='button'>Cadastra-se</button>
        </center>
</div>
    </div>
  )
}

export default Cadastro
