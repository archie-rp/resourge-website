---
title: "Methods"
---

## useUrl

Returns the current URL object.

```tsx
const url = useUrl();
```

## Methods

### parseParams

Params object into search path

```jsx
import { parseParams } from '@resourge/react-search-params';

parseParams({
  productId: 10,
  productName: 'Apple'
})
// ?productId=10&productName=Apple
```

### parseSearch

Converts search string into object.

```jsx
import { parseSearch } from '@resourge/react-search-params';

parseSearch('?productId=10&productName=Apple')
// {
//   productId: 10,
//   productName: 'Apple'
// }
```