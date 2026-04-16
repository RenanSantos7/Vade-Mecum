import { Close as CloseIcon } from '@mui/icons-material';
import { useContext, useState } from 'react';
import classNames from 'classnames';

import { useDataContext } from '../../../../contexts/dataContext.tsx';
import styles from './styles.module.css';

export default function Search() {
	const { searchMenuOpen, setSearchMenuOpen } = useDataContext();
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [articleQuery, setArticleQuery] = useState('');
	const [results, setResults] = useState([]);

	function handleSearch(evt: React.MouseEvent<HTMLButtonElement>) {
		evt.preventDefault();
	}

	return (
		<div
			className={classNames(
				styles.searchArticle,
				searchMenuOpen && styles.aberto,
			)}
		>
			<button
				type="button"
				className={styles.closeBtn}
				onClick={() => {
					setSearchMenuOpen(false);
				}}
				title="Fechar"
			>
				<CloseIcon fontSize="inherit" />
			</button>

			<h2>Pesquisar artigo</h2>

			<label>
				<span
					className={classNames(
						styles.label,
						!isInputFocused && styles.placeholder,
					)}
				>
					Digite o número do artigo
				</span>
				<input
					type="text"
					className={styles.input}
					min="1"
					value={articleQuery}
					onChange={evt => setArticleQuery(evt.target.value)}
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
				/>
			</label>

			<button
				type="button"
				className={styles.searchBnt}
				onClick={evt => handleSearch(evt)}
			>
				Pesquisar
			</button>

			<div className={styles.resultados}></div>
		</div>
	);
}
