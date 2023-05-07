import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from '@astrojs/preact';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    // Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
  ],
});
