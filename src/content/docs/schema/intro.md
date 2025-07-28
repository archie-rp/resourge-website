---
title: Schemas
description: Enhance your data validation with @resourge/schema — fast, type-safe, and highly extensible validation library.
---

`@resourge/schema` is a high-performance validation library for JavaScript and TypeScript, designed to validate, transform, and enforce type safety across structured data. Whether you're building frontend forms, backend APIs, or CLI tools, this library offers full control and flexibility.

---

## Features

- ✅ Declarative schema definitions
- 🧠 Intelligent TypeScript inference
- ⚡️ Extremely fast and memory-efficient
- 🧪 Built-in and custom validation rules
- 🧰 `onlyOnTouch` validation for optimized performance
- 🌍 Postal code and phone number validation by country
- 🧱 Modular and composable types: `object`, `string`, `number`, `array`, `date`, `boolean`
- 📦 Compatible with Node, browser, and Deno

---

## Installation

```bash
npm install @resourge/schema
# or
yarn add @resourge/schema
````

---

## Basic Usage

```ts
import { object, string, number } from '@resourge/schema';

const userSchema = object({
  name: string().min(3).required(),
  age: number().min(0).max(120),
  email: string().email().required()
}).compile();

const result = userSchema.validate({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
});
```

---

## Nested Schemas Example

```ts
import { object, string } from '@resourge/schema';

const addressSchema = object({
  street: string().required(),
  city: string().required(),
  zip: string().required()
});

const userSchema = object({
  name: string().required(),
  address: addressSchema
}).compile();

const result = userSchema.validate({
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Lisbon',
    zip: '1000-001'
  }
});
```

---

## Schema Types

`@resourge/schema` provides the following core schema constructors:

* [`object`](./api.md#object)
* [`string`](./api.md#string)
* [`number`](./api.md#number)
* [`array`](./api.md#array)
* [`date`](./api.md#date)
* [`boolean`](./api.md#boolean)

Each type supports chainable validation rules and custom messages.

---

## Performance

Benchmarked against popular libraries:

| Library          | Ops/sec (simple) | Ops/sec (heavy) |
| ---------------- | ---------------- | --------------- |
| @resourge/schema | 4.5M–11.6M       | 964–2,550       |
| Fast Validator   | \~1.5M           | \~211           |
| Joi              | \~200k           | \~28            |
| Zod              | \~53k            | \~24            |
| Yup              | \~12k            | \~15            |

*(Real-world benchmarks vary by structure and machine.)*

---