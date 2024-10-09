import React from 'react'

function EspaçosTranquilos2() {
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

<h2>Espaços Tranquilos</h2>
<p>Identificar e utilizar áreas silenciosas pode proporcionar um alívio significativo para pessoas com TEA. Ambientes como bibliotecas, parques tranquilos ou salas de meditação são ideais para momentos de sobrecarga sensorial. Em casa, criar um espaço tranquilo com isolamento acústico pode ser extremamente benéfico. Isso pode incluir o uso de cortinas pesadas, tapetes e móveis estofados para absorver o som, além de plantas que ajudam a criar uma atmosfera calma.</p>
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

export default EspaçosTranquilos2
