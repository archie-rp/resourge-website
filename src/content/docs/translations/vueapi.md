---
title: Vue Translations API
description: API reference for @resourge/vue-translations package.
---

`@resourge/vue-translations` provides Vue 3 specific utilities built on top of the core `@resourge/translations` library to simplify translation integration in Vue applications.

---

## SetupVueTranslations(config)

Initializes the translation system for Vue apps.

**Parameters:**

- `config` (`SetupTranslationsConfig`): Configuration object including supported languages, default language, plugins, translations or loading options.

**Returns:**

An object containing:

- `TranslationInstance`: The core translation instance.
- `useTranslation`: Vue composable to access translations and language controls.
- `TranslationProvider`: Vue component to provide translation context.

---

## useTranslation()

Vue 3 composable to access the current translations and language management.

### Returns:

- `T` (`Ref<Record<string, any>>`): Reactive translations object for the active language.
- `changeLanguage(lang: string): Promise<void>`: Function to switch the current language.
- `languages` (`string[]`): Array of available language codes.
- `language` (`Ref<string>`): Reactive current language code.
- `addEventListener(event: 'languageChange' | 'missingRequestKeys', callback: Function): () => void`: Adds an event listener; returns a remover function.

---

## TranslationProvider

Vue component to provide the translation instance to descendant components via Vue’s provide/inject API.

### Props:

- `translationInstance`: The translation instance returned by `SetupVueTranslations`.
- Slots: default slot for rendering child components.

---

## Trans Component

Vue component for rendering translation strings with embedded HTML-like tags, replaced by Vue components.

### Props:

- `message` (`string`): The translated string containing HTML-like tags.
- `components` (`Record<string, VueComponent>`): Mapping of tag names to Vue components to replace tags in the message.

### Behavior:

- Parses the `message` prop as HTML-like content.
- Replaces recognized tags with corresponding Vue components from `components` prop or provider.
- Unrecognized tags render as `<missing-translation-tag>` elements with the tag name.

---

## Example Usage

```vue
<script setup lang="ts">
import { SetupVueTranslations, useTranslation, Trans, TranslationProvider } from '@resourge/vue-translations';

const { TranslationInstance, useTranslation } = SetupVueTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  translations: {
    greeting: {
      en: 'Hello, <strong>{name}</strong>!',
      fr: 'Bonjour, <strong>{name}</strong>!',
    }
  }
});

const { T } = useTranslation();
</script>

<template>
  <TranslationProvider :translationInstance="TranslationInstance">
    <Trans :message="T.greeting" :components="{ strong: 'strong' }" />
  </TranslationProvider>
</template>
````

---

## Additional Notes

* `@resourge/vue-translations` relies on the core `@resourge/translations` for the main translation engine.
* Provides Vue 3 composition API friendly features for reactive translation handling.
* Supports dynamic language switching and event listeners.

---