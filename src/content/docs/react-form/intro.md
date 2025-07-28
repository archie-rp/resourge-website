---
title: React Form
description: Introduction to React Form.
---

Welcome to React Form!  
See below for when and why to use this package, installation, and a quick start.

## When to use

Use React Form for complex or dynamic forms, nested fields, custom validation, and when you want type safety and performance in React.

## Why use this?

- Declarative API
- Minimal re-renders
- Works with any UI library
- TypeScript support

## Installation

```bash
npm install @resourge/react-form
# or
yarn add @resourge/react-form
```

## Quick Start

```js
import { useForm } from "@resourge/react-form";

const MyForm = () => {
  const { form, handleSubmit, field, hasError, getErrors } = useForm({
    username: "",
    password: "",
  });

  const onSubmit = handleSubmit((data) => console.log("Form Submitted:", data));

  return (
    <form onSubmit={onSubmit}>
      <input {...field("username")} placeholder="Username" />
      {hasError("username") && <span>{getErrors("username")[0]}</span>}

      <input {...field("password")} placeholder="Password" type="password" />
      {hasError("password") && <span>{getErrors("password")[0]}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};
```