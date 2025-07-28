---
title: Schemas Examples
description: Usage examples for @resourge/schema.
---

## Basic Usage

```ts
import { array, object, string, number } from '@resourge/schema';

type User = {
  name: string;
  age: number;
  hobbies: string[];
};

const user: User = {
  name: 'Rimuru',
  age: 39,
  hobbies: ['Read', 'Nothing'],
};

const schema = object<User>({
  name: string().min(5).required(),
  age: number().min(18).required(),
  hobbies: array(string()).min(1).required(),
}).compile();

const schemaErrors = schema.validate(user);
const isValidUser = schema.isValid(user);
````

---

## Object Schema

```ts
import { object, string, number } from '@resourge/schema';

const userSchema = object({
  name: string().required("Name is required"),
  age: number().min(18, "Age must be at least 18").max(100, "Age must be less than or equal to 100"),
  email: string().email("Invalid email address"),
}).compile();

userSchema.validate({
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com"
});
```

---

## String Schema

```ts
import { string } from '@resourge/schema';

const schema = string()
  .min(5, "Minimum length should be 5 characters")
  .max(10, "Maximum length should be 10 characters")
  .pattern(/[a-zA-Z]+/, "Should contain only alphabetic characters")
  .compile();
```

---

## Number Schema

```ts
import { number } from '@resourge/schema';

const schema = number()
  .min(0, "Value should be >= 0")
  .max(100, "Value should be <= 100")
  .integer("Value should be an integer")
  .positive("Value should be positive")
  .compile();
```

---

## Array Schema

```ts
import { array, number, string } from '@resourge/schema';

const arraySchema = array({
  id: number().positive("ID must be positive"),
  name: string().required("Name is required"),
  email: string().email("Invalid email address"),
}).compile();

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: -2, name: "Alice", email: "alice@example" },
  { id: 3, name: "Bob", email: "bob@example.com" }
];

const result = arraySchema.validate(users);

if (result.isValid) {
  console.log("All users are valid!");
} else {
  console.log("Validation errors:", result.errors);
}
```

---

## Date Schema

```ts
import { date } from '@resourge/schema';

const dateSchema = date()
  .minDate(new Date("2024-01-01"), "Date must be after 2024-01-01")
  .maxDate(new Date("2024-12-31"), "Date must be before 2024-12-31")
  .compile();

const eventDate = new Date("2024-06-15");
const result = dateSchema.validate(eventDate);

if (result.isValid) {
  console.log("Event date is valid!");
} else {
  console.log("Validation errors:", result.errors);
}
```

---

## Boolean Schema

```ts
import { boolean } from '@resourge/schema';

const booleanSchema = boolean();
const isEnabled = true;

const result = booleanSchema.validate(isEnabled);

if (result.isValid) {
  console.log("Boolean value is valid!");
} else {
  console.log("Validation errors:", result.errors);
}
```

---

## Custom Compilation

```ts
import { object, string } from '@resourge/schema';

const schema = object({
  username: string().required()
}).compile({
  debug: true,
  defaultNullable: true,
  messages: {
    required: 'This field is required.',
    notNullable: 'This field cannot be null.'
  }
});
```

---

## Global Default Messages

```ts
import { string, setupDefaultMessage } from '@resourge/schema';

setupDefaultMessage({
  string: {
    min: () => 'Custom min message'
  }
});

const schema = string().min(10).compile();
```

---

## Manual Validation Example

```ts
import { object, string, number } from '@resourge/schema';

const schema = object({
  username: string().required(),
  age: number().min(20).required(),
  email: string().email().required()
}).compile();

const input = {
  username: 'John',
  age: 30,
  email: 'john@example.com'
};

const errors = schema.validate(input);

if (errors.length > 0) {
  console.log('Validation errors:', errors);
} else {
  console.log('Validation successful');
}
```

---