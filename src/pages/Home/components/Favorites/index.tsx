import { BookmarkRemoveOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useDataContext } from '../../../../contexts/dataContext.tsx';
import { ILaw } from '../../../../types/index.tsx';
import styles from './styles.module.css';

export default function Favorites() {
	const { favorites, setFavorites } = useDataContext();

	if (favorites.length === 0) {
		return (
			<section className={styles.favorites}>
				<h2>Favoritos</h2>
				<div className={styles.wrapper}>
					<div className={styles.void}>
						Seus favoritos irão aparecer aqui
					</div>
				</div>
			</section>
		);
	}

	function removeFavorito(item: ILaw) {
		setFavorites((prev: ILaw[]) => prev.filter(law => law.id !== item.id));
	}

	return (
		<section className={styles.favorites}>
			<h2 className={styles.title}>Favoritos</h2>
			<div className={styles.wrapper}>
				{favorites.map((lei: ILaw) => (
					<div key={lei.id} className={styles.item}>
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
