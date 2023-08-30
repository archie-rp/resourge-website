---
title: 'Resource Scheme'
---

We have created a better improved schema validation to replace the other libraries like, yup, zod, fast-validator, etc.
This libraries has all improvements, comes with extra essentials validations and until know is the fastest one we know.

You can get it in here [`Resource Schema`](https://resourge.vercel.app/schema/intro).

```javascript
import { object, string, number, PostalCodes, PhoneNumbers } from '@resourge/schema'

export type UserType = {
 name: string
 age: number
 location: LocationType
 hobbies: Array<keyof typeof HobbiesEnum>
}

export class UserModel {
 public name = ''
 public age = 16
 public location: LocationType = { address: '', city: '', postalCode: '', phoneNumber: '' }
 public hobbies: Array<keyof typeof HobbiesEnum> = []

 constructor(model?: UserType) {
  if (model) {
   this.name = model.name
   this.age = model.age
   this.location = model.location
  }
 }
}

const schema = object<UserModel>({
 name: string().min(10).required(),
 age: number().min(16).required(),
 location: object({
  city: string().required(),
  address: string().required(),
  postalCode: string().postalCode(PostalCodes.PT).required(),
  phoneNumber: string().phoneNumber(PhoneNumbers.am_AM).required()
 })
}).compile();

export const useUserModel = (model?: UserType) => {
 return useForm<UserModel>(() => new UserModel(model), {
  validate: (form: UserModel, changedKeys) => {
   return schema.validate(form, changedKeys)
  },
 })
}
```

In the form component when you trigger the `handlerSubmit` function will validate the form with the schema.
Preventing to submit the form in case theres errors in the form.

We can read the errors by using [`getErrors`](/react-form/actions#geterrors)
