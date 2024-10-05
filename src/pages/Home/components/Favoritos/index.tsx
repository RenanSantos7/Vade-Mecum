import { BookmarkRemoveOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { LeisContext } from '../../../../contexts/LeisContext.tsx';
import { ILei } from '../../../../types/index.tsx';
import styles from './styles.module.css';

export default function Favoritos() {
	const { favoritos, setFavoritos } = useContext(LeisContext);

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

	function removeFavorito(item: ILei) {
		setFavoritos((prev: ILei[]) => prev.filter(lei => lei.id !== item.id));
	}

	return (
		<section className={styles.favoritos}>
			<h2>Favoritos</h2>
			<div className={styles.favoritos__wrapper}>
				{favoritos.map((lei: ILei) => (
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
