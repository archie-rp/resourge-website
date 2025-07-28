---
title: API Reference – vue3-use-authentication
description: Full API reference for @resourge/vue3-use-authentication
---

## `useAuthentication()`

The core hook that provides access to all authentication-related logic.

### Returns

```ts
{
  isAuthenticated: Ref<boolean>
  user: Ref<User | null>
  login: (credentials: LoginPayload) => Promise<void>
  logout: () => Promise<void>
  refresh: () => Promise<void>
}
````

* **`isAuthenticated`** – A `Ref<boolean>` indicating if the user is currently authenticated.
* **`user`** – A `Ref<User | null>` representing the current user object (or `null` if not authenticated).
* **`login(credentials)`** – Logs in the user with the provided credentials. Resolves when complete.
* **`logout()`** – Logs out the current user and clears the session.
* **`refresh()`** – Refreshes the user session (e.g., re-fetching or validating the session/token).

---

## Example Usage

```ts
import { useAuthentication } from '@resourge/vue3-use-authentication'

const { isAuthenticated, user, login, logout, refresh } = useAuthentication()

watchEffect(() => {
  if (isAuthenticated.value) {
    console.log('User is logged in as', user.value?.name)
  }
})
```

---

## Type Definitions

```ts
interface LoginPayload {
  username: string
  password: string
}

interface User {
  id: string
  name: string
  email?: string
  [key: string]: unknown
}
```
