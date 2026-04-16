import { ILaw } from '../../../../types/index.tsx';
import ItemLaw from './ItemLei/index.tsx';
import styles from './styles.module.css';

interface CardProps {
	id: string;
	title: string;
	array: ILaw[];
}

export default function Card({ title, id, array }: CardProps) {
	const sortedArray = array.sort((a, b) => {
		return a.alias < b.alias ? -1 : a.alias > b.alias ? 1 : 0;
	});

	return (
		<article className={styles.card} id={id}>
			<h3 className={styles.title}>{title}</h3>
			<ul>
				{sortedArray.map(lei => (
					<ItemLaw key={lei.id} law={lei} />
				))}
			</ul>
		</article>
	);
}

