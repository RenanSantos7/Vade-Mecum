import { BookmarkRemoveOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { useDataContext } from '../../../../contexts/dataContext.tsx';
import { ILaw } from '../../../../types/index.tsx';
import styles from './styles.module.css';

export default function Favoritos() {
	const { favorites: favoritos, setFavorites: setFavoritos } = useDataContext();

	if (favoritos.length === 0) {
		return (
			<section className={styles.favoritos}>
				<h2>Favoritos</h2>
				<div className={styles.favoritos__wrapper}>
					<div className={styles.favoritos__vazio}>
						Seus favoritos irão aparecer aqui
					</div>
				</div>
			</section>
		);
	}

	function removeFavorito(item: ILaw) {
		setFavoritos((prev: ILaw[]) => prev.filter(lei => lei.id !== item.id));
	}

	return (
		<section className={styles.favoritos}>
			<h2>Favoritos</h2>
			<div className={styles.favoritos__wrapper}>
				{favoritos.map((lei: ILaw) => (
					<div key={lei.id} className={styles.favoritos__item}>
						<Link to={`/leis/${lei.id}`}>{lei.alias}</Link>

						<button
							type="button"
							title="Remover favorito"
							className={styles.btRemove}
							onClick={() => removeFavorito(lei)}
						>
							<BookmarkRemoveOutlined />
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
