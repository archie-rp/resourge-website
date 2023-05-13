---
title: 'State'
---

`useForm` returns `Form State` and `Form Actions` 

### Form Data

Form data is the default form values. Can be a simple object or a class (I made it specifically for class support)

Rules:

* Only constrains `Form Data` to an  object. Meaning that it's possible to have elements with `moment`, `dayjs`, `class's`, `luxonas`, etc.
* Cached on the first render (changes will not affect the form data.)

```jsx

// definition of a plain object
const user = {
    name: 'Rimuru',
    age: 39
}

// usage with an object
const {
  ...
} = useForm(
  user
)

// definition of class
class User {
  name = 'Rimuru';
  age = 39
  
  get fullName() {
    return `${this.name} Tempest`
  }
}

// usage with a class
const {
  ...
} = useForm(
  User
)
```

### Form Options

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| **validateDefault** | `boolean` | false | Set's global validation. False by default |
| **onlyOnTouchDefault** | `boolean` | true | Set's globally to only show errors on camp touch. True by default |
| **validate** | `(form: T) => void \| Promise<void>` | false | Method to validate form. Usually with some kind of validator. (like yup, zod, joi, etc) |
| **onErrors** | `(errors: any \| any[]) => FormErrors` | false | Local method to treat errors. |
| **onTouch** | `(key: FormKey<T>, value: unknown, previousValue: unknown) => void` | false | Method called every time a value is changed |

## Input cursor jumping to end

Exists a bug in react inputs where using async onChange will cause the input cursor to jump to the end.
[https://github.com/facebook/react/issues/14904](https://github.com/facebook/react/issues/14904).

To prevent the bug from occurring, onChange params needs to be an Event.

Or create a component that controls the input value.
[See more](https://github.com/facebook/react/issues/14904#issuecomment-522194299) 

### Form State

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| **form** | `object` | [`formData`](#form-data) | Form data |
| **errors** | `{ [form path]: [path error messages] }` | undefined | Depends if `useForm` `validate` is set. (ex: { 'user.name': ['Name is required'] }) |
| **isValid** | `boolean` | false | Form state by default is false if `errors` are undefined or an empty object |
| **touches** | `{ [form path]: boolean }` | {} | Form touches (ex: { 'user.name': true }) |
| **isTouched** | `boolean` | false | Form touches state by default is false if `touches` are undefined or an empty object |
| **context** | `object` | [Form State](#form-state) | Context, mainly for use in `FormProvider` |
| **formState** | `object` | `object` | Virtual Form Data, that provides a virtual representation of the form data to individually find errors/isTouched/isValid on each key (includes deep keys) |