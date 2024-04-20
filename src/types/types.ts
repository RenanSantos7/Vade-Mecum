export interface ILinkRelacionado {
    id: string,
    nome: string
}

export interface ILei {
    id: string
    titulo: string
    alias: string
    linksRelacionados?: ILinkRelacionado[],
    jurisdicao: 'nacional' | 'estadual',
    area: '' | 'administrativo' | 'ambiental' | 'civil' | 'constitucional' | 'consumidor' | 'digital' | 'eleitoral' | 'empresarial' | 'etica' | 'juizados' | 'militar' | 'penal' | 'previdenciario' | 'trabalho' | 'tributario',
    ementa?: string
    numLei?: string
    linkDaLei?: string
    conteudo: string
}