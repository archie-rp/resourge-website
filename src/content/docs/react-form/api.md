---
title: React Form API Reference
description: Full API documentation and examples for @resourge/react-form.
---

The `@resourge/react-form` package provides a type-safe, minimal-re-render, and flexible API to build complex forms in React.

---

## useForm

Manages form state, validation, and submission.

```tsx
import { useForm } from "@resourge/react-form";

const { form, field, handleSubmit, getErrors } = useForm({ email: "" });

const onSubmit = handleSubmit((data) => console.log(data));

return (
  <form onSubmit={onSubmit}>
    <input {...field("email")} placeholder="Email" />
    <span>{getErrors("email")[0]}</span>
    <button type="submit">Submit</button>
  </form>
);
````

### Parameters

* `initialState`: Object, function, or class representing initial form data.
* `options` (optional):

  * `onChange`: Called on any field change.
  * `onSubmit`: Called when form is valid and submitted.
  * `validate`: Returns validation errors.
  * `watch`: Reacts to specific field changes.
  * `validationType`: `"onSubmit" | "onTouch" | "always"`

### Returns

| Method / Property       | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `form`                  | Reactive state object. You can mutate it directly. |
| `field(key, options?)`  | Binds form state to an input field.                |
| `handleSubmit()`        | Validates and submits the form.                    |
| `hasError(key)`         | Returns `true` if field has an error.              |
| `getErrors(key)`        | Returns error messages for a field.                |
| `changeValue(key, val)` | Set field value manually.                          |
| `getValue(key)`         | Gets a specific value.                             |
| `hasTouch(key)`         | Checks if field was touched.                       |
| `isTouched`             | Checks if any field was touched.                   |
| `isValid`               | True if all fields pass validation.                |
| `reset()`               | Resets the form.                                   |
| `resetTouch()`          | Resets touch state.                                |
| `setError()`            | Manually sets errors.                              |
| `updateController()`    | Forces a `Controller` re-render.                   |
| `context`               | Required for context providers.                    |
| `errors`                | The full error object.                             |

---

## useFormSplitter

Used for deeply nested or segmented forms.
When you have a form with multiple sections or nested fields, `useFormSplitter` allows you to manage each section independently while still being part of the same form context.

This is particularly useful for large forms where you want to break down the form into smaller, manageable parts without losing the overall form state.

Example form class structure:
```tsx
class User {
  public profile: {
    firstName: string;
    lastName: string;
  };
  public address: {
    street: string;
    city: string;
  };
}
```

On the main form, you can use `useForm` to manage the entire user profile:

```tsx
import { useForm, FormProvider } from "@resourge/react-form";
const { context } = useForm(new User());
return (
  <FormProvider context={context}>´
    <ProfileSection />
    <AddressSection />
  </FormProvider>
);
```

Then, in a sub-form for the ProfileSection component, you can use `useFormSplitter` to manage just the profile fields:
```tsx
const { field, form } = useFormSplitter("profile");

return (
  <>
    <input {...field("firstName")} />
    <input {...field("lastName")} />
  </>
);
```

### Parameters

* `formFieldKey`: Field name that acts as root of the sub-form.

---

## useFormStorage

Same as `useForm`, but with storage persistence.

This hook allows you to save form state to `localStorage` or `sessionStorage`, making it easy to restore form data across sessions or page reloads.


```tsx
const { form, restoreFromStorage } = useFormStorage(
  { email: "" },
  {
    uniqueId: "login-form",
    storage: localStorage,
    version: "v1",
  }
);
```

### Extra options

| Option                        | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `uniqueId`                    | Storage key identifier                      |
| `storage`                     | `localStorage`, `sessionStorage`, or custom |
| `autoSyncWithStorage`         | Defaults to `true`                          |
| `shouldClearAfterSubmit`      | Clear on submit (`true` by default)         |
| `onLoading`, `onStorageError` | Lifecycle callbacks                         |
| `version`                     | Clear cache if version mismatches           |

### Class Support

```ts
@PreserveClass
class User {
  email = "";
  name = "";
}
```

Or:

We recommend registering classes to ensure proper serialization on the root of the application `index.js` or `App.tsx`.
```ts
import { registerClass } from "@resourge/react-form";
import User from "./models/User";

registerClass(User);
```

---

## FormProvider

Provides context for child components.

```tsx
import { FormProvider } from "@resourge/react-form";
import { useForm } from "@resourge/react-form";

const { context } = useForm({ username: "", password: "" });

<FormProvider context={context}>
  <MyFormFields />
</FormProvider>
```

---

## useFormContext

Hook to access context provided by `Form` or `FormProvider`.

```tsx
const context = useFormContext<FormData>();
```

---

## Controller

Component wrapper for controlled fields to avoid unnecessary renders.

```tsx
import { Controller } from "@resourge/react-form";

const { context, field } = useFormContext<FormData>();

<Controller name="username" context={context}>
  <input {...field("username")} />
</Controller>
```

---

## Error Options

Used with `getErrors`, `hasError`, etc.

| Option                   | Description               |
| ------------------------ | ------------------------- |
| `includeChildsIntoArray` | Include nested errors     |
| `unique`                 | Return unique errors only |

---

## handleSubmit

Signature for the form submission handler:

```ts
handleSubmit(
  onValid: (formData) => void,
  onInvalid?: (errors) => Record<string, string[]>
): (event) => Promise<any>
```

---

## Example

```tsx
import { useForm } from "@resourge/react-form";

const { form, field, handleSubmit, getErrors } = useForm({
  username: "",
  password: "",
});

const onSubmit = handleSubmit((data) => {
  console.log("Submitted:", data);
});

return (
  <form onSubmit={onSubmit}>
    <input {...field("username")} />
    <input {...field("password")} type="password" />
    <button type="submit">Login</button>
  </form>
);
```
---