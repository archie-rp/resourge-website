---
title: "Default values"
---

Default form values can be a simple object or a class.

Rules:

* Only constrains `Form Data` to an object. Meaning that it's possible to have elements with `moment`, `dayjs`, `class's`, `luxonas`, etc.
* Cached on the first render (changes will not affect the form data.)


```tsx
// object
const { ... } = useForm(
  {
    productName: ''
  }
)

// class

// For class without constructor or constructor with undefined params
class Product {
	public productName = '';
}
const { ... } = useForm(
  Product
)

// For class with constructor or constructor with params
class ProductWithConstructor {
	public productName = '';

	constructor(productName: string) {
		this.productName = productName;
	}
}
const { ... } = useForm(
  () => new ProductWithConstructor('Apple')
)
```