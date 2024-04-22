import styles from './Home.module.css'
import Favoritos from './components/Favoritos/Favoritos.tsx'
import Footer from './components/Footer/Footer.tsx'
import Card from './components/Card/Card.tsx'
import Pesquisa from './components/Pesquisa/Pesquisa.tsx'
import { LeisContext } from '../../contexts/LeisContext.tsx'
import { useContext, useEffect, useState } from 'react'
import { ILei } from '../../types/types.ts'

export default function Home() {
	const { leis } = useContext(LeisContext)
	const [termoPesquisa, setTermoPesquisa] = useState('')

	const ramos = [
		{ id: 'constitucional', titulo: 'Direito Constitucional' },
		{ id: 'administrativo', titulo: 'Direito Administrativo' },
		{ id: 'previdenciario', titulo: 'Direito Previdenciário' },
		{ id: 'eleitoral', titulo: 'Direito Eleitoral' },
		{ id: 'ambiental', titulo: 'Direito Ambiental' },
		{ id: 'civil', titulo: 'Direito Civil' },
		{ id: 'penal', titulo: 'Direito Penal' },
		{ id: 'etica', titulo: 'Ética OAB' },
		{ id: 'empresarial', titulo: 'Direito Empresarial' },
		{ id: 'consumidor', titulo: 'Direito do Consumidor' },
		{ id: 'juizados', titulo: 'Juizados Especiais' },
		{ id: 'trabalho', titulo: 'Direito do Trabalho' },
		{ id: 'tributario', titulo: 'Direito Tributário' },
		{ id: 'digital', titulo: 'Direito Digital' },
		{ id: 'militar', titulo: 'Direito Militar' },
	]

	return (
		<div className={styles.home}>
			<header className={styles.cabecalho}>
				<h1>Vade Mecum</h1>
			</header>

			<main>
				<Favoritos />

				<Pesquisa
					termoPesquisa={termoPesquisa}
					setTermoPesquisa={setTermoPesquisa}
					leis={leis}
				/>

				<section className={styles.corpo}>
					{ramos.map(ramo => {
						const leisDesseRamo = leis.filter(
							(lei: ILei) => lei.area === ramo.id,
						)
						if (!!leisDesseRamo.length) {
							return (
								<Card
									key={ramo.id}
									id={ramo.id}
									titulo={ramo.titulo}
									array={leisDesseRamo}
								/>
							)
						}
					})}

					<Card
						key={'piaui'}
						id="piaui"
						array={leis.filter((lei: ILei) => lei.jurisdicao === 'estadual')}
						titulo="Legistalação Estadual"
					/>

					<Card
						key={'outros'}
						id="outros"
						titulo="Outros"
						array={leis.filter(
							(lei: ILei) =>
								lei.jurisdicao !== 'estadual' &&
								lei.area !== 'constitucional' &&
								lei.area !== 'civil' &&
								lei.area !== 'penal' &&
								lei.area !== 'empresarial' &&
								lei.area !== 'digital' &&
								lei.area !== 'administrativo' &&
								lei.area !== 'trabalho' &&
								lei.area !== 'previdenciario' &&
								lei.area !== 'tributario' &&
								lei.area !== 'etica' &&
								lei.area !== 'eleitoral' &&
								lei.area !== 'consumidor' &&
								lei.area !== 'juizados' &&
								lei.area !== 'ambiental',
						)}
					/>
				</section>
			</main>

			<Footer />
		</div>
	)
}
