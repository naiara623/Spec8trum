

import { useState } from 'react'
import Boas_Vindas from "./pages/Boas_Vindas"
import Cadastro from "./pages/Cadastro"
import Estrategia1 from "./estrategias/Estrategia1"

import './App.css'
import Boas_Vindas from './pages/Boas_Vindas'
import NavBar_Principal from './components/NavBar_Principal'
import Tela_Principal from './pages/Tela_Principal'

function App() {

  return (
    <>
    
<Boas_Vindas/>
<Cadastro />
<Estrategia1 />

    </>

  )
}

export default App
