import styles from './MenuLateral.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LeisContext } from '../../../../contexts/LeisContext.tsx'
import { ILinkRelacionado } from '../../../../types/types.ts'
import { Close } from '@mui/icons-material'
import classNames from 'classnames'

interface MenuLateralProps {
	links: ILinkRelacionado[]
}

export default function MenuLateral({ links }: MenuLateralProps) {
	const { menuAberto, setMenuAberto } = useContext(LeisContext)

	return (
        <nav className={classNames(
            styles.menuLateral,
            menuAberto && styles.aberto
        )}>
			<button
                type='button'
                title='Fechar'
				className={styles.btFechar}
				onClick={() => {
					setMenuAberto(false)
				}}
			>
				<Close fontSize='inherit' />
			</button>

			<h2>
				<Link to='/'>Vade Mecum</Link>
			</h2>
			<ul className={styles.linksContainer}>
				{links.map(item => {
					return (
						<li key={item.id}>
							<Link to={item.id}>{item.nome}</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
