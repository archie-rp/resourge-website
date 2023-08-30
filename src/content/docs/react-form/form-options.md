---
title: "Form Options"
---

```tsx
// object
const { ... } = useForm(
  ...,
  {
	// Not required
	validate: (form, changedKeys) => [],
	onErrors: (errors) => errors,
	validateDefault: true,
	onlyOnTouchDefault: true,
	onChange: (formState) => { },
	onSubmit: (formState) => { },
	onTouch: (key, value, previousValue) => { }
  }
)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| **validate** | `(form, changedKeys) => void \| ValidationErrors \| Promise<void> \| Promise<ValidationErrors>` | Method to validate form. Usually with some kind of validator. (like yup, zod, joi, @resourge/schema(Recommended), etc) |
| **onErrors** | `(errors: any \| any[]) => FormErrors` | Method to treat errors. |
| **validateDefault** | `boolean` | Set's global validation. true by default |
| **onlyOnTouchDefault** | `boolean` | Set's globally to only show errors on camp touch. True by default |
| **onChange** | `(formState) => void` | Called on every form change |
| **onSubmit** | `(formState) => void` | Called on form submission |
| **onTouch** | `(key, value, previousValue) => void` | Method called every time a value is changed |