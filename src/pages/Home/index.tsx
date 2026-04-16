import { useState } from 'react';

import { ILaw } from '../../types/index.tsx';
import { useDataContext } from '../../contexts/dataContext.tsx';
import Card from './components/Card/index.tsx';
import Favorites from './components/Favorites/index.tsx';
import Search from './components/Search/index.tsx';
import Footer from './components/Footer/index.tsx';
import styles from './styles.module.css';

export default function Home() {
	const { laws } = useDataContext();
	const [searchQuery, setSearchQuery] = useState('');

	const branches = [
		{ id: 'constitucional', titulo: 'Direito Constitucional' },
		{ id: 'administrativo', titulo: 'Direito Administrativo' },
		{ id: 'previdenciario', titulo: 'Direito Previdenciário' },
		{ id: 'elawtoral', titulo: 'Direito Elawtoral' },
		{ id: 'ambiental', titulo: 'Direito Ambiental' },
		{ id: 'civil', titulo: 'Direito Civil' },
		{ id: 'penal', titulo: 'Direito Penal' },
		{ id: 'etica', titulo: 'Ética OAB' },
		{ id: 'empresarial', titulo: 'Direito Empresarial' },
		{ id: 'consumidor', titulo: 'Direito do Consumidor' },
		{ id: 'juizados', titulo: 'Juizados Especiais' },
		{ id: 'trabalho', titulo: 'Direito do Trabalho' },
		{ id: 'tributario', titulo: 'Direito Tributário' },
		{ id: 'digital', titulo: 'Direito Digital' },
		{ id: 'militar', titulo: 'Direito Militar' },
	];

	return (
		<div className={styles.home}>
			<header className={styles.header}>
				<h1>Vade Mecum</h1>
			</header>

			<main>
				<Favorites />

				<Search
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					laws={laws}
				/>

				<section className={styles.body}>
					{branches.map(branch => {
						const thisBranchLaws = laws.filter(
							(law: ILaw) => law.area === branch.id,
						);
						if (!!thisBranchLaws.length) {
							return (
								<Card
									key={branch.id}
									id={branch.id}
									title={branch.titulo}
									array={thisBranchLaws}
								/>
							);
						}
					})}

					<Card
						key={'piaui'}
						id="piaui"
						array={laws.filter((law: ILaw) => law.jurisdiction === 'estadual')}
						title="Legistalação Estadual"
					/>

					<Card
						key={'outros'}
						id="outros"
						title="Outros"
						array={laws.filter(
							(law: ILaw) =>
								law.jurisdiction !== 'estadual' &&
								law.area !== 'constitucional' &&
								law.area !== 'civil' &&
								law.area !== 'penal' &&
								law.area !== 'empresarial' &&
								law.area !== 'digital' &&
								law.area !== 'administrativo' &&
								law.area !== 'trabalho' &&
								law.area !== 'previdenciario' &&
								law.area !== 'tributario' &&
								law.area !== 'etica' &&
								law.area !== 'eleitoral' &&
								law.area !== 'consumidor' &&
								law.area !== 'juizados' &&
								law.area !== 'ambiental',
						)}
					/>
				</section>
			</main>

			<Footer />
		</div>
	);
}
