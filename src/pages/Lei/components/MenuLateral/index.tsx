import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames';

import { IRelatedLink } from '../../../../types/index.tsx';
import { useDataContext } from '../../../../contexts/dataContext.tsx';
import LinkLaw from '../../../../components/LinkLaw.tsx';
import styles from './styles.module.css';

interface MenuLateralProps {
	links: IRelatedLink[];
}

export default function MenuLateral(props: MenuLateralProps) {
	const { menuOpen: menuAberto, setMenuOpen: setMenuAberto } = useDataContext();

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
						<LinkLaw destino={item.id}>{item.name}</LinkLaw>
					</li>
				))}
			</ul>
		</nav>
	);
}
