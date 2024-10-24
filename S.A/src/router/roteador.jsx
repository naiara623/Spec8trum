import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Boas_Vindas from "../pages/Boas_Vindas";
import Tela_Principal from "../pages/Tela_Principal";
<<<<<<< HEAD
import Tela_Informacoes from "../pages/Tela_Informacoes";
import Tela_Profissional from "../pages/Tela_Profissional";
=======
import Perfil from "../pages/Perfil";

>>>>>>> dd0d82e279d9be25e28d5006fef76132ff229a75



const roteador = createBrowserRouter([

    {path: "/", element: <Boas_Vindas />},
    // {path: "/", element: <Cadastro />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/telaprincipal", element: <Tela_Principal/>},
<<<<<<< HEAD
    {path: "/telainformações", element: <Tela_Informacoes/>},
    {path: "/pefilprofissional", element: <Tela_Profissional/>},
=======
    {path: "/perfil", element: <Perfil />}
   
>>>>>>> dd0d82e279d9be25e28d5006fef76132ff229a75
])

export default roteador
