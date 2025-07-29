---
title: React Form
description: A powerful React hook library for building complex forms with ease, performance, and type safety
---

`@resourge/react-form` is a powerful and flexible React hook library designed to simplify building complex and dynamic forms with ease, while maintaining excellent performance and type safety.

## When to Use

Choose React Form when you need:

* Complex form structures, including nested and dynamic fields
* Custom validation logic tailored to your application
* High performance with minimal re-renders
* Strong TypeScript support for safer, predictable forms
* Compatibility with any UI component library

## Why React Form?

* ⚛️ **Declarative API**: Manage forms intuitively with hooks and plain JavaScript
* 🚀 **Minimal Re-renders**: Optimized to update only the parts of the form that change
* 🔧 **Flexible**: Works seamlessly with any UI framework or custom components
* 🛡️ **TypeScript Friendly**: Full typings to catch errors early and improve DX

## Installation

Install with NPM or Yarn:

```bash
npm install @resourge/react-form
# or
yarn add @resourge/react-form
```

## Quick Start Example

```tsx
import React from "react";
import { useForm } from "@resourge/react-form";

function MyForm() {
  const { form, handleSubmit, field, hasError, getErrors } = useForm({
    username: "",
    password: "",
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Form submitted:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...field("username")} placeholder="Username" />
      {hasError("username") && <span>{getErrors("username")[0]}</span>}

      <input {...field("password")} type="password" placeholder="Password" />
      {hasError("password") && <span>{getErrors("password")[0]}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```
