---
title: Schema Validations
description: How to use schema validation with React Form and @resourge/schema.
---

You can use [`@resourge/schema`](https://github.com/resourge/schema) for type-safe and robust validation in your React Form forms.

## Installation

```bash
npm install @resourge/schema
# or
yarn add @resourge/schema
```

## Usage Example

```tsx
import { object, string, number, array } from '@resourge/schema';

const userSchema = object({
  name: string().min(3, "Name must be at least 3 characters").required("Name is required"),
  age: number().min(18, "Must be at least 18").required("Age is required"),
  email: string().email("Invalid email").required("Email is required"),
  hobbies: array(string()).min(1, "At least one hobby required")
}).compile();

const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
  hobbies: ["reading", "coding"]
};

const isValid = userSchema.validate(user);
```

## Using Schema Validation with React Form

You can integrate schema validation in your form like this:

```tsx
import { useForm } from '@resourge/react-form';
import { object, string } from '@resourge/schema';

const userSchema = object({
  name: string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
}).compile();

const MyForm = () => {
  const { form, handleSubmit, field, getErrors } = useForm(
    { name: '', email: '' },
    {
      validate: (form) => {
        return userSchema.validate(form)
      }
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted:', data);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...field('name')} placeholder="Name" />
      {getErrors('name')[0] && <span>{getErrors('name')[0]}</span>}

      <input {...field('email')} placeholder="Email" />
      {getErrors('email')[0] && <span>{getErrors('email')[0]}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};
```

## More Examples

### Nested Objects

```tsx
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
```
---

For comprehensive documentation and more usage examples, visit the [schema documentation](/schema/intro).