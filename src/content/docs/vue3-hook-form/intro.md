---
title: Vue 3 Form Hook
description: A powerful form management and validation hook for Vue 3, fully typed and schema-friendly.
---

`@resourge/vue3-hook-form` provides a reactive and type-safe form handling utility for Vue 3 applications. Built to integrate seamlessly with `@resourge/schema`, it simplifies form state, validation, and complex form workflows.

---

## Features

- ✅ Fully reactive form state
- 📦 Integration with `@resourge/schema` for schema-based validation
- 🧠 TypeScript-first design with model inference
- 🔍 Field-level validation and error tracking
- 🔄 Form resets, nested data, multi-step and wizard support
- 💬 Human-friendly validation messages
- 🔧 Flexible architecture for custom form logic

---

## Installation

```bash
npm install @resourge/vue3-hook-form
# or
yarn add @resourge/vue3-hook-form
````

---

## Basic Usage

```ts
import { useForm } from '@resourge/vue3-hook-form';
import { object, string } from '@resourge/schema';

class LoginModel {
  username = '';
  password = '';

  toModel() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}

const schema = object<LoginModel>({
  username: string().notNullable().required('Username is required'),
  password: string().notNullable().required('Password is required')
});

export const useLoginForm = () => {
  return useForm<LoginModel>(new LoginModel(), {
    validate: (form) => schema.validate(form),
    validateDefault: true
  });
};
```

---

## Vue Component Example

```vue
<template>
  <form @submit.prevent="onSubmit">
    <FormControl :label="'Username'" :errors="getErrors('username')">
      <Input v-model="form.username" />
    </FormControl>

    <FormControl :label="'Password'" :errors="getErrors('password')">
      <Input v-model="form.password" type="password" />
    </FormControl>

    <Button type="submit" label="Login" />
  </form>
</template>

<script lang="ts" setup>
import { useLoginForm } from '@/composables/useLoginForm';

const { form, handleSubmit, getErrors } = useLoginForm();

const onSubmit = handleSubmit(() => {
  // Submit logic
});
</script>
```

---

## API: `useForm`

The `useForm<T>()` hook returns a form controller object that includes:

| Property/Method         | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `form`                  | Reactive form model (`ref`)                             |
| `errors`                | All validation errors (`ref<Record<string, string[]>>`) |
| `changeValue(key, val)` | Updates a single field's value                          |
| `getValue(key)`         | Returns current field value                             |
| `getErrors(key)`        | Returns validation errors for a field                   |
| `hasError(key)`         | Checks if a field has an error                          |
| `setError(error)`       | Manually set an error (or multiple)                     |
| `reset(form)`           | Reset form to a new instance                            |
| `watch(callback)`       | Watch entire form state for changes                     |
| `handleSubmit(cb)`      | Wraps your `onSubmit` logic with validation             |
| `isValid`               | Boolean indicating form validity                        |

---

## Nested Forms Support

Nested schemas and models are fully supported:

```ts
class Address {
  street = '';
  city = '';
  postalCode = '';
}

class UserProfile {
  firstName = '';
  lastName = '';
  address = new Address();
}

const addressSchema = object<Address>({
  street: string().required(),
  city: string().required(),
  postalCode: string().required()
});

const profileSchema = object<UserProfile>({
  firstName: string().required(),
  lastName: string().required(),
  address: addressSchema
});

export const useUserProfileForm = () =>
  useForm<UserProfile>(new UserProfile(), {
    validate: (form) => profileSchema.validate(form),
    validateDefault: true
  });
```
---

