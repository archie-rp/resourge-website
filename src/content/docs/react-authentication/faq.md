---
title: Vue 3 Use Authentication FAQ
description: Frequently asked questions about @resourge/vue3-use-authentication.
---

**Q: What is `@resourge/vue3-use-authentication`?**  
A: It is a Vue 3 composition API library designed to manage user authentication and permissions in Vue 3 applications.

**Q: How do I set up authentication in my Vue 3 app?**  
A: Wrap your app in the `AuthenticationProvider` component and provide necessary props like a local storage key and encryption secret.

**Q: How do I define user profiles and permissions?**  
A: Create TypeScript classes or interfaces for `Profile` and `Permissions` to represent your user data and access rights.

**Q: How do I access the authentication state in components?**  
A: Use the `useAuthentication` hook to get reactive properties such as `isAuthenticated`, `user`, and methods like `login` and `logout`.

**Q: How do I check user permissions?**  
A: Use the `usePermissions` hook to get reactive properties that indicate specific permissions like `isAdmin` or `isUser`.

**Q: Can I access authentication state outside of components?**  
A: Yes, you can use the `useAuthenticationStorage` function to access authentication state reactively outside Vue components, for example, in your router.

**Q: Does this library support token encryption?**  
A: Yes, it supports encrypted storage of authentication tokens using a secret you provide.

**Q: How do I perform login and logout?**  
A: Call the `login` method with user profile, permissions, token, and optional cookie; call `logout` to clear the session.

**Q: Is this package compatible with TypeScript?**  
A: Yes, it fully supports TypeScript with generic types for profile and permissions.

**Q: Where can I ask for support?**  
A: You can create issues or discussions on the GitHub repository at https://github.com/resourge.
