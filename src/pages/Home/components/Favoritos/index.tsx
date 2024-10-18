import { BookmarkRemoveOutlined } from '@mui/icons-material';
import { useContext } from 'react';

import { useLeisContext } from '../../../../contexts/LeisContext.tsx';
import { ILei } from '../../../../types/index.tsx';
import styles from './styles.module.css';
import LinkLei from '../../../../components/LinkLei.tsx';

export default function Favoritos() {
	const { favoritos, setFavoritos } = useLeisContext();

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
						<LinkLei destino={lei.id}>{lei.alias}</LinkLei>

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
