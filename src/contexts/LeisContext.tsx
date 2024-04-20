import { ReactNode, createContext, useCallback, useEffect, useState } from "react"
import listaLeis from '../dados/leis.ts'

export const LeisContext = createContext(null);
LeisContext.displayName = "Leis"

export const LeisProvider = ({children}: {children: ReactNode}) => {
    const [leis, setLeis] = useState(listaLeis);
    const [favoritos, setFavoritos] = useState([])

    const [menuAberto, setMenuAberto] = useState(false)
    const [pesquisaAberta, setPesquisaAberta] = useState(false)

    /*
    const salvarDados = useCallback(() => {
        const favoritosJSON = JSON.stringify(favoritos);
        localStorage.setItem("favoritos", favoritosJSON);
    }, [favoritos])
    
    const carregarDados = useCallback(() => {
        const favoritosLocalSt = localStorage.getItem("favoritos");
        const favoritosParse = JSON.parse(favoritosLocalSt);
        if (favoritosLocalSt) setFavoritos(favoritosParse);
    }, [])
    */
   
   
   useEffect(() => {
       // carregarDados();
       const favoritosLocalSt = localStorage.getItem("favoritos");
       const favoritosParse = JSON.parse(favoritosLocalSt);
       if (favoritosLocalSt) setFavoritos(favoritosParse);
    }, [])

    return (
        <LeisContext.Provider value={{
            leis, setLeis,
            favoritos, setFavoritos,
            menuAberto, setMenuAberto,
            pesquisaAberta, setPesquisaAberta
        }}>
            {children}
        </LeisContext.Provider>
    )
}