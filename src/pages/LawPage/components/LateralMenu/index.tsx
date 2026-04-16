import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames';

import { IRelatedLink } from '../../../../types/index.tsx';
import { useDataContext } from '../../../../contexts/dataContext.tsx';
import LinkLaw from '../../../../components/LinkLaw.tsx';
import styles from './styles.module.css';

interface LateralMenuProps {
	links: IRelatedLink[];
}

export default function LateralMenu(props: LateralMenuProps) {
	const { menuOpen, setMenuOpen } = useDataContext();

	return (
		<nav
			className={classNames(
				styles.menu,
				menuOpen && styles.aberto
			)}
		>
			<button
				type="button"
				title="Fechar"
				className={styles.closeBtn}
				onClick={() => {
					setMenuOpen(false);
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
