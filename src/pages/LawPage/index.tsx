import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ILaw } from '../../types/index.tsx';
import { useDataContext } from '../../contexts/dataContext.tsx';
import LateralButton from './components/LateralButton/index.tsx';
import LateralButtonWrapper from './components/LateralButtonWrapper/index.tsx';
import LateralMenu from './components/LateralMenu/index.tsx';
import Search from './components/Search/index.tsx';
import styles from './styles.module.css';

export default function LawPage() {
	const params = useParams();

	const { laws, setMenuOpen, setSearchMenuOpen } = useDataContext();
	const selectedLaw = laws.find((law: ILaw) => law.id == params.leiID);

	useEffect(() => {
		document.title = `Vade Mecum | ${selectedLaw.alias}`;
	}, []);

	return (
		<>
			<LateralButtonWrapper>
				<LateralButton type="menu" onClick={() => setMenuOpen(true)} />
				<LateralButton type="pesquisa" onClick={() => setSearchMenuOpen(true)} />
			</LateralButtonWrapper>

			<LateralMenu links={selectedLaw.relatedLinks} />
			<Search />

			<main className={styles.body}>
				<p
					className={classNames(
						styles.title,
						selectedLaw.jurisdiction === 'estadual' && styles.piaui,
					)}
				>
					{selectedLaw.title}
				</p>

				{!!selectedLaw.lawNumber && (
					<p className={styles.subtit}>
						<a href={selectedLaw.orgLink}>{selectedLaw.lawNumber}</a>
					</p>
				)}

				{!!selectedLaw.abstract && (
					<p className={styles.abstract}>{selectedLaw.abstract}</p>
				)}

				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: selectedLaw.content }}
				/>
			</main>
		</>
	);
}
