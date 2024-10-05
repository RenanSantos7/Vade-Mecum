import { ILei } from '../../../../types/index.tsx';
import ItemLei from './ItemLei/index.tsx';
import styles from './styles.module.css';

interface CardProps {
	titulo: string;
	id: string;
	array: ILei[];
}

export default function Card({ titulo, id, array }: CardProps) {
	const arrayOrganizado = array.sort((a, b) => {
		return a.alias < b.alias ? -1 : a.alias > b.alias ? 1 : 0;
	});

	return (
		<article className={styles.card} id={id}>
			<h3 className={styles.titulo}>{titulo}</h3>
			<ul>
				{array.map(lei => (
					<ItemLei key={lei.id} lei={lei} />
				))}
			</ul>
		</article>
	);
}
