---
title: React Authentication API Reference
description: Full API documentation and usage for @resourge/react-authentication.
---

The `@resourge/react-authentication` package provides a comprehensive set of tools to manage user authentication, authorization, and error handling in React applications.

---

## setupAuthentication

Initializes the authentication system with custom logic for profile fetching, token refresh, and storage.

### Usage

```tsx
import { setupAuthentication } from '@resourge/react-authentication';

const authentication = setupAuthentication({
  getProfile: async (token) => {
    // Retrieve user profile based on token
  },
  refreshToken: async (token, refreshToken) => {
    // Refresh authentication token
  },
  storage: {
    getItem: (key) => localStorage.getItem(key),
    setItem: (key, value) => localStorage.setItem(key, value),
    removeItem: (key) => localStorage.removeItem(key),
  },
  useSuspense: true, // optional, default true
});
````

### Parameters

| Name           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `getProfile`   | function | Async function to fetch user profile with token |
| `refreshToken` | function | Async function to refresh authentication token  |
| `storage`      | object   | Storage interface for token persistence         |
| `useSuspense`  | boolean  | Whether to use React Suspense (default: true)   |

---

## AuthenticationSystem

React component that wraps your app to provide authentication context, error boundaries, and suspense fallback.

### Props

| Prop              | Type                      | Description                                                 |
| ----------------- | ------------------------- | ----------------------------------------------------------- |
| `authentication`  | SetupAuthenticationReturn | Required. Authentication instance from setupAuthentication. |
| `onLogin`         | function                  | Optional. Handles user login, returns a token promise.      |
| `onLogout`        | function                  | Optional. Handles user logout.                              |
| `getToken`        | function                  | Optional. Called when token is needed.                      |
| `errorComponent`  | React element or function | Optional. Custom UI for error display.                      |
| `onError`         | function                  | Optional. Callback when an error occurs.                    |
| `redirectOnError` | boolean                   | Optional. Whether to redirect after error (default: false). |

### Usage

```tsx
import { AuthenticationSystem } from '@resourge/react-authentication';

<AuthenticationSystem
  authentication={authentication}
  onLogin={async (username, password) => {
    // Login logic returns token string
  }}
  onLogout={async (token) => {
    // Logout logic
  }}
  onError={(error) => {
    console.error(error);
  }}
  errorComponent={<CustomErrorComponent />}
>
  {/* App content */}
</AuthenticationSystem>
```

---

## Hooks

### useAuthenticationContext

Provides access to authentication state and actions inside React components.

```tsx
import { useAuthenticationContext } from '@resourge/react-authentication';

const { user, login, logout, token } = useAuthenticationContext();
```

### usePermissionsContext

Provides access to user permissions.

```tsx
import { usePermissionsContext } from '@resourge/react-authentication';

const permissions = usePermissionsContext();
```

---

## SessionService

Provides authentication-related methods usable outside React components.

### Methods

| Method                           | Description                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `authenticate()`                 | Fetches user profile using current token. Returns a promise.                                   |
| `login(user, pass)`              | Performs login with username/email and password. Returns a boolean promise indicating success. |
| `logout()`                       | Logs out the user. Returns a promise.                                                          |
| `refreshToken()`                 | Refreshes auth token. Returns a boolean promise indicating success.                            |
| `setToken(token, refreshToken?)` | Manually sets authentication tokens. Useful for custom auth like Google/Apple.                 |
| `setAuthenticationError(error)`  | Sets a custom authentication error.                                                            |
| `getToken()`                     | Retrieves a valid token, refreshing if expired. Returns a promise resolving to token or null.  |

### Example

```ts
SessionService.login('user@example.com', 'password123')
  .then(isLoggedIn => {
    if (isLoggedIn) {
      console.log('Login successful');
    }
  });
```

---

## ErrorBoundary

A React component to catch errors in the component tree and show fallback UI.

### Props

| Prop              | Type                  | Description                                        |
| ----------------- | --------------------- | -------------------------------------------------- |
| `children`        | ReactNode             | The child components to render                     |
| `errorComponent`  | React element or func | Custom UI to render when an error occurs           |
| `onError`         | function              | Callback called on error with error and error info |
| `redirectOnError` | boolean               | Whether to redirect after error (default: false)   |

### Usage

```tsx
import { ErrorBoundary } from '@resourge/react-authentication';

<ErrorBoundary
  errorComponent={(error) => <div>Error: {error.message}</div>}
  onError={(error, info) => console.error(error, info)}
  redirectOnError={true}
>
  <MyComponent />
</ErrorBoundary>
```

---
