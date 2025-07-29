---
title: API Reference – vue3-use-authentication
description: Full API reference for @resourge/vue3-use-authentication
---

`@resourge/react-authentication` is a flexible authentication system for React applications, offering utilities and components for managing users, sessions, and permission-based access. This API reference provides full usage details for every core feature and method in the package.

---

## setupAuthentication

Initializes the authentication logic outside of components.

### Parameters

```ts
setupAuthentication({
  getProfile,
  refreshToken,
  storage,
  useSuspense,
})
```

| Option         | Type                                                       | Required | Description                                                                       |
| -------------- | ---------------------------------------------------------- | -------- | --------------------------------------------------------------------------------- |
| `getProfile`   | `(token: string) => Promise<UserProfile>`                  | ✅        | Retrieves user data from a token.                                                 |
| `refreshToken` | `(token: string, refreshToken: string) => Promise<string>` | ✅        | Returns a new token using refreshToken.                                           |
| `storage`      | `StorageAdapter`                                           | ❌        | Interface for persistent storage (`localStorage`, `AsyncStorage`, etc.).          |
| `useSuspense`  | `boolean`                                                  | ❌        | Whether to use Suspense to delay rendering until auth is ready (default: `true`). |

---

## StorageAdapter

To persist tokens, define a `storage` object:

```ts
const storage = {
  getItem: (key: string) => localStorage.getItem(key),
  setItem: (key: string, value: string) => localStorage.setItem(key, value),
  removeItem: (key: string) => localStorage.removeItem(key),
}
```

All methods support both sync and async patterns.

---

## AuthenticationSystem

Wraps your application to provide context, error handling, and fallback UI.

### Props

```tsx
<AuthenticationSystem
  authentication={authentication}
  onLogin={(username, password) => Promise<string>}
  onLogout={(token) => void | Promise<void>}
  getToken={(getToken, user, permissions) => void}
  errorComponent={<ErrorComponent />}
  onError={(error, info) => void}
  redirectOnError={true}
/>
```

| Prop              | Required | Description                           |
| ----------------- | -------- | ------------------------------------- |
| `authentication`  | ✅        | Output from `setupAuthentication`.    |
| `onLogin`         | ❌        | Custom login function.                |
| `onLogout`        | ❌        | Custom logout handler.                |
| `getToken`        | ❌        | Callback for when token is retrieved. |
| `errorComponent`  | ❌        | UI shown on error.                    |
| `onError`         | ❌        | Error handler callback.               |
| `redirectOnError` | ❌        | If `true`, rerenders after error.     |

---

## Hooks

### `useAuthenticationContext()`

Access authentication context values and functions:

```ts
const {
  user,
  token,
  refreshToken,
  logout,
  isAuthenticated,
  setAuthenticationError,
} = useAuthenticationContext();
```

### `usePermissionsContext()`

Get access to current user permissions:

```ts
const permissions = usePermissionsContext();
```

---

## SessionService

Utility service to perform auth actions programmatically (e.g., outside components).

```ts
import { SessionService } from '@resourge/react-authentication'
```

### Methods

* **`authenticate()`**
  Fetch user profile from stored token.

* **`login(username: string, password: string): Promise<boolean>`**
  Perform login manually.

* **`logout(): Promise<void>`**
  Clear stored session and token.

* **`refreshToken(): Promise<boolean>`**
  Get a new token using the stored refresh token.

* **`setToken(token: string, refreshToken?: string): Promise<boolean>`**
  For custom auth providers like OAuth, Google, etc.

* **`setAuthenticationError(error: Error)`**
  Register a manual error in the context.

* **`getToken(): Promise<string | null>`**
  Returns current token, refreshing it if needed.

---

## ErrorBoundary

A component to gracefully handle render errors.

### Usage

```tsx
<ErrorBoundary
  errorComponent={(error) => <div>Error: {error.message}</div>}
  onError={(err, info) => console.error(err)}
  redirectOnError={true}
>
  <App />
</ErrorBoundary>
```

| Prop              | Required | Description                             |
| ----------------- | -------- | --------------------------------------- |
| `children`        | ✅        | Your application components.            |
| `errorComponent`  | ❌        | Shown on error (ReactNode or function). |
| `onError`         | ❌        | Custom error handler.                   |
| `redirectOnError` | ❌        | Rerenders the app if error occurs.      |

---

## Example

```tsx
const authentication = setupAuthentication({
  getProfile: async (token) => {
    return {
      user: { id: 123, name: 'John Doe' },
      permissions: { admin: true }
    };
  },
  refreshToken: async (token, refreshToken) => {
    const response = await fetch('/refresh', { method: 'POST' });
    const { newToken } = await response.json();
    return newToken;
  },
  storage: localStorage,
});

function App() {
  return (
    <AuthenticationSystem
      authentication={authentication}
      loadingComponent={<div>Loading...</div>}
      onError={(error) => console.error('Auth error', error)}
    >
      <MainRoutes />
    </AuthenticationSystem>
  );
}
```