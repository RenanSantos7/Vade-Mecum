import styles from './Pesquisa.module.css'
import { useContext, useState } from 'react'
import { LeisContext } from '../../../../contexts/LeisContext.tsx'
import { Close, Search } from '@mui/icons-material'
import classNames from 'classnames'

export default function Pesquisa() {
    const { pesquisaAberta, setPesquisaAberta } = useContext(LeisContext)
    const [inputFoco, setInputFoco] = useState(false)
    const [artQuery, setArtQuery] = useState('')
    const [resultados, setResultados] = useState([])

    function encontraResultado(evt:React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault()
    }

    return (
        <div className={classNames(
            styles.pesquisaArtigo,
            pesquisaAberta && styles.aberto
        )}>
            <button
                type='button'
                className={styles.btFechar}
                onClick={() => { setPesquisaAberta(false) }}
                title='Fechar'
            >
                <Close fontSize='inherit' />
            </button>

            <h2>Pesquisar artigo</h2>

            <label>
                <span className={classNames(
                    styles.labelPesquisa,
                    !inputFoco && styles.placeholder
                )}>Digite o número do artigo</span>
                <input
                    type="text"
                    className={styles.inputArtigo}
                    min="1"
                    value={artQuery}
                    onChange={evt => setArtQuery(evt.target.value)}
                    onFocus={() => setInputFoco(true)}
                    onBlur={() => setInputFoco(false)}
                />
            </label>

            <button
                type="button"
                className={styles.btPesquisar}
                onClick={evt => encontraResultado(evt)}
            >Pesquisar</button>

            <div className={styles.resultados}>

            </div>
        </div>
    )
}
