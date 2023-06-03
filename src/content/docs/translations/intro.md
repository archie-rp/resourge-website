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

## Usage

In your component, you can use the useTranslation hook to access the translation functionality:

```jsx
import React from 'react';
import { useTranslation } from '@resourge/translations';

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
