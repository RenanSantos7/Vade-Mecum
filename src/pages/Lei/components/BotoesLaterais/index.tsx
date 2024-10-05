import { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

interface BotoesLateraisProps {
	children: ReactNode;
}

export default function BotoesLaterais({ children }: BotoesLateraisProps) {
	const [estahPosAnim, setEstahPosAnim] = useState(false);

	function aoRolarPagina() {
		const scrollVertical = window.scrollY;

		if (scrollVertical > 25) {
			setEstahPosAnim(true);
		} else {
			setEstahPosAnim(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', aoRolarPagina, { passive: true });

		return () => {
			window.removeEventListener('scroll', aoRolarPagina);
		};
	}, []);

	return (
		<header
			className={classNames(styles.botoes, estahPosAnim && styles.animado)}
		>
			{children}
		</header>
	);
}
