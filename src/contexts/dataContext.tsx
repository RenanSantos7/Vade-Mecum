import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { listaLeis } from '../dados/index.tsx';
import { ILaw } from '../types/index.tsx';

interface IDataContext {
	laws: ILaw[];
	favorites: ILaw[];
	setFavorites: Dispatch<SetStateAction<ILaw[]>>;
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	searchMenuOpen: boolean;
	setSearchMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const DataContext = createContext<IDataContext>(null);
DataContext.displayName = 'Leis';

export const DataProvider = ({ children }: { children: ReactNode }) => {
	const [favoritos, setFavoritos] = useState([]);

	const [menuOpen, setMenuOpen] = useState(false);
	const [searchMenuOpen, setSearchMenuOpen] = useState(false);

	useEffect(() => {
		const favoritosLocalSt = localStorage.getItem('favoritos');
		const favoritosParse = JSON.parse(favoritosLocalSt);
		if (favoritosLocalSt) setFavoritos(favoritosParse);
	}, []);

	return (
		<DataContext.Provider
			value={{
				laws: listaLeis as ILaw[],
				favorites: favoritos,
				setFavorites: setFavoritos,
				menuOpen,
				setMenuOpen,
				searchMenuOpen,
				setSearchMenuOpen,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export function useDataContext() {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('DataContext não está sendo provido neste componente');
	}
	return context;
}
