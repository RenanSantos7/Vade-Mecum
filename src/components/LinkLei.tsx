import { ElementType, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkLeiProps {
	destino: string;
	children: ReactNode;
	className?: any;
}

export default function LinkLei(props: LinkLeiProps) {
	return (
		<Link
			to={`leis/${props.destino}`}
			className={props.className ? props.className : ''}
		>
			{props.children}
		</Link>
	);
}
