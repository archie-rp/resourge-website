---
title: Introduction to @resourge/vue3-use-authentication
description: A lightweight authentication library for Vue 3 applications.
---

`@resourge/vue3-use-authentication` is a lightweight, flexible authentication library built specifically for Vue 3 applications using the Composition API. It simplifies managing user sessions, authentication state, and permissions, enabling you to build secure and reactive authentication flows with ease.

## Features

* **Designed for Vue 3**: Takes full advantage of Vue 3’s Composition API for a modern developer experience.
* **Reactive and declarative**: Reactivity makes it easy to respond to authentication state changes across your app.
* **Supports persistent sessions**: Easily store tokens and session data securely with optional encryption.
* **Permission management**: Define user roles and permissions with built-in support for role-based access control.
* **Flexible integration**: Works seamlessly with REST or GraphQL backends and any authentication flow.

## Basic Usage Example

Wrap your app in the `AuthenticationProvider` component to manage authentication context globally:

```vue
<script lang="ts" setup>
import { AuthenticationProvider } from '@resourge/vue3-use-authentication'

const SESSION_STORAGE_KEY = 'my-app-session'
const ENCRYPTED_SECRET = 'my-super-secret-key'
</script>

<template>
  <AuthenticationProvider
    :localStorageSessionKey="SESSION_STORAGE_KEY"
    encrypted
    :encryptedSecret="ENCRYPTED_SECRET"
  >
    <router-view />
  </AuthenticationProvider>
</template>
```

This sets up persistent, optionally encrypted session storage for your authentication state.

## Managing User Profiles and Permissions

Define TypeScript classes to model your user data and permissions, which helps maintain type safety throughout your app:

```ts
export class Profile {
  id: string
  name: string
  email: string

  constructor(id: string, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }
}
```

```ts
export default class Permissions {
  isAdmin: boolean
  isUser: boolean

  constructor(roles: string[] = []) {
    this.isAdmin = roles.includes('admin')
    this.isUser = roles.includes('user')
  }
}
```

## Accessing Authentication State in Components

Use the `useAuthentication` hook to access reactive authentication properties and actions such as login and logout:

```ts
import { defineComponent } from 'vue'
import useAuthentication from '@resourge/vue3-use-authentication'

export default defineComponent({
  setup() {
    const { isAuthenticated, user, login, logout } = useAuthentication()

    function performLogin() {
      login(new Profile('123', 'John Doe', 'john@example.com'), new Permissions(['user']), 'token123', 'cookie123')
    }

    return {
      isAuthenticated,
      user,
      login: performLogin,
      logout
    }
  }
})
```

## Checking Permissions

Use `usePermissions` to reactively check user permissions in your components:

```ts
import { defineComponent } from 'vue'
import usePermissions from '@resourge/vue3-use-authentication'

export default defineComponent({
  setup() {
    const { isAdmin, isUser } = usePermissions()

    return {
      isAdmin,
      isUser
    }
  }
})
```

## Accessing Authentication State Outside Components

You can also access authentication state outside Vue components, such as in routing guards, using `useAuthenticationStorage`:

```ts
import { useAuthenticationStorage } from '@resourge/vue3-use-authentication'
import { Profile } from './User'
import Permissions from './Permissions'

const { isAuthenticated, user } = useAuthenticationStorage<Profile, Permissions>()

if (isAuthenticated.value) {
  console.log('User is authenticated:', user.value)
}
```
