---
title: React Form Examples
description: Practical usage examples for @resourge/react-form.
---

Explore real-world examples of how to use the `@resourge/react-form` package in different scenarios.

---

## Basic Form Example

A simple login form with validation.

```tsx
import { useForm } from "@resourge/react-form";

export default function LoginForm() {
  const { field, handleSubmit, hasError, getErrors } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Login Data:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...field("email")} placeholder="Email" />
      {hasError("email") && <span>{getErrors("email")[0]}</span>}

      <input {...field("password")} placeholder="Password" type="password" />
      {hasError("password") && <span>{getErrors("password")[0]}</span>}

      <button type="submit">Login</button>
    </form>
  );
}
````

---

## Nested Form Example

Support for deeply nested fields.

```tsx
const { field } = useForm({
  user: {
    profile: {
      name: "",
      age: 0,
    },
  },
});

<input {...field("user.profile.name")} />
<input type="number" {...field("user.profile.age")} />
```

---

## Custom Validation Example

Use the `validate` option for custom validation logic.

```tsx
const { handleSubmit } = useForm(
  {
    password: "",
    confirmPassword: "",
  },
  {
    validate: (form) => {
      const errors = {};
      if (form.password !== form.confirmPassword) {
        errors.confirmPassword = ["Passwords do not match"];
      }
      return errors;
    },
  }
);
```
---

## Using Controller for Performance

Wrap inputs with `Controller` to avoid unnecessary re-renders.

```tsx
import { Controller, useForm, FormProvider } from "@resourge/react-form";

const { context } = useForm({ name: "" });

<FormProvider context={context}>
  <Controller name="name" context={context}>
    <input {...field("name")} />
  </Controller>
</FormProvider>;
```

---

## Multi-Step Form with useFormSplitter

Break forms into separate logical steps or components.

```tsx
const { form, context } = useForm({
  personal: { name: "", email: "" },
  address: { city: "", country: "" },
});

const PersonalStep = () => {
  const { field } = useFormSplitter("personal");
  return (
    <>
      <input {...field("name")} placeholder="Name" />
      <input {...field("email")} placeholder="Email" />
    </>
  );
};

const AddressStep = () => {
  const { field } = useFormSplitter("address");
  return (
    <>
      <input {...field("city")} placeholder="City" />
      <input {...field("country")} placeholder="Country" />
    </>
  );
};

<FormProvider context={context}>
  <PersonalStep />
  <AddressStep />
</FormProvider>;
```

---

## Persisting Data with useFormStorage

Preserve form state between sessions using `localStorage`.

```tsx
const { field, handleSubmit } = useFormStorage(
  { email: "" },
  {
    storage: localStorage,
    uniqueId: "contact-form",
    autoSyncWithStorage: true,
  }
);
```

---

## Resetting the Form

Manually reset form values.

```tsx
const { reset } = useForm({
  email: "",
  password: "",
});
<button type="button" onClick={() => reset()}>
  Reset
</button>
```

---

## Setting Errors Manually

Set field-level errors programmatically.

```tsx
const { setError } = useForm({
  email: "",
});
setError([{ path: "email", errors: ["Email is required"] }]);
```

---

## Accessing Form Values
You can access form values, touched state, and validity directly from the form context:

```tsx
const { getValue, hasTouch, isValid } = useForm({
  email: "",
  password: "",
});
const email = getValue("email");
const touched = hasTouch("email");
const isFormValid = isValid;
```

---