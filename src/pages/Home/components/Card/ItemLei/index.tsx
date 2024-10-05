import { useContext } from 'react';

import { ILei } from '../../../../../types/index.tsx';
import { LeisContext } from '../../../../../contexts/LeisContext.tsx';
import IndicadorFavorito from '../../IndicadorFavorito/index.tsx';
import styles from './styles.module.css';
import LinkLei from '../../../../../components/LinkLei.tsx';

interface ItemLeiProps {
	lei: ILei;
}

export default function ItemLei({ lei }: ItemLeiProps) {
	const { favoritos, setFavoritos } = useContext(LeisContext);

	function aoClicarFavorito() {
		if (favoritos.includes(lei)) {
			const favoritosSem = favoritos.filter((item: ILei) => item.id !== lei.id);

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
			<LinkLei destino={lei.id}>{lei.titulo}</LinkLei>
		</li>
	);
}
