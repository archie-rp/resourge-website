---
title: "Quick Start"
---

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @resourge/react-form
```

or NPM:

```sh
npm install @resourge/react-form --save
```

## Usage

The `useForm` hook is necessary to create forms. It takes in `formData` and `formOptions` as parameters and returns an object containing the `form state` and the form actions.

```jsx
const {
  form, // Form Data
  touches, isTouched, // Form touches
  errors, isValid, // Form validation
  context, // Context
  triggerChange, reset, merge,
  handleSubmit, field,
  onChange, getValue, changeValue, changeValue, 
  resetTouch,
  getErrors, setError, hasError, 
  watch,
  undo, redo
} = useForm(formData, formOptions);

```

Note: If you are using the `@resourge/schema` package or your own schema, you don't need to perform any additional configuration for error setup.

Here's an example of setting up error conversion using a different schema:


```jsx
import { setDefaultOnError } from '@resourge/react-form';
import * as yup from 'yup';

setDefaultOnError((errors) => {
  // Customize errors to fit the model [{ path, errors }]
  const formErrors = [];

  errors.inner.forEach((error) => {
    const path = error.path;
    const message = error.message;
    formErrors.push({ path, errors: [message] });
  });

  return formErrors;
});

// Set up Yup validation
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  // Define other form fields and validation rules
});


export default function Form() {
  const { 
    isValid,
    field, 
    handleSubmit 
  } = useForm(
    {
      name: 'Rimuru' 
      // Initialize form data based on the schema
    },
    {
      validationSchema: schema
      // Pass the schema to formOptions
    }
  );

  const onSubmit = handleSubmit((form) => {
    // Handle form submission
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...field('name')} />
      <span>{isValid ? "Valid" : "Invalid"} Form</span>
      <button type="submit">Save</button>
    </form>
  );
}

```

## Quickstart

For a quickstart example, you can follow the code below:

```jsx
import React from 'react';
import { useForm } from '@resourge/react-form';

export default function Form() {
  const { 
    isValid,
    field, 
    handleSubmit 
  } = useForm({
    name: 'Rimuru' 
  });

  const onSubmit = handleSubmit((form) => {
    // Handle form submission
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...field('name')} />
      <span>{isValid ? "Valid" : "Invalid"} Form</span>
      <button type="submit">Save</button>
    </form>
  );
}

```

**Note: The usage of `<form></form>` as a wrapper is optional.**