---
title: Schemas API Reference
description: Full API documentation and examples for @resourge/schema.
---

This page covers the main API functions available in `@resourge/schema`, including schema constructors, methods like `compile`, `validate`, and utilities.

---

## object

Creates a schema for validating JavaScript objects.

```ts
import { object, string, number } from '@resourge/schema';

const userSchema = object({
  name: string().required("Name is required"),
  age: number().min(18, "Must be at least 18"),
}).compile();
````

### Parameters

* `schemas: Record<string, BaseSchema>` – Object shape describing each field's validation.

---

## string

Creates a schema for validating string values.

```ts
import { string } from '@resourge/schema';

const nameSchema = string()
  .min(3, "Minimum 3 characters")
  .max(20, "Maximum 20 characters")
  .pattern(/^[a-zA-Z]+$/, "Only letters allowed")
  .required();
```

### Available methods

* `.min(length: number, message?: string)`
* `.max(length: number, message?: string)`
* `.email(message?: string)`
* `.pattern(regex: RegExp, message?: string)`
* `.required(message?: string)`

---

## number

Creates a schema for validating numeric values.

```ts
import { number } from '@resourge/schema';

const ageSchema = number()
  .min(0)
  .max(120)
  .integer("Must be an integer")
  .positive("Must be positive");
```

### Available methods

* `.min(value: number, message?: string)`
* `.max(value: number, message?: string)`
* `.integer(message?: string)`
* `.positive(message?: string)`
* `.required(message?: string)`

---

## array

Creates a schema for validating arrays.

```ts
import { array, string } from '@resourge/schema';

const tagsSchema = array(string().min(2)).min(1).required();
```

### Available methods

* `.min(length: number, message?: string)`
* `.max(length: number, message?: string)`
* `.required(message?: string)`
* `.unique(message?: string)`

---

## date

Creates a schema for validating `Date` objects.

```ts
import { date } from '@resourge/schema';

const dateSchema = date()
  .minDate(new Date("2024-01-01"), "Too early")
  .maxDate(new Date("2024-12-31"), "Too late")
  .required();
```

### Available methods

* `.minDate(date: Date, message?: string)`
* `.maxDate(date: Date, message?: string)`
* `.required(message?: string)`

---

## boolean

Creates a schema for validating boolean values.

```ts
import { boolean } from '@resourge/schema';

const boolSchema = boolean().required();
```

### Available methods

* `.required(message?: string)`

---

## compile

Compiles the schema for optimized and consistent validation.

```ts
const schema = object({
  name: string().min(2),
  age: number().min(18)
}).compile();
```

### Optional config parameters

```ts
compile({
  debug?: boolean,
  defaultNullable?: boolean,
  defaultOptional?: boolean,
  messages?: Record<string, string>,
  onlyOnTouch?: boolean
});
```

---

## validate

Validates a value against a compiled schema. Returns an array of validation errors.

```ts
const result = schema.validate(data);
if (result.length > 0) {
  console.log("Validation failed:", result);
}
```

### Parameters

* `data`: The input to be validated.
* `onlyOnTouch?`: Optional array of keys to validate "only on touch".

---

## isValid

Returns a boolean indicating if the input passes validation.

```ts
const isValid = schema.isValid(data);
```

### Parameters

* `data`: Input to validate.
* `onlyOnTouch?`: Optional array of keys to validate only when changed.

---

## setupDefaultMessage

Sets global default validation messages.

```ts
import { setupDefaultMessage, string } from '@resourge/schema';

setupDefaultMessage({
  string: {
    min: () => 'Too short!',
    required: () => 'Required field',
  }
});
```

---

## onlyOnTouch

Optional optimization to validate only values that have changed.

```ts
const errors = schema.validate(newData, ['name', 'email']);
```

---

## Types

Some useful types exported by the library:

* `SchemaError` – shape of a validation error.
* `CompileConfig` – configuration object for `.compile()`.
* `OnlyOnTouch<T>` – helper type to specify touched keys.

---
