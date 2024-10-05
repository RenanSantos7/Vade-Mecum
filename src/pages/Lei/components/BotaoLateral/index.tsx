import { Menu, Search } from '@mui/icons-material'

import styles from './styles.module.css'

interface BotaoLateralProps {
	onClick: (arg: any) => void
	tipo: 'menu' | 'pesquisa'
}

export default function BotaoLateral({ onClick, tipo }: BotaoLateralProps) {

	return (
		<button
			type='button'
			title={tipo}
			className={styles.btLateral}
			onClick={onClick}
		>
			{tipo === 'pesquisa'
				? (<Search fontSize='inherit' />)
				: (<Menu fontSize='inherit' />)
			}
		</button>
	)
}
