import styles from './BotaoLateral.module.css'
import { Menu, Search } from '@mui/icons-material'

interface BotaoLateralProps {
	onClick: (arg: any) => void
	tipo: 'menu' | 'pesquisa'
}

export default function BotaoLateral({ onClick, tipo }: BotaoLateralProps) {
	
	let classe = styles.btMenu
	let icone = <Menu fontSize='inherit' />

	if (tipo === 'pesquisa') {
		classe = styles.btPesquisa
		icone = <Search fontSize='inherit' />
	}

	return (
		<button
			type='button'
			title={tipo}
			className={classe}
			onClick={onClick}
		>
			{icone}
		</button>
	)
}
