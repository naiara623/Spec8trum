import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"



const Router = createBrowserRouter([
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
   
])

export default Router
