---
title: Vue 3 Use Authentication Examples
description: Practical examples for using @resourge/vue3-use-authentication.
---

## 1. Basic Setup in `App.vue`

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
````

---

## 2. Define `Profile` and `Permissions`

`Profile.ts`

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

`Permissions.ts`

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

---

## 3. Using `useAuthentication` in a Component

```ts
import { defineComponent } from 'vue'
import useAuthentication from './shared/authentication/user/useAuthentication'

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

---

## 4. Using `usePermissions` to Check Permissions

```ts
import { defineComponent } from 'vue'
import usePermissions from './shared/authentication/user/usePermissions'

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

---

## 5. Access Authentication State Outside Components (e.g., in Router)

```ts
import { useAuthenticationStorage } from '@resourge/vue3-use-authentication'
import { Profile } from './User'
import Permissions from './Permissions'

const { isAuthenticated, user } = useAuthenticationStorage<Profile, Permissions>()

if (isAuthenticated.value) {
  console.log('User is authenticated:', user.value)
}
```