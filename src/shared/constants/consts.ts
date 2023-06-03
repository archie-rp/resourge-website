export const SITE = {
	title: 'Resourge - Simplify React Dev with Typed JS Libraries',
	description: 'Resourge is a collection of fully typed TypeScript libraries designed to simplify development with plain JavaScript. Our libraries include React-form, Schema validation, Translations, React Router, Fetch, and jsexcel. Start simplifying your React development today!',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt: 'Image for Resourge - Simplify React Dev with Typed JS Libraries'
	}
};

export const Libraries = {
	HomePage: '/',
	ReactForm: 'react-form',
	Schema: 'schema',
	Router: 'react-router',
	Table: 'react-hook-table',
	ReactSearchParams: 'react-search-params',
	Translations: 'translations',
	Fetch: 'fetch'
} as const;
export const LibrariesValues = Object.values(Libraries);

export const GITHUB_EDIT_URL = `https://github.com/resourge/`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof LibrariesValues)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	'react-form': {
		'Guide': [
			{ text: 'Get Started', link: 'react-form/intro' },
		],
		'Documentation': [
			{ text: 'State', link: 'react-form/state' },
			{ text: 'Hooks', link: 'react-form/hooks' },
			{ text: 'Methods', link: 'react-form/actions' },
			{ text: 'Provider', link: 'react-form/provider' },
			{ text: 'Controller', link: 'react-form/controller' },
		],
		'Try now': [
			{ text: 'Playground', link: 'react-form/playground' }
		]
	},
	'schema': {
		'Guide': [
			{ text: 'Get Started', link: 'schema/intro' },
		],
		'Documentation': [
			{ text: 'General Rules', link: 'schema/rules' },
			{ text: 'String', link: 'schema/string' },
			{ text: 'Number', link: 'schema/number' },
			{ text: 'Boolean', link: 'schema/boolean' },
			{ text: 'Object', link: 'schema/object' },
			{ text: 'Date', link: 'schema/date' },
			{ text: 'Array', link: 'schema/array' },
			{ text: 'Any', link: 'schema/any' },
		],
		'Try now': [
			{ text: 'Playground', link: 'schema/playground' }
		]
	},
	'react-router': {
		'Guide': [
			{ text: 'Get Started', link: 'react-router/intro' },
		],
		'Documentation': [
			{ text: 'Setup Paths', link: 'react-router/paths' },
			{ text: 'Components', link: 'react-router/components' },
			{ text: 'Hooks', link: 'react-router/hooks' },
		],
	},
	'react-hook-table': {
		'Guide': [
			{ text: 'Get Started', link: 'react-hook-table/intro' },
		],
		'Documentation': [
			{ text: 'Hooks', link: 'react-hook-table/hooks' },
			{ text: 'Methods', link: 'react-hook-table/methods' },
		],
	},
	'react-search-params': {
		'Guide': [
			{ text: 'Get Started', link: 'react-search-params/intro' },
		],
		'Documentation': [
			{ text: 'Methods', link: 'react-search-params/methods' },
		],
	},
	'fetch': {
		'Guide': [
			{ text: 'Get Started', link: 'fetch/intro' },
		],
		'Documentation': [
			{ text: 'Hooks', link: 'fetch/hooks' },
			{ text: 'Loader', link: 'fetch/loader' },
			{ text: 'Http Service', link: 'fetch/http-service' },
		],
	},
	'translations': {
		'Guide': [
			{ text: 'Get Started', link: 'translations/intro' },
		],
		'Documentation': [
			{ text: 'useTranslation', link: 'translations/hook' },
			{ text: 'Typescript', link: 'translations/typescript' },
			{ text: 'Plugin Vite', link: 'translations/plugin' },
		],
	},
	'/': {}
};
