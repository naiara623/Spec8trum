import React from 'react'

function Estrategia3() {
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
        <a href="./Tela 4 - Tela inicial.html">INICIO</a>
        <a href="">ESPECIALISTAS</a>
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

<h2>Rotas diferentes do previsto</h2>
<p>Lidar com rotas diferentes do previsto pode ser particularmente estressante para pessoas autistas, mas algumas estratégias podem ajudar a tornar essa situação mais gerenciável:</p>
<div class="estrategias">
<ul>
<li><button href="1.3 Preparação antecipada.html">Preparação antecipada</button></li><br/>
<li><button href="2.3 Mapas e aplicativos de navegação.html">Mapas e aplicativos de navegação</button></li><br/>
<li><button href="3.3 Histórias sociais.html">Histórias sociais</button></li><br/>
<li><button href="4.3 Rotas alternativas conhecidas.html">Rotas alternativas conhecidas</button></li><br/>
<li><button href="5.3 Técnicas de relaxamento.html">Técnicas de relaxamento</button></li><br/>
<li><button href="6.3 Itens de conforto.html">Itens de conforto</button></li><br/>
<li><button href="7.3 Flexibilidade gradual.html">Flexibilidade gradual</button></li><br/>
<li><button href="8.3 Reforço positivo.html">Reforço positivo</button></li><br/>
<li><button href="9.3 Suporte emocional.html">Suporte emocional</button></li><br/>
<li><button href="10.3 Treinamento de situações.html">Treinamento de situações</button></li><br/>   
</ul>
</div>
</div>
<div class="sidebar">
      
<h3>Estratégias para:</h3>
<ul>
<li> <button href="Estratégia 1 Sons Altos.html">Sons Altos</button></li>
<li> <button href="Estratégia 2 Mudança na Rotina.html">Mudança na Rotina</button></li>
<li> <button href="Estratégia 3 Rotas diferentes do previsto.html">Rotas diferentes do previsto</button></li>
<li> <button href="Estratégia 4 Muitas pessoas em um ambiente.html">Muitas pessoas em um ambiente</button></li>
</ul>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Estrategia3
