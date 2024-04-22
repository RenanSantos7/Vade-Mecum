import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { LeisProvider } from './contexts/LeisContext.tsx'

export default function App() {
    return (
        <LeisProvider>
            <RouterProvider router={router} />
        </LeisProvider>
    )
}
