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

## Setup Errors

To simplify the process of converting errors from validation packages like joi, yup, zod, ajv, etc to `useForm` lookalike errors, use `setDefaultOnError`.
You only need to setup this on the initialization of the application in this case App.tsx

`setDefaultOnError` will, by default (unless `onError` from [Form Options](#form-options) is set), customize the errors to fit `useForm` errors

```jsx
// In App.tsx
import { setDefaultOnError } from '@resourge/react-form'

setDefaultOnError((errors: any) => {
  // Customize errors to fit the model 
  // [{ path, errors }]
  return []
});
```

_Note: We plan to add more default validations in the future. If you have one and want to share, please do and contribute._

For yup validation, `setFormYupValidation`

```jsx
// In App.tsx
import { setFormYupValidation } from '@resourge/react-form'

setFormYupValidation();
```

## Usage

```jsx
const {
  form, // Form Data
  touches, isTouched, // Form touches
  errors, isValid, // Form validation
  context, // Context
  triggerChange, reset, merge,
  handleSubmit, field,
  onChange, getValue, changeValue,changeValue, 
  resetTouch,
  getErrors, setError, hasError, 
  watch,
  undo, redo
} = useForm(formData, formOptions)
```

`useForm` is the hook necessary to create forms. Using [formData](#form-data) and [formOptions](#form-options), the hook returns an array containing the [form state](#form-state-and-actions) and the [form actions](#form-state-and-actions).

## Quickstart

See more at [Errors](#errors)

```jsx
import React, { useState } from 'react';
import { useForm } from '@resourge/react-form';

export default function Form() {
  const { 
    isValid,
    field, 
    handleSubmit 
  } = useForm(
    { 
      name: 'Rimuru' 
    }
  )

  const onSubmit = handleSubmit((form) => {
    ....
  })

  return (
    <form onSubmit={onSubmit}>
      <input { ...field('name') }/>
      <span>
      {
        isValid ? "Valid" : "Invalid" 
      } Form
      </span>
      <button type="submit">
        Save
      </button>
    </form>
  );
}
```

. 

_Note: `<form></form>` the usage of form as wrapper is optional._



## Known Bugs

- Let's us know if any <a href="https://github.com/resourge/react-form/issues">here</a>.
