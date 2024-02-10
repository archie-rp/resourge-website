export const SITE = {
	title: 'Resourge - Simplify React Dev with Typed JS Libraries',
	description: 'Resourge is a collection of fully typed TypeScript libraries designed to simplify development with plain JavaScript. Our libraries include React-form, Schema validation, Translations, React Router and Fetch. Start simplifying your React development today!',
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
	Vue3HookForm: 'vue3-hook-form',
	Schema: 'schema',
	Router: 'react-router',
	Table: 'react-hook-table',
	ReactSearchParams: 'react-search-params',
	Translations: 'translations',
	Fetch: 'fetch',
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
