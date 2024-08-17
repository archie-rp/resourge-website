import { orderByTitle } from "./utils";

export type Feature = {
	title: string;
	description: string;
	href: string;
	support: string[];
};

export const SITE = {
	title: 'Resourge - Simplify React Dev with Typed JS Libraries',
	description: 'Resourge provides a suite of TypeScript libraries designed to enhance development in React and other JavaScript frameworks. Our tools streamline form management, data validation, routing, authentication, and more, enabling you to build robust applications efficiently.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt: 'Image for Resourge - Simplify React Dev with Typed JS Libraries',
	},
};

export const Libraries = {
	HomePage: '/',
	ReactForm: '/docs/react-form/intro',
	Vue3HookForm: '/docs/vue3-hook-form/intro',
	Vue3UseAuthentication: '/docs/vue3-use-authentication/intro',
	Schema: '/docs/schema/intro',
	Router: '/docs/react-router/intro',
	Table: '/docs/react-hook-table/intro',
	ReactSearchParams: '/docs/react-search-params/intro',
	Translations: '/docs/translations/intro',
	Fetch: '/docs/fetch/intro',
	HttpService: '/docs/http-service/intro',
	ReactAuthentication: '/docs/react-authentication/intro',
	Vue3Authentication: '/docs/vue3-use-authentication/intro',
} as const;

export const LibrariesValues = Object.values(Libraries);

export const GITHUB_EDIT_URL = 'https://github.com/resourge/';

export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export const mainMenuOfLibraries: Feature[] = orderByTitle([
	{
		title: "React Form",
		description: "Effortlessly manage complex forms in React with extensive validation options and custom components. Perfect for building dynamic user interfaces with ease.",
		href: Libraries.ReactForm,
		support: ["React", "React Native"],
	},
	{
		title: "Vue 3 Hook Form",
		description: "Streamline form handling in Vue 3 with a library designed for simplicity and flexibility. Customize validation and form logic without hassle.",
		href: Libraries.Vue3HookForm,
		support: ["Vue 3"],
	},
	{
		title: "Schemas",
		description: "Enhance your data validation processes with support for nested schemas and custom validation rules. Ideal for ensuring data integrity in complex applications.",
		href: Libraries.Schema,
		support: ["JavaScript"],
	},
	{
		title: "Translations",
		description: "Simplify the creation of multilingual applications with a straightforward API for managing translation keys and handling multiple languages effortlessly.",
		href: Libraries.Translations,
		support: ["React", "Vue 3", "React Native"],
	},
	{
		title: "React Router",
		description: "Implement client-side routing in your React applications seamlessly, reducing the need for server-side requests and improving user experience.",
		href: Libraries.Router,
		support: ["React"],
	},
	{
		title: "React Hook Table",
		description: "Manage and display tabular data in React applications with an intuitive set of hooks. Perfect for creating interactive and efficient data tables.",
		href: Libraries.Table,
		support: ["React"],
	},
	{
		title: "React Search Params",
		description: "Handle URL parameters in your React applications using a set of specialized hooks. Simplify state management related to search queries and routing.",
		href: Libraries.ReactSearchParams,
		support: ["React"],
	},
	{
		title: "Fetch",
		description: "Make API requests in your React app with a user-friendly service that includes features like caching and automatic retries. Enhance your data-fetching strategy.",
		href: Libraries.Fetch,
		support: ["React", "React Native"],
	},
	{
		title: "Http Service",
		description: "Manage HTTP requests with ease using a simple and powerful API. Ideal for handling various types of network operations in your JavaScript applications.",
		href: Libraries.HttpService,
		support: ["JavaScript"],
	},
	{
		title: "React Authentication",
		description: "Integrate authentication into your React applications with a comprehensive system for managing user sessions and security features.",
		href: Libraries.ReactAuthentication,
		support: ["React"],
	},
	{
		title: "Vue 3 Authentication",
		description: "Implement authentication in Vue 3 applications with a robust system designed for handling user sessions and securing your application.",
		href: Libraries.Vue3Authentication,
		support: ["Vue 3"],
	},
]);
