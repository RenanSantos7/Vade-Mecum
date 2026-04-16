export interface IRelatedLink {
    id: string,
    name: string
}

export interface ILaw {
    id: string
    title: string
    alias: string
    relatedLinks?: IRelatedLink[],
    jurisdiction: 'nacional' | 'estadual',
    area: '' | 'administrativo' | 'ambiental' | 'civil' | 'constitucional' | 'consumidor' | 'digital' | 'eleitoral' | 'empresarial' | 'etica' | 'juizados' | 'militar' | 'penal' | 'previdenciario' | 'trabalho' | 'tributario',
    abstract?: string
    lawNumber?: string
    orgLink?: string
    content: string
}