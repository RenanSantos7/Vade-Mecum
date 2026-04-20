import { IRelatedLink } from '../types/index.tsx';

class Provision {
    tag: string;
    content: string;
    classNames: string;
    attributes: Record<string, string>[]
    type: 'artigo' | 'alinea' | 'inciso' | 'titulo' | 'capítulo' | 'secao' | 'subsecao'

    // <p>texto</p>

    constructor(text: string) {
        const htmlRegex = /^<[a-z]+]>.*<\/[a-z]>$/
    }
}

class RelatedLink {
	constructor(id: string, name: string) {}
}

class Law {
	id: string;
	title: string;
	alias: string;
	content: Provision[];
	jurisdiction: 'nacional' | 'estadual';
	area:
		| ''
		| 'administrativo'
		| 'ambiental'
		| 'civil'
		| 'constitucional'
		| 'consumidor'
		| 'digital'
		| 'eleitoral'
		| 'empresarial'
		| 'etica'
		| 'juizados'
		| 'militar'
		| 'penal'
		| 'previdenciario'
		| 'trabalho'
		| 'tributario';
	relatedLinks?: RelatedLink[];
	abstract?: string;
	lawNumber?: string;
	orgLink?: string;

	constructor(
		id: string,
		title: string,
		alias: string,
		content: string,
		jurisdiction: 'nacional' | 'estadual',
		area:
			| ''
			| 'administrativo'
			| 'ambiental'
			| 'civil'
			| 'constitucional'
			| 'consumidor'
			| 'digital'
			| 'eleitoral'
			| 'empresarial'
			| 'etica'
			| 'juizados'
			| 'militar'
			| 'penal'
			| 'previdenciario'
			| 'trabalho'
			| 'tributario',
		relatedLinks?: RelatedLink[],
		abstract?: string,
		lawNumber?: string,
		orgLink?: string,
	) {
		this.id = id;
		this.title = title;
		this.alias = alias;
		this.jurisdiction = jurisdiction;
		this.area = area;
		this.relatedLinks = relatedLinks;
		this.abstract = abstract;
		this.lawNumber = lawNumber;
		this.orgLink = orgLink;
		this.content = content.split('\n').map(line => new Provision(line));
	}
}
