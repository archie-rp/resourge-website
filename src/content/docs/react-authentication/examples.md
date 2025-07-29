---
title: Examples for @resourge/react-authentication
description: Practical examples to help you get started
---

These examples will help you get started quickly with `@resourge/react-authentication`. The package is designed to be flexible and works well with any REST or GraphQL backend.

## Basic Usage

```tsx
import React from 'react'
import { useAuthentication } from '@resourge/react-authentication'

function LoginPage() {
  const { login, isAuthenticated, logout, user } = useAuthentication()

  const handleLogin = async () => {
    await login({ username: 'john', password: '1234' })
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome {user?.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}
```

---

## Custom Login Form

```tsx
import React, { useState } from 'react'
import { useAuthentication } from '@resourge/react-authentication'

export function LoginForm() {
  const { login, error, loading } = useAuthentication()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}
```

---

## Protecting Routes (React Router v6+)

```tsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '@resourge/react-authentication'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuthentication()

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
```

---

## Refreshing Token Automatically

The hook automatically handles refresh tokens if configured correctly. Here's how you could show loading while restoring the session:

```tsx
import { useAuthentication } from '@resourge/react-authentication'

export function App() {
  const { initializing, isAuthenticated } = useAuthentication()

  if (initializing) {
    return <p>Loading session...</p>
  }

  return isAuthenticated ? <Dashboard /> : <LoginPage />
}
```

---

These examples are just a starting point. You can customize the authentication flow to fit your app’s specific needs. For full documentation of each function and option, see the [API reference](./api.md).
