import { ILaw } from '../../../../../types/index.tsx';
import { useDataContext } from '../../../../../contexts/dataContext.tsx';
import IndicadorFavorito from '../../FavIndicator/index.tsx';
import LinkLaw from '../../../../../components/LinkLaw.tsx';
import styles from './styles.module.css';

interface ItemLeiProps {
	law: ILaw;
}

export default function ItemLaw({ law: law }: ItemLeiProps) {
	const { favorites, setFavorites } = useDataContext();

	function onClickFavorite() {
		if (favorites.includes(law)) {
			const filteredFav = favorites.filter((item: ILaw) => item.id !== law.id);
			setFavorites(filteredFav);
			console.log('favorito removido');
		} else {
			setFavorites((prev: any) => [...prev, law]);
			console.log('favorito adicionado');
		}
		const favoritesJSON = JSON.stringify(favorites);
		localStorage.setItem('favoritos', favoritesJSON);
	}

	return (
		<li className={styles.item}>
			<button
				type="button"
				className={styles.btnFavorite}
				onClick={onClickFavorite}
			>
                <IndicadorFavorito isFavorite={favorites.includes(law)} />
			</button>
			<LinkLaw destino={law.id}>{law.title}</LinkLaw>
		</li>
	);
}
