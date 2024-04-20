import styles from './estrela.module.css'

export default function Estrela() {
    return (
        <svg
            className={styles.estrela}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
        >
            <path
                d="M220.001-150.002v-597.689q0-30.308 21-51.308t51.308-21h375.382q30.308 0 51.308 21t21 51.308v597.689L480-261.54 220.001-150.002Z"
            />
        </svg>
    )
}
