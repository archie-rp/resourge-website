import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://resourge.vercel.app",
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark-dimmed' },
      gfm: true,
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
});
