---
title: Vite Plugin
description: Plugins available for @resourge/translations including viteTranslationPlugin.
---

## viteTranslationPlugin

`viteTranslationPlugin` is designed to enhance Vite applications by optimizing translation loading for production. It provides seamless integration for custom translations and ensures efficient handling of translation files.

### Usage

To use the `viteTranslationPlugin`, add it to your Vite configuration file (`vite.config.ts`):

```typescript
import { viteTranslationPlugin } from '@resourge/translations';

export default {
  plugins: [
    viteTranslationPlugin()
  ]
};
````

### Production-Optimized Translations

When you build your Vite application for production (`npm run build` or `yarn build`), the `viteTranslationPlugin` will automatically:

* Split translations into separate files per language.
* Load only the necessary language files on demand.
* Reduce initial bundle size and improve load times.

---

## Other Plugins in @resourge/translations

### htmlLanguage

Automatically sets and updates the HTML `<html lang="">` attribute according to the current language for accessibility and styling.

### languageLocalStorage

Stores and retrieves the selected language in the browser's local storage to persist language choice across sessions.

### navigatorLanguageDetector

Detects the user's preferred language from their browser settings and applies it if supported.

---

## Contributing

Contributions to `@resourge/translations` are welcome! Please see the [contributing guidelines](CONTRIBUTING.md).
