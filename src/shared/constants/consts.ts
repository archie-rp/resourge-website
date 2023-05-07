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
	ReactForm: 'react-form',
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
			// { text: 'Example', link: 'react-form/example' },
		],
		'Documentation': [
			{ text: 'General Rules', link: 'react-form/rules' },
			{ text: 'String', link: 'react-form/string' },
			{ text: 'Number', link: 'react-form/number' },
			{ text: 'Boolean', link: 'react-form/boolean' },
			{ text: 'Object', link: 'react-form/object' },
			{ text: 'Date', link: 'react-form/date' },
			{ text: 'Array', link: 'react-form/array' },
			{ text: 'Any', link: 'react-form/any' },
		],
		'Try now': [
			{ text: 'Playground', link: 'react-form/playground' }
		]
	},
};
