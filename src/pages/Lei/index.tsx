import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ILaw } from '../../types/index.tsx';
import { useDataContext } from '../../contexts/dataContext.tsx';
import BotaoLateral from './components/BotaoLateral/index.tsx';
import BotoesLaterais from './components/BotoesLaterais/index.tsx';
import MenuLateral from './components/MenuLateral/index.tsx';
import Pesquisa from './components/Pesquisa/index.tsx';
import styles from './styles.module.css';

export default function PageLei() {
	const params = useParams();

	const { laws: leis, setMenuOpen: setMenuAberto, setSearchMenuOpen: setPesquisaAberta } = useDataContext();
	const leiSelecionada = leis.find((lei: ILaw) => lei.id == params.leiID);

	useEffect(() => {
		document.title = `Vade Mecum | ${leiSelecionada.alias}`;
	}, []);

	return (
		<>
			<BotoesLaterais>
				<BotaoLateral tipo="menu" onClick={() => setMenuAberto(true)} />
				<BotaoLateral tipo="pesquisa" onClick={() => setPesquisaAberta(true)} />
			</BotoesLaterais>

			<MenuLateral links={leiSelecionada.relatedLinks} />
			<Pesquisa />

			<main className={styles.corpo}>
				<p
					className={classNames(
						styles.titulo,
						leiSelecionada.jurisdiction === 'estadual' && styles.piaui,
					)}
				>
					{leiSelecionada.title}
				</p>

				{!!leiSelecionada.lawNumber && (
					<p className={styles.subtit}>
						<a href={leiSelecionada.orgLink}>{leiSelecionada.lawNumber}</a>
					</p>
				)}

				{!!leiSelecionada.abstract && (
					<p className={styles.ementa}>{leiSelecionada.abstract}</p>
				)}

				<div
					className={styles.conteudo}
					dangerouslySetInnerHTML={{ __html: leiSelecionada.content }}
				/>
			</main>
		</>
	);
}
