---
title: 'useFormStorage'
---

Hook to create a form where changes will be saved in a storage. <br/>
_Note: that when changes are done to form data, it's always better to change/update the version so storage data is cleared._ <br/>
_Note: By default it will clear the form from storage when submitted with success._

### FormStorage Options

```jsx
// object
const { ... } = useForm(
  ...,
  {
	//... same as normal useForm

	// Required
	uniqueId: 'unique form id', // Mandatory so you can save multiple forms
	storage: {
	  getItem: (key) => 'return key or null',
	  removeItem: (key) => {},
	  setItem: (key, value: string) => {}
	}
	// Or storage: window.localStorage

	// NotRequired
	autoSyncWithStorage: true,
	shouldClearAfterSubmit: true,
	version: '1.0.0',
	onLoading: (isLoading) => {},
	onStorageError: (error) => {}
  }
)
```

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | -------- | ----------- |
| **uniqueId** | `string` | `true` | `undefined` | Unique id for storage |
| **storage** | `{ getItem: (key) => 'return key or null', removeItem: (key) => {}, setItem: (key, value: string) => {} }` | `true` | undefined | Storage where form is going to be saved |
| **autoSyncWithStorage** | `boolean` | `false` | `true` | When true, will automatically sync the form data with storage one |
| **shouldClearAfterSubmit** | `boolean` | `false` | `true` | Should clear storage after submit |
| **version** | `string` | `false` | `1.0.0` | Storage version (changing will clear form from storage) |
| **onLoading** | `(isLoading) => void` | `false` | `undefined` | Reading from storage can be a small delay, onLoading serves to show a loading. |
| **onStorageError** | `(error) => void` | `false` | `undefined` | In case reading or writing in storage gives an error |

### Class vs JSON

When using `useFormStorage` all data will be converted to JSON (localStorage, indexDB, etc only work with pure JSON) that means Class's prototype will be removed. To prevent this from occurring some class decorators/functions are provided.

#### PreserveClass or addClassToPreserve

With Decorator:

```tsx
@PreserveClass
class Test {
  public doSomething() {
  
  }
}

@PreserveClass
class AppTest {
  public test = {
	subTest: 1
  };

  public classTest1 = new Test();

  public classArrayTest = []

  public classTest2?: Test;
}
```

With a simple function:

```tsx
class Test {
  public doSomething() {

  }
}
addClassToPreserve(Test)
class AppTest {
  public test = {
  	subTest: 1
  };

  public classTest1 = new Test();

  public classArrayTest = []

  public classTest2?: Test;
}
addClassToPreserve(AppTest)
```