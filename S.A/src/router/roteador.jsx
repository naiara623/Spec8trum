import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Boas_Vindas from "../pages/Boas_Vindas";
import Tela_Principal from "../pages/Tela_Principal";
import Perfil from "../pages/Perfil";




const roteador = createBrowserRouter([

    {path: "/", element: <Boas_Vindas />},
    // {path: "/", element: <Cadastro />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/telaprincipal", element: <Tela_Principal/>},
    {path: "/perfil", element: <Perfil />}
   
])

export default roteador
