---
title: Vue 3 Form Hook API Reference
description: Comprehensive API documentation for the @resourge/vue3-hook-form package.
--------------------------------------------------------------------------------------

## `useForm`

Initializes a reactive form state with validation logic.

```ts
import { useForm } from '@resourge/vue3-hook-form';

const { form, handleSubmit, getErrors } = useForm(modelInstance, options);
```

### Parameters

* `model`: A class instance representing the form's default state.
* `options`: Optional settings for validation.

  * `validate`: `(form) => ValidationResult` — custom validation logic using @resourge/schema.
  * `validateDefault`: `boolean` — if true, runs validation immediately after creation.

### Returns

An object with:

* `form`: reactive model instance.
* `errors`: current error state.
* `isValid`: boolean indicating form validity.
* `handleSubmit`: function to handle form submission.
* `getErrors(key)`: returns validation messages for a given field.
* `changeValue(key, value)`: updates a form field.
* `getValue(key)`: gets the current value of a form field.
* `hasError(key)`: returns whether the field has an error.
* `reset(newForm?)`: resets the form to a new instance.
* `setError(error)`: sets one or more validation errors.
* `onChange(key, callback)`: watch a specific field.
* `watch(callback)`: watch the entire form state.

## Example

```ts
export class LoginFormModel {
  username = '';
  password = '';
}

const schema = object<LoginFormModel>({
  username: string().required('Username is required'),
  password: string().required('Password is required')
});

const useLoginForm = () =>
  useForm(new LoginFormModel(), {
    validate: (form) => schema.validate(form),
    validateDefault: true
  });
```

## Validation Integration

The `validate` function allows you to connect to external validation systems, like `@resourge/schema`. The return value should be an object of type:

```ts
interface ValidationResult {
  valid: boolean;
  errors?: Record<string, string[]>;
}
```

## Nested Model Support

Nested class models can be used and validated recursively.

```ts
export class AddressModel {
  street = '';
  city = '';
}

export class UserProfileModel {
  name = '';
  address = new AddressModel();
}

const schema = object<UserProfileModel>({
  name: string().required('Required'),
  address: object<AddressModel>({
    street: string().required(),
    city: string().required()
  })
});

useForm(new UserProfileModel(), { validate: form => schema.validate(form) });
```