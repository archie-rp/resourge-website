---
title: React Authentication
description: Introduction to @resourge/react-authentication and its core concepts.
---

`@resourge/react-authentication` is a lightweight and flexible authentication library designed for React applications. It uses React Context and hooks to manage user sessions, permissions, and authentication state in a declarative and scalable way.

### Key Features

- ⚛️ Seamless integration with React and TypeScript
- 🔒 Built-in support for encrypted token storage
- 🔁 Persistent login across sessions
- 🧠 Reactive hooks for authentication and permissions
- 🔌 Easily integrates with any backend or API

### When to Use

Use this library if you need:

- Declarative and strongly typed authentication logic
- Easy access to `isAuthenticated`, `user`, `permissions`, and token
- A secure way to persist and manage user sessions
- A clear separation of concerns between auth logic and UI

### Installation

```bash
npm install @resourge/react-authentication
```
---

## 🔐 Basic Usage

Here’s how to set up `@resourge/react-authentication` in a React app:

### 1. Setup Authentication

First, configure your authentication logic **outside** the component tree using `setupAuthentication()`:

```ts
// authentication.ts
import { setupAuthentication } from '@resourge/react-authentication';

export const authentication = setupAuthentication({
  getProfile: async (token) => {
    // Fetch the user profile from your API
    const response = await fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Failed to load user');

    const data = await response.json();

    return {
      user: data.user,
      permissions: data.permissions,
    };
  },
  refreshToken: async (token, refreshToken) => {
    // Refresh token logic (optional)
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, refreshToken }),
    });

    if (!response.ok) throw new Error('Failed to refresh token');

    const data = await response.json();

    return {
      token: data.token,
      refreshToken: data.refreshToken,
    };
  },
  storage: localStorage, // or sessionStorage
});
```

---

### 2. Wrap Your App with `<AuthenticationSystem>`

Now use the `AuthenticationSystem` component to provide context to your app:

```tsx
// App.tsx
import React from 'react';
import { AuthenticationSystem } from '@resourge/react-authentication';
import { authentication } from './authentication';
import LoadingSpinner from './components/LoadingSpinner';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <AuthenticationSystem
      authentication={authentication}
      loadingComponent={<LoadingSpinner />}
      onError={(error, errorInfo) => {
        console.error('Authentication Error:', error, errorInfo);
        // Optional: Redirect, toast, etc.
      }}
    >
      <MainRoutes />
    </AuthenticationSystem>
  );
}

export default App;
```

---

### ✅ Done!

Now, anywhere in your app, you can use:

```tsx
import { useAuthentication } from '@resourge/react-authentication';

const { user, login, logout, isAuthenticated } = useAuthentication();
```
