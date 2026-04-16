import { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

interface LateralButtonWrapperProps {
	children: ReactNode;
}

export default function LateralButtonWrapper({ children }: LateralButtonWrapperProps) {
	const [isAnimPositioned, setIsAnimPositioned] = useState(false);

	function onScrollPage() {
		const scrollVertical = window.scrollY;

		if (scrollVertical > 25) {
			setIsAnimPositioned(true);
		} else {
			setIsAnimPositioned(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScrollPage, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScrollPage);
		};
	}, []);

	return (
		<header
			className={classNames(
				styles.wrapper,
				isAnimPositioned && styles.animated
			)}
		>
			{children}
		</header>
	);
}
