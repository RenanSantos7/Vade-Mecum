import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useLeisContext } from '../contexts/LeisContext.tsx';

interface LinkLeiProps {
	destino: string;
	children: ReactNode;
	className?: any;
}

export default function LinkLei(props: LinkLeiProps) {
	const { menuAberto, setMenuAberto } = useLeisContext();

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
