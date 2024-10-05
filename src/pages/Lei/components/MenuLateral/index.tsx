import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames';

import { ILinkRelacionado } from '../../../../types/index.tsx';
import { useLeisContext } from '../../../../contexts/LeisContext.tsx';
import LinkLei from '../../../../components/LinkLei.tsx';
import styles from './styles.module.css';

interface MenuLateralProps {
	links: ILinkRelacionado[];
}

export default function MenuLateral(props: MenuLateralProps) {
	const { menuAberto, setMenuAberto } = useLeisContext();

	return (
		<nav
			className={classNames(styles.menuLateral, menuAberto && styles.aberto)}
		>
			<button
				type="button"
				title="Fechar"
				className={styles.btFechar}
				onClick={() => {
					setMenuAberto(false);
				}}
			>
				<CloseIcon fontSize="inherit" />
			</button>

			<h2>
				<Link to="/">Vade Mecum</Link>
			</h2>
			<ul className={styles.linksContainer}>
				{props.links.map(item => (
					<li key={item.id}>
						<LinkLei destino={item.id}>{item.nome}</LinkLei>
					</li>
				))}
			</ul>
		</nav>
	);
}
