import { orderByTitle } from "./utils";

export type Feature = {
	title: string;
	description: string;
	href: string;
	support: string[];
};

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
	Vue3UseAuthentication: 'vue3-use-authentication',
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

export const mainMenuOfLibraries: Feature[] = orderByTitle([
	{
		title: "React Form",
		description:
			"Build forms easily in React with customizable options and validations.",
		href: "/docs/react-form/intro",
		support: ["React", "React Native"],
	},
	{
		title: "Vue 3 Hook Form",
		description:
			"Build forms easily in Vue 3 with customizable options and validations.",
		href: "/docs/vue3-hook-form/intro",
		support: ["Vue 3"],
	},
	{
		title: "Schemas",
		description:
			"Simplify data validation with nested schemas and custom rules.",
		href: "/docs/schema/intro",
		support: ["React", "React Native", "Vue 3"],
	},
	{
		title: "Translations",
		description:
			"Create multilingual applications with a simple API and translation key handling.",
		href: "/docs/translations/intro",
		support: ["React", "Vue 3"],
	},
	{
		title: "React Router",
		description:
			"Enable client-side routing in your app without server requests.",
		href: "/docs/react-router/intro",
		support: ["React"],
	},
	{
		title: "React Hook Table",
		description: "Control tables easily with a set of React hooks.",
		href: "/docs/react-hook-table/intro",
		support: ["React"],
	},
	{
		title: "React Search Params",
		description: "Manage current URL parameters with a set of React hooks.",
		href: "/docs/react-search-params/intro",
		support: ["React"],
	},
	{
		title: "Fetch",
		description:
			"Fetch data in your React app with a simpler Service, including caching and retrying.",
		href: "/docs/fetch/intro",
		support: ["React", "React Native"],
	},
	{
		title: "React Authentication",
		description: "System to manage authentication in React applications.",
		href: "/docs/react-authentication/intro",
		support: ["React"],
	},
	{
		title: "Vue 3 Authentication",
		description: "System to manage authentication in React applications.",
		href: "/docs/vue3-use-authentication/intro",
		support: ["Vue 3"],
	},
])

export type Sidebar = Record<
	(typeof LibrariesValues)[number],
	Record<string, { text: string; link: string }[]>
>;
