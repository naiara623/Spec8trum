import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <center>
      <div className='container'>
<h1>BEM VINDO(A) DE VOLTA!</h1>
      <h2 className='text'>Faça o login da sua conta</h2>

      <input type="email" placeholder='E-mail' id='inptLoginEmail' className='container-input' />
   <br />   <input type="password" placeholder='Senha' id='inptLoginSenha' className='container-input' />
      <h4 className='text'>Ainda não tem conta? &nbsp; <Link to='<Cadastro/>'>Cadastrar-se</Link></h4>

      <button className='button'>Entrar</button>

      </div>
</center>
      
    </div>
  )
}

export default Login
