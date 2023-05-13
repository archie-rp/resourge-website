---
title: 'Controller'
---

For more complex and deep forms, where render's can impact performance 
(like list's with multiple elements) `Controller` serves to minimize 
the impact a render can have on react, by only updating children if key `name`
is `touched`. 

```jsx
import React from 'react';
import { Controller, useFormField, useForm } from '@resourge/react-form'

function CustomElement({ value }: { value: number }) {
  const { 
    field
  } = useController()

  return (
    <div>
      { value } <button
        onClick={() => {
          field.onChange && field.onChange(Math.random())
        }}
      >
        Update with random value
      </button>
    </div>
  )
}

export function App() {
  const {
    context,
    form
  } = useForm({
    list: Array.from({ length: 1000 }).map((_, index) => index + 1)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
        form.list.map((value, index) => (
          <Controller
            key={`${index}`}
            name={`list[${index}]`}
            context={context}
          >
            <CustomElement value={value} />
          </Controller>
        ))
      }
    </div>
  )
}
```