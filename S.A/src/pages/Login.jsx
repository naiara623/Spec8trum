import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (



    <div className='body'>
        
        <div className='Container-1'>


           <div className='container'>
      <h2 className='kk'>Login</h2>
      
  
      <div className="inputContainer">
        <input required id="inputField" placeholder="UserName or Email" type="text" />
        <label className="usernameLabel" htmlFor="inputField">
         UserName or Email
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

   <br /><br />
     <button className='button'>Entrar</button>
<br /><br />
      
 <h4 className='tim'>Ainda não tem conta? &nbsp; <Link to='<Cadastro/>'>Cadastrar-se</Link></h4>
      </div>
        </div>

     

      
    </div>
  )
}

export default Login
