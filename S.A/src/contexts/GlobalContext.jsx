import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates, dono da Sicromoft'
const [diaDeHoo, setDiaDeHoo] = useState('sexta')

    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoo, setDiaDeHoo}}>
            {children}
        </GlobalContext.Provider>
    )
}
