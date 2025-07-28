---
title: Vue 3 Use Authentication Introduction
description: Introduction to @resourge/vue3-use-authentication and its core concepts.
-------------------------------------------------------------------------------------

`@resourge/vue3-use-authentication` is a lightweight Vue 3 library for managing authentication in modern applications. Built on top of the Composition API and designed for flexibility, this package offers a set of tools to streamline login flows, session management, and access control in your app.

### Key Features

* 🌐 Simple and extensible API
* 🔒 Secure authentication flows
* ⚡ Reactive state and computed properties
* 🧠 Built-in support for token handling
* 💼 Easily integrates with any backend or auth provider

### When to Use

Use this library if you're building a Vue 3 app and need:

* Declarative and reactive authentication state
* Persistent login across refreshes
* Easy integration with REST or GraphQL backends
* Support for login, logout, and session refreshing

### Installation

```bash
npm install @resourge/vue3-use-authentication
# or
yarn add @resourge/vue3-use-authentication
```

### Basic Example

```ts
import { useAuthentication } from '@resourge/vue3-use-authentication'

const { isAuthenticated, login, logout, user } = useAuthentication()

onMounted(() => {
  if (!isAuthenticated.value) {
    login({ username: 'john', password: '1234' })
  }
})
```