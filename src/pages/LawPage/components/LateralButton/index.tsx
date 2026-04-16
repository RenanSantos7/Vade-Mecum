import { Menu, Search } from '@mui/icons-material'

import styles from './styles.module.css'

interface LateralButtonProps {
	onClick: (arg: any) => void
	type: 'menu' | 'pesquisa'
}

export default function LateralButton({ onClick, type }: LateralButtonProps) {

	return (
		<button
			type='button'
			title={type}
			className={styles.btLateral}
			onClick={onClick}
		>
			{type === 'pesquisa'
				? (<Search fontSize='inherit' />)
				: (<Menu fontSize='inherit' />)
			}
		</button>
	)
}
