import { Link } from 'react-router-dom'
import styles from './LinkLei.module.css'
import { useContext } from 'react'
import { LeisContext } from '../../../../../contexts/LeisContext.tsx'
import StarFill from '../../Estrela/StarFill.tsx'
import StartOutlined from '../../Estrela/StarOutline.tsx'
import { ILei } from '../../../../../types/types.ts'

interface LinkLeiProps {
    lei:ILei
}

export default function LinkLei({ lei }:LinkLeiProps) {
    
    const { favoritos, setFavoritos } = useContext(LeisContext)

    function aoClicarFavorito() {
        if (favoritos.includes(lei)) {
            const favoritosSem = favoritos.filter((item:ILei) => (
                item.id !== lei.id
            ))

            setFavoritos(favoritosSem)
            console.log('favorito removido')
        } else {
            setFavoritos((prev:any) => [...prev, lei])
            console.log('favorito adicionado')
        }
        
        const favoritosJSON = JSON.stringify(favoritos);
        localStorage.setItem("favoritos", favoritosJSON);
    }

    return (
        <li className={styles.item}>
            <button
                type='button'
                className={styles.btFavorito}
                onClick={aoClicarFavorito}
            >
                {favoritos.includes(lei)
                    ? <StarFill />
                    : <StartOutlined />
                }
            </button>
            <Link to={`/leis/${lei.id}`}>{lei.titulo}</Link>
        </li>
    )
}
 