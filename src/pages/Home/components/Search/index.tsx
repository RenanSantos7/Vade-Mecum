import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ILaw } from '../../../../types/index.tsx';
import styles from './styles.module.css';
import LinkLaw from '../../../../components/LinkLaw.tsx';

interface SearchProps {
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
	laws: ILaw[];
}

export default function Search({
	searchQuery,
	setSearchQuery,
	laws: laws,
}: SearchProps) {
	const resultStyle =
		searchQuery.length > 2
			? styles.resultados
			: `${styles.no} ${styles.results}`;

	const [results, setResults] = useState([]);

	useEffect(() => {
		if (searchQuery.length > 2) {
			setResults(
				laws.filter(
					law =>
						law.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
						law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						// lei.ementa.toLowerCase().includes(searchQuery.toLowerCase()) ||
						law.id.includes(searchQuery.toLowerCase()),
				),
			);
		} else {
			setResults([]);
		}
	}, [searchQuery]);

	return (
		<>
			<label className={styles.label}>
				<span className={styles.name}>
					Pesquise Leis por nome ou abreviação
				</span>
				<input
					type="text"
					className={styles.input}
					value={searchQuery}
					onChange={evt => setSearchQuery(evt.target.value)}
				/>
			</label>

			<div className={resultStyle}>
				{results.map(law => (
					<LinkLaw
						key={law.id}
						destino={`/leis/${law.id}`}
						className={styles.item}
					>
						{law.alias}
					</LinkLaw>
				))}
			</div>
		</>
	);
}
