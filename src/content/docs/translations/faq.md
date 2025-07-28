---
title: FAQ
description: Frequently asked questions about @resourge/react-translations and @resourge/vue-translations.
---

## @resourge/react-translations

**Q: What is @resourge/react-translations?**  
A: It is a React-specific package built on top of the core `@resourge/translations` library, providing React hooks and components to easily integrate translations in React apps.

---

**Q: How do I use translations inside React components?**  
A: Use the `useTranslation` hook to access the translations object (`T`) and language controls like `changeLanguage`.

---

**Q: How can I switch languages dynamically in React?**  
A: Call the `changeLanguage(lang)` function from the `useTranslation` hook to change the current language at runtime.

---

**Q: How do I provide the translation instance to my React app?**  
A: Wrap your component tree with the `TranslationProvider` component, passing the `TranslationInstance` created by `SetupReactTranslations`.

---

**Q: Does @resourge/react-translations support HTML in translations?**  
A: Yes. The `Trans` component lets you render translations with embedded HTML tags, replacing them with React components.

---

**Q: Can I listen for language change events in React?**  
A: Yes. Use `addEventListener('languageChange', callback)` from the `useTranslation` hook to listen to language change events.

---

## @resourge/vue-translations

**Q: What is @resourge/vue-translations?**  
A: A Vue 3 specific package built on the core `@resourge/translations` library, providing Vue composables and components for translation management.

---

**Q: How do I use translations inside Vue components?**  
A: Use the `useTranslation` composable to get access to the reactive translations object (`T`) and language controls.

---

**Q: Can I change languages dynamically in Vue?**  
A: Yes. Call `changeLanguage(lang)` from the `useTranslation` composable to switch languages at runtime.

---

**Q: How do I provide the translation instance in Vue apps?**  
A: Wrap your app (or part of it) with the `TranslationProvider` component, passing the `TranslationInstance` from `SetupVueTranslations`.

---

**Q: Does it support rendering HTML within translations?**  
A: Yes. The `Trans` component can parse translation strings containing HTML tags and replace them with Vue components.

---

**Q: Can I listen to language change events in Vue?**  
A: Yes. Use `addEventListener('languageChange', callback)` from the `useTranslation` composable.

---

## General

**Q: Are these packages compatible with the core @resourge/translations?**  
A: Yes. Both packages are built on top of `@resourge/translations` core library and extend its functionality for their respective frameworks.

---

**Q: Can I create custom plugins for these packages?**  
A: Yes. Both support custom plugins to extend translation behaviors such as language detection, loading strategies, or UI updates.

---

**Q: Do they support lazy loading of translations?**  
A: Yes. You can provide async loading logic in the configuration of the core `SetupTranslations` used inside these framework-specific packages.
