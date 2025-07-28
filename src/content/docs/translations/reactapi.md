---
title: React Translations API
description: API reference for @resourge/react-translations package.
---

`@resourge/react-translations` provides React-specific utilities built on top of the core `@resourge/translations` library to facilitate translation integration in React apps.

---

## SetupReactTranslations(config)

Creates and initializes the translation setup for React applications.

**Parameters:**

- `config` (`SetupTranslationsConfig`): Configuration object including languages, default language, plugins, translations or loading strategies.

**Returns:**

An object containing:

- `TranslationInstance`: The initialized translation instance (core library instance).
- `useTranslation`: React hook to access translations and language controls.

---

## useTranslation()

React hook to access translation state and functions within components wrapped by `TranslationProvider`.

### Returns:

- `T` (`Record<string, any>`): Translations object for the current language.
- `changeLanguage(lang: string): Promise<void>`: Function to change the current language dynamically.
- `languages` (`string[]`): Array of available language codes.
- `language` (`string`): Current active language code.
- `addEventListener(event: 'languageChange' | 'missingRequestKeys', callback: Function): () => void`: Adds an event listener; returns a function to remove the listener.

---

## TranslationProvider

React context provider component that supplies the translation instance to descendant components.

### Props:

- `TranslationInstance`: The translation instance returned by `SetupReactTranslations`.
- `children`: React nodes to be wrapped by the provider.
- `components` (optional): Custom components map to be used within translations.

---

## Trans Component

Component for rendering translated strings that contain embedded HTML-like tags, replaced by React components.

### Props:

- `message` (`string`): The translated string with embedded tags.
- `components` (`ReactElement[] | Record<string, ReactElement>`, optional): Mapping of tag names to React elements to replace tags in the message.

### Behavior:

- Parses the `message` prop as HTML-like content.
- Replaces recognized tags with corresponding React components from `components` prop or provider.
- Unrecognized tags render as `<missing-translation-tag>` with the tag name.

---

## Example Usage

```tsx
import React from 'react';
import { SetupReactTranslations, TranslationProvider, useTranslation, Trans } from '@resourge/react-translations';

const { TranslationInstance, useTranslation } = SetupReactTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  translations: {
    greeting: {
      en: 'Hello, <strong>{name}</strong>!',
      fr: 'Bonjour, <strong>{name}</strong>!',
    }
  }
});

function Greeting({ name }: { name: string }) {
  const { T } = useTranslation();
  return <Trans message={T.greeting} components={{ strong: <strong /> }} />;
}

function App() {
  return (
    <TranslationProvider TranslationInstance={TranslationInstance}>
      <Greeting name="Alice" />
    </TranslationProvider>
  );
}

export default App;
````

---

## Additional Notes

* `@resourge/react-translations` depends on the core `@resourge/translations` for the translation engine.
* Supports dynamic language switching and event subscriptions.
* Provides React-friendly components and hooks for seamless integration.

---