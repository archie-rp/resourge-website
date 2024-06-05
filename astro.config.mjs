import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: 'dist',
  site: 'https://archie-rp.github.io',
  base: 'resourge-website',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'rose-pine-moon' },
      gfm: true,
      optimize: true,
    }),
    //sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  /*adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),*/
});
