import React from 'react'

function TécnicasDeRelaxamento5() {
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

        <button onclick="usuário()"  class="menu-usuario"/>
            <img src="utilizador.png" alt="usuario"/>
        
    </div>

</div> 

<div class="container">
<div class="content">
<div class="main-content">

<h2>Técnicas de Relaxamento </h2>
<p>Praticar técnicas de respiração, meditação ou outras formas de relaxamento pode ser extremamente benéfico para reduzir a ansiedade causada por sons altos. Para pessoas com TEA, técnicas como a respiração diafragmática, onde se respira profundamente pelo abdômen, podem ajudar a reduzir os níveis de cortisol, o hormônio do estresse, promovendo uma sensação de calma. A meditação mindfulness, que envolve focar a atenção no momento presente, também pode ser útil para acalmar a mente.</p>
</div>
<div class="sidebar">
      
<h3>Estratégias para:</h3>
<ul>
<li> <a href="Estratégia 1 Sons Altos.html">Sons Altos</a></li>
<li> <a href="Estratégia 2 Mudança na Rotina.html">Mudança na Rotina</a></li>
<li> <a href="Estratégia 3 Rotas diferentes do previsto.html">Rotas diferentes do previsto</a></li>
<li> <a href="Estratégia 4 Muitas pessoas em um ambiente.html">Muitas pessoas em um ambiente</a></li>
</ul>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default TécnicasDeRelaxamento5
