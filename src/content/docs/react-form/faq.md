---
title: Vue 3 Form Hook FAQ
description: Frequently asked questions about @resourge/vue3-hook-form.
---

# FAQ

**Q: What is `vue3-hook-form`?**  
A: A lightweight, strongly-typed Vue 3 composable hook for managing form state, validation, and submission.

**Q: Why use `vue3-hook-form` over other Vue form libraries?**  
A: Minimal re-renders, full TypeScript support, UI-library agnostic, declarative API, and support for complex and nested forms.

**Q: Is it compatible with any UI framework?**  
A: Yes, works with any Vue 3 component library or custom components.

**Q: Does it support custom validation?**  
A: Yes, you can pass synchronous or asynchronous validation functions, commonly with `@resourge/schema`.

**Q: Can I create dynamic or nested forms?**  
A: Yes, it fully supports dynamic, multi-step, and deeply nested forms.

**Q: How do I check for validation errors?**  
A: Use the `hasError(fieldName)` and `getErrors(fieldName)` methods from the form instance.

**Q: How do I reset the form?**  
A: Call the `reset()` method optionally with new default values.

**Q: Can I watch form data changes?**  
A: Yes, use the `watch(callback)` method to react to form updates.

**Q: Do I need a global provider or context?**  
A: No, form state is managed locally inside the composable.

**Q: Is TypeScript supported?**  
A: Yes, the hook is fully typed for strong type safety.

**Q: How can I contribute?**  
A: See the [`CONTRIBUTING.md`](https://github.com/resourge/vue3-hook-form/blob/main/CONTRIBUTING.md) file in the repo for guidelines.
