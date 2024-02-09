---
title: "Methods"
---
Here's the complete documentation with examples for each method:

### `changeValue`

Updates the value of a specific field in the form.

```typescript
const { changeValue } = useForm();

changeValue('username', 'newUsername');
```

### `errors`

An object containing validation errors for the form fields.

```typescript
const { errors } = useForm();

console.log(errors);
```

### `field`

Options and configurations for the form fields.

```typescript
const { field } = useForm();

console.log(field);
```

### `form`

Representation of the current state of the form data.

```typescript
const { form } = useForm();

console.log(form);
```

### `getErrors`

Get the validation errors for a specific field in the form.

```typescript
const { getErrors } = useForm();

const errors = getErrors('username');
```

### `getIsDirtyField`

Checks if a specific field in the form has been modified.

```typescript
const { getIsDirtyField } = useForm();

const isUsernameDirty = getIsDirtyField('username');
```

### `getValue`

Get the current value of a specific field in the form.

```typescript
const { getValue } = useForm();

const usernameValue = getValue('username');
```

### `handleSubmit`

Handles form submission.

```typescript
const { handleSubmit } = useForm();

const onSubmit = handleSubmit((form) => {
  // Your form submission logic here
});
```

### `hasError`

Checks if a specific field in the form has validation errors.

```typescript
const { hasError } = useForm();

const hasErrorUsername = hasError('username');
```

### `isDirty`

Indicates whether the form has been modified.

```typescript
const { isDirty } = useForm();

console.log(isDirty.value);
```

### `isValid`

Indicates whether the form is currently in a valid state.

```typescript
const { isValid } = useForm();

console.log(isValid);
```

### `onChange`

Attaches an event listener to a specific form field.

```typescript
const { onChange } = useForm();

const handleChange = onChange('username');
```

### `reset`

Resets the form to a specified state.

```typescript
const { reset } = useForm();

reset({ username: '', password: '' });
```

### `resetIsDirty`

Resets the dirty state of the form.

```typescript
const { resetIsDirty } = useForm();

resetIsDirty();
```

### `setError`

Sets a validation error for the form or a specific field.

```typescript
const { setError } = useForm();

setError({ error: 'Invalid username', path: 'username' });
```

### `watch`

Registers a callback function to watch for changes in the form's state.

```typescript
const { watch } = useForm();

watch((changedKeys) => {
  console.log('Changed keys:', changedKeys);
});
```