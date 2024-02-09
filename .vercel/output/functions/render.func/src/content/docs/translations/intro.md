---
title: "Quick Start"
---

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @resourge/translations
```

or NPM:

```sh
npm install @resourge/translations --save
```

## Configuration

### Vue 3 Configuration

To set up translations for Vue, import the necessary functions and types from @resourge/vue-translations and use the SetupVueTranslations function:

```jsx
import { SetupVueTranslations, languageLocalStorage, navigatorLanguageDetector } from '@resourge/vue-translations';

const { TranslationInstance, useTranslation } = SetupVueTranslations({
  langs: ['pt', 'en', 'es'],
  defaultLanguage: 'pt',
  plugins: [
    navigatorLanguageDetector({
      onLanguage: (language) => language.split('-')[0]
    }),
    languageLocalStorage()
  ],
  translations: {
    global: {
      hello: { pt: 'Olá', en: 'Hello', es: 'Ola' }
    }
  }
});

export { TranslationInstance, useTranslation };

```

### React Configuration

To set up translations for React, import the necessary functions and types from @resourge/react-translations and use the SetupReactTranslations function:

```jsx
import { SetupReactTranslations, languageLocalStorage, navigatorLanguageDetector } from '@resourge/react-translations';

const { TranslationInstance, useTranslation } = SetupReactTranslations({
  langs: ['pt', 'en', 'es'],
  defaultLanguage: 'pt',
  plugins: [
    navigatorLanguageDetector({
      onLanguage: (language) => language.split('-')[0]
    }),
    languageLocalStorage()
  ],
  translations: {
    global: {
      hello: { pt: 'Olá', en: 'Hello', es: 'Ola' }
    }
  }
});

export { TranslationInstance, useTranslation };

```

## Overview

The `useTranslation` hook provided by the `@resourge/translations` library offers various functionalities to simplify translation management in your Vue.js or React applications. This hook enables you to access translations, change the current language, and retrieve information about the available languages.

## Usage useTranslation

To use the `useTranslation` hook, you need to wrap your application with the `TranslationProvider` context. Here's an example of how to do it in a Vue.js application:

### Vue.js Example

1. Import the necessary modules and define the `TranslationInstance`:

```vue
<script lang="ts" setup>
import { TranslationProvider } from '@resourge/vue-translations';
import { TranslationInstance } from './shared/translations/Translations';
</script>
```
2. Wrap your application's root component with the TranslationProvider:

```vue
<template>
  <Suspense>
    <TranslationProvider :TranslationInstance="(TranslationInstance as any)">
      <RouterView />
    </TranslationProvider>
  </Suspense>
</template>

```
In this example, the `TranslationInstance` is passed as a prop to the `TranslationProvider` component.

## React Example

1. Import the necessary modules and define the TranslationInstance:

```javascript
import { TranslationProvider } from '@resourge/react-translations';
import { TranslationInstance } from './shared/translations/Translations';
```

Wrap your application's root component with the `TranslationProvider`:

```tsx
<React.Suspense>
  <TranslationProvider TranslationInstance={TranslationInstance}>
    <RouterView />
  </TranslationProvider>
</React.Suspense>
```

In this example, the `TranslationInstance` is passed as a prop to the `TranslationProvider` component.

After wrapping your application with the `TranslationProvider`, you can use the `useTranslation` hook to access the `translation` functionalities as described in the previous section.

**Make sure to replace the `TranslationInstance` import and usage with the actual implementation details specific to your application.**

## Usage in component

In your component, you can use the useTranslation hook to access the translation functionality:

```jsx
import React from 'react';
import { useTranslation } from './translations';  // the file created for the instance above configured

export default function MyComponent() {
  const { T, changeLanguage } = useTranslation();

  return (
    <div>
      <div>{T.global.hello}</div>
      <button onClick={() => changeLanguage('en')}>Change Language to English</button>
    </div>
  );
}

```

The `T` object provides access to the translations defined in the `global` namespace. You can access specific translations using dot notation (`T.global.hello` in the example above).

## Known Bugs

- Let's us know if any <a href="https://github.com/resourge/translations/issues">here</a>.
