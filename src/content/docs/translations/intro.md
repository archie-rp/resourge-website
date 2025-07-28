---
title: Translations Introduction
description: Core translation library and framework-specific integrations for React and Vue.
---


To simplify usage within popular frontend frameworks, we provide **framework-specific integration packages** built on top of the core:

## @resourge/react-translations

`@resourge/react-translations` builds on the core translations library to provide React-specific tools and components, such as:

- React hooks (`useTranslation`) for accessing translations and controlling language
- A `TranslationProvider` component for managing translation context in React apps
- A `Trans` component for rendering translated strings with embedded React elements

This package makes it easy to integrate translations into React applications while leveraging all features of the core library.

## @resourge/vue-translations

`@resourge/vue-translations` offers similar integration utilities tailored for Vue 3, including:

- Vue composition API functions (`useTranslation`) for translations access
- Vue components and providers for translations context management
- Seamless reactive language switching in Vue applications

It also builds on the core library to provide a smooth and idiomatic Vue developer experience.

---

# Summary

- Use `@resourge/translations` as the core multilingual engine — framework-independent
- Use `@resourge/react-translations` if you are working with React
- Use `@resourge/vue-translations` if you are working with Vue 3

Each framework package fully supports the features and plugins of the core library, providing idiomatic integration and tooling.

---
