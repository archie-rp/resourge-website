---
title: 'Controller'
---

For more complex and deep forms, where render's can impact performance 
(like list's with multiple elements) `Controller` serves to minimize 
the impact a render can have on react, by only updating children if prop `name`
is `touched` by the form. 

_Note: Is mandatory to use useController inside components inside a Controller. Serves to maintain performance benefits._

```jsx
import React from 'react';
import { Controller, useController, useForm } from '@resourge/react-form'

function CustomElement({ value }: { value: number }) {
  const { 
    onChange
  } = useController()

  return (
    <div>
      { value } <button
        onClick={() => {
          onChange && onChange(Math.random())
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
