import styles from './Pesquisa.module.css'
import { ILei } from '../../../../types/types.ts'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface PesquisaProps {
    termoPesquisa: string
    setTermoPesquisa: (arg: string) => void
    leis: ILei[]
}

export default function Pesquisa({termoPesquisa, setTermoPesquisa, leis}:PesquisaProps) {
    
    const estResultados = termoPesquisa.length > 2
        ? `${styles.resultados}`
        : `${styles.sem} ${styles.resultados}`

    const [resultados, setResultados] = useState([])

    useEffect(() => {
        if (termoPesquisa.length > 2) {
            setResultados(leis.filter(lei => (
                lei.alias.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                lei.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                // lei.ementa.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                lei.id.includes(termoPesquisa.toLowerCase())
            )))
        } else {
            setResultados([])
        }
    }, [termoPesquisa])

    return (
        <>
            <label className={styles.label}>
                <span className={styles.labelNome}>Pesquise Leis por nome ou abreviação</span>
                <input
                    type="text"
                    className={styles.input}
                    value={termoPesquisa}
                    onChange={evt => setTermoPesquisa(evt.target.value)}
                />
            </label>

            <div className={estResultados}>
                {resultados.map(lei => (
                    <Link
                        key={lei.id}
                        to={`/leis/${lei.id}`}
                        className={styles.resultados__item}
                    >{lei.alias}</Link>
                ))}
            </div>
        </>
    )
}
