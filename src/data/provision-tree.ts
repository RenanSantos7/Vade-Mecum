type ProvisionType =
	| 'artigo'
	| 'paragrafo'
	| 'alinea'
	| 'inciso'
	| 'titulo'
	| 'capítulo'
	| 'secao'
	| 'subsecao'
	| 'texto';

type HtmlAttributes = Record<string, string>;

type BlockMatch = {
	tag: string;
	attributes: HtmlAttributes;
	classNames: string[];
	content: string;
};

export class ProvisionNode {
	tag: string;
	type: ProvisionType;
	content: string;
	classNames: string[];
	attributes: HtmlAttributes;
	children: ProvisionNode[];

	constructor(params: {
		tag: string;
		type?: ProvisionType;
		content?: string;
		classNames?: string[];
		attributes?: HtmlAttributes;
		children?: ProvisionNode[];
	}) {
		this.tag = params.tag;
		this.type = params.type ?? 'texto';
		this.content = params.content ?? '';
		this.classNames = params.classNames ?? [];
		this.attributes = params.attributes ?? {};
		this.children = params.children ?? [];
	}

	get isLeaf(): boolean {
		return this.children.length === 0;
	}

	getClassNameString(): string {
		return this.classNames.join(' ');
	}
}

export function parseProvisionTree(html: string): ProvisionNode[] {
	const root = new ProvisionNode({ tag: 'root', type: 'texto' });
	const blocks = parseBlocks(html);
	let currentParent = root;
	let currentArticle: ProvisionNode | null = null;

	for (const block of blocks) {
		const node = new ProvisionNode({
			tag: block.tag,
			content: block.content,
			classNames: block.classNames,
			attributes: block.attributes,
		});
		node.type = inferBlockType(node);

		if (isSuperiorType(node.type)) {
			currentParent = attachByHierarchy(root, currentParent, node);
			currentArticle = null;
			continue;
		}

		if (node.type === 'artigo') {
			currentArticle = node;
			currentParent.children.push(node);
			continue;
		}

		if (currentArticle) {
			currentArticle.children.push(node);
			continue;
		}

		currentParent.children.push(node);
	}

	return root.children;
}

function inferBlockType(node: ProvisionNode): ProvisionType {
	const firstToken = getFirstMeaningfulToken(node.content);
	let type: ProvisionType = 'texto';

	switch (true) {
		case /^art\.?$/i.test(firstToken) || /^artigo$/i.test(firstToken):
			type = 'artigo';
			break;
		case /^par[aá]grafo$/i.test(firstToken) || /^§$/i.test(firstToken):
			type = 'paragrafo';
			break;
		case /^t[ií]tulo$/i.test(firstToken):
			type = 'titulo';
			break;
		case /^cap[ií]tulo$/i.test(firstToken):
			type = 'capítulo';
			break;
		case /^se[cç][aã]o$/i.test(firstToken):
			type = 'secao';
			break;
		case /^subse[cç][aã]o$/i.test(firstToken):
			type = 'subsecao';
			break;
		case /^[ivxlcdm]+\s*[-–—.]?$/i.test(firstToken):
			type = 'inciso';
			break;
		case /^[a-z]\s*[)-–—.]?$/i.test(firstToken):
			type = 'alinea';
			break;
	}

	return type;
}

function parseBlocks(html: string): BlockMatch[] {
	const blockRegex = /<(p|h1|h2|h3|h4|h5|h6)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
	const blocks: BlockMatch[] = [];
	let match: RegExpExecArray | null;

	while ((match = blockRegex.exec(html)) !== null) {
		const tag = match[1].toLowerCase();
		const attributes = parseAttributes(match[2] ?? '');
		const classNames = attributes.class?.split(/\s+/).filter(Boolean) ?? [];
		const content = match[3].trim();

		blocks.push({ tag, attributes, classNames, content });
	}

	return blocks;
}

function parseAttributes(rawAttributes: string): HtmlAttributes {
	const attributes: HtmlAttributes = {};
	const attributeRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(["'])(.*?)\2/g;
	let match: RegExpExecArray | null;

	while ((match = attributeRegex.exec(rawAttributes)) !== null) {
		attributes[match[1].toLowerCase()] = match[3];
	}

	return attributes;
}

function attachByHierarchy(
	root: ProvisionNode,
	currentParent: ProvisionNode,
	node: ProvisionNode,
): ProvisionNode {
	const level = getHierarchyLevel(node.type);
	let parent = currentParent;

	while (parent !== root && getHierarchyLevel(parent.type) >= level) {
		const maybeParent = findParent(root, parent);
		if (!maybeParent) {
			break;
		}

		parent = maybeParent;
	}

	parent.children.push(node);
	return node;
}

function findParent(root: ProvisionNode, target: ProvisionNode): ProvisionNode | null {
	const stack: ProvisionNode[] = [root];

	while (stack.length > 0) {
		const current = stack.pop() as ProvisionNode;
		for (const child of current.children) {
			if (child === target) {
				return current;
			}

			stack.push(child);
		}
	}

	return null;
}

function getHierarchyLevel(type: ProvisionType): number {
	if (type === 'titulo') {
		return 1;
	}

	if (type === 'capítulo') {
		return 2;
	}

	if (type === 'secao') {
		return 3;
	}

	if (type === 'subsecao') {
		return 4;
	}

	return 0;
}

function isSuperiorType(type: ProvisionType): boolean {
	return getHierarchyLevel(type) > 0;
}

function getFirstMeaningfulToken(html: string): string {
	const text = stripTags(html);
	const normalized = decodeHtmlEntities(text).trim();
	const firstMatch = normalized.match(/^([A-Za-zÀ-ÿ§]+(?:\.|\)|-)?)/);
	return firstMatch?.[1] ?? '';
}

function stripTags(html: string): string {
	return html.replace(/<[^>]+>/g, ' ');
}

function decodeHtmlEntities(text: string): string {
	return text
		.replace(/&nbsp;/gi, ' ')
		.replace(/&amp;/gi, '&')
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&quot;/gi, '"')
		.replace(/&#39;/gi, "'");
}