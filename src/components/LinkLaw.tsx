import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useDataContext } from '../contexts/dataContext.tsx';

interface LinkLawProps {
	destino: string;
	children: ReactNode;
	className?: any;
}

export default function LinkLaw(props: LinkLawProps) {
	const { menuOpen: menuAberto, setMenuOpen: setMenuAberto } = useDataContext();

	return (
		<Link
			to={`/leis/${props.destino}`}
			className={props.className ? props.className : ''}
			onClick={() => {
				if (menuAberto) setMenuAberto(false);
			}}
		>
			{props.children}
		</Link>
	);
}
