import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <center>
      <div className='container'>
<h1>BEM VINDO(A) DE VOLTA!</h1>
      <h2 className='text'>Faça o login da sua conta</h2>

      <input type="email" placeholder='E-mail' id='inptLoginEmail' className='conatiner-input' />
      <input type="password" placeholder='Senha' id='inptLoginSenha' className='conatiner-input' />
      <h4 className='text'>Ainda não tem conta? &nbsp; <link rel="stylesheet" href="./Cadastro.jsx" /></h4>

      <button>Entrar</button>

      </div>
</center>
      
    </div>
  )
}

export default Login
