---
title: "Form Provider and useFormContext"
---

Instead of inserting props in child components, FormProvider will create a context and a hook to access the form anywhere inside.

```jsx
import React from 'react';
import { FormProvider, useForm, useFormContext } from '@resourge/react-form'

export function CustomElement() {
  const { form, isValid, field } = useFormContext()

  return (
    <>
      <span>
      {
        isValid ? "Valid" : "Invalid" 
      } CustomElement
      </span>
      <input {...field('customElement')} />
    </>
  )
}

export function App() {
  const {
    context
  } = useForm( ... )

  return (
    <FormProvider context={context}>
      <CustomElement />
      ...
    </FormProvider>
  )
}
```