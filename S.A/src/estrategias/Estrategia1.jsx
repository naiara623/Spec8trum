import React from 'react'

function Estrategia1() {
  return (
    <div>

  
       <div class="Navbar-Container">

<div class="navbar-1">
    <img src="logo spectrum.png" alt="spectrum logo" class="logo"/>

    <button onclick="estrategias()" class="menu-janela">
        <img src="pontos-do-menu.png" alt="estrategias para usuários"/>
    </button>
</div>

<div class="navbar-2">
    <div class="navbar-menu">
        <button >INICIO</button>
        <button >ESPECIALISTAS</button>
    </div>

    <div class="navbar-pesquisa"> 
        <img src="lupa.png" alt="barra de pesquisa" class="lupa-pesquisa"/>
        <input type="text" class="pesquisar" id="inputPesquisar" placeholder="  Pesquisar" readonly/>

        <button onclick="usuário()"  class="menu-usuario">
            <img src="utilizador.png" alt="usuario"/>
        </button>
    </div>

</div> 

<div class="container">
<div class="content">
<div class="main-content">

<h2>Sons Altos</h2>
<p>Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a minimizar o desconforto:</p>
<div class="estrategias">
<ul>
  
<li><button >Protetores auriculares</button></li><br />
<li><button >Espaços tranquilos</button></li><br/>
<li><button >Planejamento</button></li><br/>
<li><button >Comunicação</button></li><br/>
<li><button >Técnicas de relaxamento</button></li><br/>
<li><button >Música ou ruído branco</button></li><br/>
<li><button >Treinamento de dessensibilização</button></li><br/>
</ul>

</div>
<p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>

</div>
<div class="sidebar">
      
<h3>Estratégias para:</h3>
<ul>
<li> <button >Sons Altos</button></li>
<li> <button >Mudança na Rotina</button></li>
<li> <button >Rotas diferentes do previsto</button></li>
<li> <button >Muitas pessoas em um ambiente</button></li>
</ul>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Estrategia1
