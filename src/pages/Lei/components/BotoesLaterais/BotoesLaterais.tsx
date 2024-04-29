import { ReactNode, useEffect, useState } from 'react'
import styles from './BotoesLaterais.module.css'
import classNames from 'classnames'

interface BotoesLateraisProps {
    children: ReactNode
}

export default function BotoesLaterais({ children }: BotoesLateraisProps) {
    const [estahPosAnim, setEstahPosAnim] = useState(false)
    
    function aoRolarPagina() {
        const scrollVertical = window.scrollY

        if (scrollVertical > 25) {
            setEstahPosAnim(true)
        } else {
            setEstahPosAnim(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', aoRolarPagina, {passive: true})
        
        return () => {
            window.removeEventListener('scroll', aoRolarPagina)
        }
    }, [])

    return (
        <header className={classNames(
            styles.botoes,
            estahPosAnim && styles.animado
        )}>
           {children}
        </header>
    )
}
