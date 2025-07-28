---
title: React Fetch
description: Introduction to React Fetch.
---

## When to use

Use React Fetch when you need to handle server requests with minimal boilerplate, automatic caching, revalidation, and fine-grained control over loading and error states in your React applications.

## Why use this?

- Simple declarative API  
- TypeScript support for response data  
- Automatic caching and request deduplication  
- Supports manual and automatic re-fetching  
- Works with any HTTP client or REST API  
- Built-in support for pagination and infinite loading  

## Installation

```bash
// npm
npm install @resourge/react-fetch
# or
// yarn
yarn add @resourge/react-fetch
````

## Quick Start

```ts
// api/users.ts
import { HttpService } from "@resourge/http-service";

export const getUser = (userId: string) => {
  return HttpService.get('some-endpoint', userId)
};
```

Then use it anywhere:

```tsx
import { useFetch } from '@resourge/fetch/react'

function UsersList() {
  const { data, error, isLoading, refetch } = useFetch(getUser({ id: '123' }));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <span>{data?.user?.name}</span>
      <button onClick={refetch}>Reload</button>
    </div>
  );
}
```