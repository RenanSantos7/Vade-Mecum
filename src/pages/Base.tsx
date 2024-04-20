import { Outlet, ScrollRestoration } from 'react-router-dom'
export default function Base() {
	return (
		<>
			<Outlet />
			<ScrollRestoration />
		</>
	)
}
