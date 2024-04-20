import styles from './Card.module.css'
import LinkLei from './LinkLei/LinkLei.tsx'
import { ILei } from '../../../../types/types.ts'

interface CardProps {
    titulo: string
    id: string
    array: ILei[]
}

export default function Card({ titulo, id, array }:CardProps) {
    
    const arrayOrganizado = array.sort((a,b) => {
        return a.alias < b.alias ? -1 : a.alias > b.alias ? 1 : 0;
    })

    return (
        <article className={styles.card} id={id}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <ul>
                {array.map(lei => (
                    <LinkLei key={lei.id} lei={lei}/>
                ))}
            </ul>
        </article>
    )
}
