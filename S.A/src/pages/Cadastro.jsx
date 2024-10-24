import React from 'react'
import './Cadastro.css'

function Cadastro() {
  return (
    <div className='body-cadastro'>

      <div className='Conteiner-1'></div>
      <div className='Container'>
        <center>
            <h1 className='escrita'>CADASTRO</h1>
           
           <br /><br />

           <div className="inputContainer">
        <input required id="inputField" placeholder="UserName" type="text" />
        <label className="usernameLabel" htmlFor="inputField">
         UserName
        </label>
        <svg viewBox="0 0 448 512" className="userIcon">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
      &nbsp;&nbsp;
      <div className="inputContainer">
        <input required id="inputField" placeholder="Email" type="text" />
        <label className="usernameLabel" htmlFor="inputField">
         Email
        </label>
        <svg viewBox="0 0 448 512" className="userIcon">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
      &nbsp;&nbsp;
      
      <div className="inputContainer">
        <input required id="inputField" placeholder="Senha" type="passaword" />
        <label className="usernameLabel" htmlFor="inputField">
         Senha
        </label>
        <svg viewBox="0 0 448 512" className="userIcon">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
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
