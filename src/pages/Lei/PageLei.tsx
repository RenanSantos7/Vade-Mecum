import './PageLei.css'
import MenuLateral from './components/MenuLateral/MenuLateral.tsx'
import Pesquisa from './components/Pesquisa/Pesquisa.tsx'
import { useContext, useEffect } from 'react'
import { LeisContext } from '../../contexts/LeisContext.tsx'
import { useParams } from 'react-router-dom'
import { ILei } from '../../types/types.ts'
import BotaoLateral from './components/BotaoLateral/BotaoLateral.tsx'
import classNames from 'classnames'

export default function PageLei() {
	const params = useParams()

	const { leis, setMenuAberto, setPesquisaAberta } = useContext(LeisContext)
	const leiSelecionada = leis.find((lei: ILei) => lei.id == params.leiID)

	useEffect(() => {
		document.title = `Vade Mecum | ${leiSelecionada.alias}`
	}, [])

	return (
		<>
			<BotaoLateral tipo='menu' onClick={() => setMenuAberto(true)} />
			<MenuLateral links={leiSelecionada.linksRelacionados} />

			<BotaoLateral tipo='pesquisa' onClick={() => setPesquisaAberta(true)} />
			<Pesquisa />

			<main className='corpo'>
				<p className={classNames(
					'titulo',
					leiSelecionada.jurisdicao === 'estadual' && 'piaui'
				)}>
					{leiSelecionada.titulo}
				</p>

				{!!leiSelecionada.numLei && (
					<p className='subtit'>
						<a href={leiSelecionada.linkDaLei}>{leiSelecionada.numLei}</a>
					</p>
				)}

				{!!leiSelecionada.ementa &&
					<p className='ementa'>{leiSelecionada.ementa}</p>
				}

				<div
					className='conteudo'
					dangerouslySetInnerHTML={
						{ __html: leiSelecionada.conteudo }
					}
				/>
			</main>
		</>
	)
}
