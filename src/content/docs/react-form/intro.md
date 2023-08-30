---
title: "Quick Start"
---

# React-Form

`react-form` is a simple and basic controlled hook form. Aiming to create forms with minimal effort.

Visit our website [resourge-react-form.netlify.app](https://resourge-react-form.netlify.app)

## Features

- Controlled form.
- Possibility of using `class` as default form data (see more [Form Data](#form-data)).
- No native validation. The entire validation is up to the developer.
- Simple to use with existing HTML form inputs and 3rd-party UI libraries.
- Build with typescript.
- Easy to use in react and react-native.

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @resourge/react-form
```

or NPM:

```sh
npm install @resourge/react-form --save
```



## Quickstart

For a quickstart example, you can follow the code below:

```jsx
import { useForm } from '@resourge/react-form'

function App() {
  const {
    form,
    isTouched,
    isValid,
    field,
    handleSubmit
  } = useForm(
    {
      productName: ''
    },
    {
      // Form validation
      // @resourge/schema recommended use
      validate: () => []
    }
  )
  
  const onSubmit = handleSubmit((form) => {
    console.log('form', form)
    // Send it to backend
  })
  
  return (
    <div>
      <button 
        onClick={onSubmit}
      >
        Submit
      </button>
      <div>
        <label>
          Product Name
        </label>
        <input { ...field('productName')} />
      </div>
    </div>
  )
}
```

**Note: The usage of `<form></form>` as a wrapper is optional.**