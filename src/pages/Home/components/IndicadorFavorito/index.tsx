import styles from './styles.module.css';

interface EstrelaProps {
	ehFavorito: boolean;
}

export default function IndicadorFavorito(props: EstrelaProps) {
	if (props.ehFavorito)
		return (
			<svg
				className={styles.estrela}
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
			>
				<path d="M220.001-150.002v-597.689q0-30.308 21-51.308t51.308-21h375.382q30.308 0 51.308 21t21 51.308v597.689L480-261.54 220.001-150.002Z" />
			</svg>
		);

	return (
		<svg
			className={styles.estrela}
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 -960 960 960"
			width="24"
		>
			<path d="M220.001-150.002v-597.689q0-30.308 21-51.308t51.308-21h375.382q30.308 0 51.308 21t21 51.308v597.689L480-261.54 220.001-150.002ZM280-242l200-86 200 86v-505.691q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H292.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463V-242Zm0-518H680 280Z" />
		</svg>
	);
}
