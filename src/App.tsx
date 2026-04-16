import { RouterProvider } from 'react-router-dom';

import { DataProvider } from './contexts/dataContext.tsx';
import router from './router.tsx';

export default function App() {
	return (
		<DataProvider>
			<RouterProvider router={router} />
		</DataProvider>
	);
}
