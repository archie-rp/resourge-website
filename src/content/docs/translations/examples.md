---
title: Translations Examples
description: Practical examples for using @resourge/translations.
---

## 1. Basic Setup with Static Translations

Define static translations for multiple languages and get text based on the current language.

```typescript
import { SetupTranslations } from '@resourge/translations';

const translations = SetupTranslations({
  langs: ['en', 'fr', 'es'],
  defaultLanguage: 'en',
  translations: {
    greeting: {
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
  }
});

// Prints the greeting in the current language (default is 'en')
console.log(translations.t('greeting')); // Outputs: Hello
````

---

## 2. Async Loading of Translations

Load translations asynchronously, useful for dynamic translations fetched from an API.

```typescript
const translations = SetupTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  load: {
    request: async () => {
      const response = await fetch('/api/translations');
      return await response.json();
    },
    // Expected structure of translations to maintain typing and references
    structure: {
      greeting: 'Hello',
      goodbye: 'Goodbye',
    }
  }
});
```

---

## 3. Changing Language Dynamically

Change the language at runtime and get translations in the selected language.

```typescript
await translations.changeLanguage('fr');
console.log(translations.t('greeting')); // Outputs: Bonjour
```

---

## 4. Using Plugins

### 4.1 htmlLanguage Plugin

A plugin that can, for example, automatically change the `<html>` element’s `lang` attribute.

```typescript
import { htmlLanguage } from '@resourge/translations';

const translations = SetupTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  plugins: [htmlLanguage()]
});
```

### 4.2 languageLocalStorage Plugin

A plugin to save the selected language to localStorage, persisting user preference.

```typescript
import { languageLocalStorage } from '@resourge/translations';

const translations = SetupTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  plugins: [languageLocalStorage()]
});
```

---

## 5. Custom Translation Function Example: Gender

Example of conditional translation based on user gender.

```typescript
import { gender, SetupTranslations } from '@resourge/translations';

const translations = SetupTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  translations: {
    welcomeMessage: gender({
      male: { en: 'Welcome, sir!', fr: 'Bienvenue, monsieur!' },
      female: { en: 'Welcome, ma’am!', fr: 'Bienvenue, madame!' }
    })
  }
});

// Use the gender parameter to choose the correct translation
console.log(translations.T.welcomeMessage({ gender: 'female' })); // Outputs: Bienvenue, madame!
```

---

## 6. Creating Your Own Custom Translation Function

Shows how to create a custom translation function for different greetings based on time of day.

```typescript
import { CustomMethods, SetupTranslations } from '@resourge/translations';

// Define a custom method for greeting based on time of day
const timeOfDayGreetings = CustomMethods.add<
  'timeOfDay',
  { morning: string; afternoon: string; evening: string; night: string }
>(
  'timeOfDay',
  (value, params) => {
    return value[params.timeOfDay];
  }
);

const translations = SetupTranslations({
  langs: ['en', 'fr'],
  defaultLanguage: 'en',
  translations: {
    greeting: timeOfDayGreetings({
      morning: { en: 'Good morning', fr: 'Bonjour' },
      afternoon: { en: 'Good afternoon', fr: 'Bon après-midi' },
      evening: { en: 'Good evening', fr: 'Bonsoir' },
      night: { en: 'Good night', fr: 'Bonne nuit' },
    }),
  }
});

// Use the timeOfDay parameter to select the appropriate greeting
console.log(translations.T.greeting({ timeOfDay: 'morning' })); // Outputs: Good morning
```

---