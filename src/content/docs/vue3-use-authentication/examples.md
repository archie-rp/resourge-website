---
title: React Authentication Examples
description: Practical usage examples of the @resourge/react-authentication package in React applications.
---

Practical usage examples of the `@resourge/react-authentication` package in real-world React applications.

---

## Setup Authentication

```tsx
import { setupAuthentication } from '@resourge/react-authentication';

const authentication = setupAuthentication({
  getProfile: async (token) => {
    return {
      user: { id: 1, username: 'john' },
      permissions: { admin: true }
    };
  },
  refreshToken: async (token, refreshToken) => {
    // Your refresh logic
  },
  storage: localStorage
});
```

---

## Basic Usage with `AuthenticationSystem`

```tsx
import {
  AuthenticationSystem,
  setupAuthentication
} from '@resourge/react-authentication';
import LoadingSpinner from './LoadingSpinner';

const authentication = setupAuthentication({
  getProfile: async (token) => {
    return {
      user: { id: 1, username: 'john' },
      permissions: { admin: true }
    };
  },
  refreshToken: async () => { /* ... */ },
  storage: localStorage
});

function App() {
  return (
    <AuthenticationSystem
      authentication={authentication}
      loadingComponent={<LoadingSpinner />}
    >
      <YourApp />
    </AuthenticationSystem>
  );
}
```

---

## Handling Authentication Errors

```tsx
<AuthenticationSystem
  authentication={authentication}
  onError={(error, errorInfo) => {
    console.error('Auth error:', error);
  }}
  errorComponent={<div>Something went wrong</div>}
/>
```

---

## Custom Storage

```tsx
setupAuthentication({
  getProfile: async (token) => {
    // Fetch user profile
  },
  refreshToken: async (token, refreshToken) => {
    // Refresh logic
  },
  storage: {
    getItem: (key) => sessionStorage.getItem(key),
    setItem: (key, value) => sessionStorage.setItem(key, value),
    removeItem: (key) => sessionStorage.removeItem(key)
  }
});
```

---

## Using `SessionService`

```ts
import { SessionService } from '@resourge/react-authentication';

await SessionService.login('email@example.com', 'password123');

const token = await SessionService.getToken();
console.log('Current token:', token);

await SessionService.logout();
```

---

## ErrorBoundary Usage

```tsx
import { ErrorBoundary } from '@resourge/react-authentication';

<ErrorBoundary
  errorComponent={(error) => <p>Oops: {error.message}</p>}
  onError={(error, info) => console.error(error)}
>
  <App />
</ErrorBoundary>
```

---

## Accessing Contexts

```tsx
import {
  useAuthenticationContext,
  usePermissionsContext
} from '@resourge/react-authentication';

function Dashboard() {
  const auth = useAuthenticationContext();
  const permissions = usePermissionsContext();

  return (
    <>
      <p>User: {auth.user?.username}</p>
      {permissions.admin && <p>You are an admin.</p>}
    </>
  );
}
```