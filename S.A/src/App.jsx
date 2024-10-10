import { useState } from 'react'
import './App.css'
import Boas_Vindas from './pages/Boas_Vindas'
import NavBar_Principal from './components/NavBar_Principal'
import Tela_Principal from './pages/Tela_Principal'

function App() {

  return (
    <>

  <NavBar_Principal/>
  <Tela_Principal/>
    <Boas_Vindas/>

    </>
  )
}

export default App
