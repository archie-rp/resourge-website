---
title: Vue 3 Form Hook Examples
description: Practical examples for using @resourge/vue3-hook-form in Vue 3 applications.
---

This page showcases typical usage patterns and examples to help you get started quickly with `useForm`.

---

## Basic Login Form

```ts
import { useForm } from '@resourge/vue3-hook-form';
import { object, string } from '@resourge/schema';

class LoginFormModel {
  username = '';
  password = '';
}

const schema = object<LoginFormModel>({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
});

export function useLoginForm() {
  return useForm(new LoginFormModel(), {
    validate: (form) => schema.validate(form),
    validateDefault: true,
  });
}
````

---

## Using Form in a Vue Component

```vue
<template>
  <form @submit.prevent="onSubmit">
    <label>
      Username
      <input v-model="form.username" type="text" />
      <span class="error" v-if="hasError('username')">{{ getErrors('username')[0] }}</span>
    </label>

    <label>
      Password
      <input v-model="form.password" type="password" />
      <span class="error" v-if="hasError('password')">{{ getErrors('password')[0] }}</span>
    </label>

    <button type="submit" :disabled="!isValid">Login</button>
  </form>
</template>

<script lang="ts">
import { useLoginForm } from './useLoginForm';

export default {
  setup() {
    const { form, handleSubmit, getErrors, hasError, isValid } = useLoginForm();

    const onSubmit = handleSubmit(async () => {
      alert(`Logging in as ${form.username}`);
    });

    return { form, onSubmit, getErrors, hasError, isValid };
  },
};
</script>
```

---

## Nested Form Example

```ts
import { useForm } from '@resourge/vue3-hook-form';
import { object, string } from '@resourge/schema';

class AddressModel {
  street = '';
  city = '';
  postalCode = '';
}

class UserProfileModel {
  firstName = '';
  lastName = '';
  address = new AddressModel();
}

const addressSchema = object<AddressModel>({
  street: string().required('Street is required'),
  city: string().required('City is required'),
  postalCode: string().required('Postal code is required'),
});

const userSchema = object<UserProfileModel>({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  address: addressSchema,
});

export function useUserProfileForm() {
  return useForm(new UserProfileModel(), {
    validate: (form) => userSchema.validate(form),
    validateDefault: true,
  });
}
```

---

## Watching Form Changes

```ts
const { form, watch } = useForm(new LoginFormModel());

watch((newForm) => {
  console.log('Form changed:', newForm);
});
```

---

## Manually Updating a Field

```ts
const { changeValue, getValue } = useForm(new LoginFormModel());

changeValue('username', 'newUsername');
console.log(getValue('username')); // "newUsername"
```

---

## Resetting the Form

```ts
const { reset } = useForm(new LoginFormModel());

reset(); // resets to initial state

// Or reset to a new model instance:
reset(new LoginFormModel());
```
