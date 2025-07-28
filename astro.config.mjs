// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: "https://resourge.vercel.app",
    integrations: [
        starlight({
            title: 'Resourge',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/resourge/' }
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction', link: 'introduction' },
                        { label: 'Contributing', link: 'contributing' },
                    ],
                },
                {
                    label: 'Packages',
                    items: [
                        {
                            label: 'React Form',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'react-form/intro' },
                                { label: 'API Reference', slug: 'react-form/api' },
                                { label: 'Examples', slug: 'react-form/examples' },
                                { label: 'Schema Validations', slug: 'react-form/schemas' },
                                { label: 'FAQ', slug: 'react-form/faq' },
                            ]
                        },
                        {
                            label: 'Vue 3 Hook Form',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'vue3-hook-form/intro' },
                                { label: 'API Reference', slug: 'vue3-hook-form/api' },
                                { label: 'Examples', slug: 'vue3-hook-form/examples' },
                                { label: 'FAQ', slug: 'vue3-hook-form/faq' },
                            ]
                        },
                        {
                            label: 'Schemas',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'schema/intro' },
                                { label: 'API Reference', slug: 'schema/api' },
                                { label: 'Examples', slug: 'schema/examples' },
                                { label: 'FAQ', slug: 'schema/faq' },
                            ]
                        },
                        {
                            label: 'Translations',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'translations/intro' },
                                { label: 'React API Reference', slug: 'translations/reactapi' },
                                { label: 'Vue 3 API Reference', slug: 'translations/vueapi' },
                                { label: 'Examples', slug: 'translations/examples' },
                                { label: 'ViteJS Plugin', slug: 'translations/plugins' },
                                { label: 'FAQ', slug: 'translations/faq' },
                            ]
                        },
                        {
                            label: 'React Router',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'react-router/intro' },
                                { label: 'API Reference', slug: 'react-router/api' },
                                { label: 'Examples', slug: 'react-router/examples' },
                                { label: 'FAQ', slug: 'react-router/faq' },
                            ]
                        },
                        {
                            label: 'Fetch',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'fetch/intro' },
                                { label: 'API Reference', slug: 'fetch/api' },
                                { label: 'Examples', slug: 'fetch/examples' },
                                { label: 'FAQ', slug: 'fetch/faq' },
                            ]
                        },
                        {
                            label: 'Http Service',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'http-service/intro' },
                                { label: 'API Reference', slug: 'http-service/api' },
                                { label: 'Examples', slug: 'http-service/examples' },
                                { label: 'FAQ', slug: 'http-service/faq' },
                            ]
                        },
                        {
                            label: 'React Authentication',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'react-authentication/intro' },
                                { label: 'API Reference', slug: 'react-authentication/api' },
                                { label: 'Examples', slug: 'react-authentication/examples' },
                                { label: 'FAQ', slug: 'react-authentication/faq' },
                            ]
                        },
                        {
                            label: 'Vue 3 Authentication',
                            collapsed: true,
                            items: [
                                { label: 'Introduction', slug: 'vue3-use-authentication/intro' },
                                { label: 'API Reference', slug: 'vue3-use-authentication/api' },
                                { label: 'Examples', slug: 'vue3-use-authentication/examples' },
                                { label: 'FAQ', slug: 'vue3-use-authentication/faq' },
                            ]
                        },
                    ],
                },
            ],
        }),
    ],
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
        maxDuration: 60,
        skewProtection: true,
    })
});