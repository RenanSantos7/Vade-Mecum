import { useContext } from 'react';

import { ILaw } from '../../../../../types/index.tsx';
import { useDataContext } from '../../../../../contexts/dataContext.tsx';
import IndicadorFavorito from '../../IndicadorFavorito/index.tsx';
import styles from './styles.module.css';
import LinkLaw from '../../../../../components/LinkLaw.tsx';

interface ItemLeiProps {
	lei: ILaw;
}

export default function ItemLei({ lei }: ItemLeiProps) {
	const { favorites: favoritos, setFavorites: setFavoritos } = useDataContext();

	function aoClicarFavorito() {
		if (favoritos.includes(lei)) {
			const favoritosSem = favoritos.filter((item: ILaw) => item.id !== lei.id);

			setFavoritos(favoritosSem);
			console.log('favorito removido');
		} else {
			setFavoritos((prev: any) => [...prev, lei]);
			console.log('favorito adicionado');
		}

		const favoritosJSON = JSON.stringify(favoritos);
		localStorage.setItem('favoritos', favoritosJSON);
	}

	return (
		<li className={styles.item}>
			<button
				type="button"
				className={styles.btFavorito}
				onClick={aoClicarFavorito}
			>
                {/* {favoritos.includes(lei) ? <StarFill /> : <StartOutlined />} */}
                <IndicadorFavorito ehFavorito={favoritos.includes(lei)} />
			</button>
			<LinkLaw destino={lei.id}>{lei.title}</LinkLaw>
		</li>
	);
}
