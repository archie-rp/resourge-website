---
title: React Authentication
description: Comprehensive authentication system for React applications using @resourge/react-authentication.
---

`@resourge/react-authentication` provides a robust authentication system built for React. It includes components and utilities for managing user authentication, authorization, session management, and error handling, ensuring a smooth user experience.

## When to use

Use this package when you need to implement authentication and authorization in your React app with support for:

- Token management and refresh
- Permission-based access control
- Customizable error boundaries
- Session management outside React components

## Why use this?

- Easy setup with `setupAuthentication`
- Integrated `AuthenticationSystem` React component
- Supports token storage (e.g., `localStorage`)
- Hooks for accessing authentication and permissions contexts
- Session service for login/logout and token refresh
- Built-in error boundary component

## Installation

```bash
npm install @resourge/react-authentication
# or
yarn add @resourge/react-authentication
````

## Quick Start

```tsx
import React from 'react';
import { AuthenticationSystem, setupAuthentication } from '@resourge/react-authentication';

// Setup authentication outside components
const authentication = setupAuthentication({
  getProfile: async (token) => {
    // Fetch user profile using token
    return {
      user: { id: 123, username: 'example_user' },
      permissions: { admin: true }
    };
  },
  refreshToken: async (token, refreshToken) => {
    // Refresh token logic here
  },
  storage: localStorage,
});

function App() {
  return (
    <AuthenticationSystem
      authentication={authentication}
      onError={(error, info) => console.error('Auth error:', error)}
      loadingComponent={<div>Loading...</div>}
    >
      {/* Your app components */}
    </AuthenticationSystem>
  );
}

export default App;
```