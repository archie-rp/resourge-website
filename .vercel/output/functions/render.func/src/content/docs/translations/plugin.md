---
title: "Configuration for Vitejs"
---

## Configuration

To split translations into separate files and optimize bundle size in Vite.js, follow these steps:

### Update Vite Configuration for Vue

In the `vite.config.js` file, import the necessary packages and configure Vite with the `viteTranslationPlugin`:

``` javascript
import { viteTranslationPlugin } from '@resourge/vue-translations/viteTranslationPlugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    viteTranslationPlugin()
  ]
});

```

### Update Vite Configuration for React

In the `vite.config.js` file, import the necessary packages and configure Vite with the `viteTranslationPlugin`:

``` javascript
import { viteTranslationPlugin } from '@resourge/react-translations/viteTranslationPlugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    viteTranslationPlugin()
  ]
});

```

You can now build your application using Vite.js.
The translations will be split into separate files, improving bundle size and optimizing chunk size.