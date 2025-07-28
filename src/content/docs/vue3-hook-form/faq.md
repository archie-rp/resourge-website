---
title: Vue 3 Form Hook FAQ
description: Frequently asked questions about @resourge/vue3-hook-form.
---

# FAQ

**Q: What is `vue3-hook-form`?**  
A: A lightweight Vue 3 composable to manage form state, validation, and submission easily.

**Q: How do I add validation?**  
A: Pass a validation function (e.g., using `@resourge/schema`) to `useForm` options.

**Q: Can I use nested form models?**  
A: Yes, nested models and schemas are fully supported.

**Q: How do I reset a form?**  
A: Use the `reset()` method. You can reset to initial or provide a new model.

**Q: How can I watch form changes?**  
A: Use the `watch(callback)` method to react to form data changes.

**Q: How do I handle form submission?**  
A: Use the `handleSubmit(onSubmit)` method to wrap your submission logic.

**Q: Can I set errors manually?**  
A: Yes, use `setError(errors)` to set validation errors programmatically.

**Q: Is TypeScript supported?**  
A: Yes, fully typed with support for typed form models.

---