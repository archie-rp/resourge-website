---
title: React Authentication FAQ
description: Frequently asked questions about @resourge/react-authentication.
---

**Q: What is `@resourge/react-authentication`?**  
A: It's a lightweight React library that provides a complete authentication and authorization solution using context and hooks.

**Q: How do I set up authentication in my React app?**  
A: Wrap your app with the `AuthenticationProvider` component and provide props such as a storage key and encryption secret for secure token handling.

**Q: How do I define user profiles and permissions?**  
A: Create TypeScript interfaces or classes for `Profile` and `Permissions` to describe user data and access levels.

**Q: How do I access authentication state inside components?**  
A: Use the `useAuthentication()` hook to access values like `isAuthenticated`, `user`, and actions like `login`, `logout`, or `refresh`.

**Q: How do I check user permissions?**  
A: Use the `usePermissions()` hook to check permission flags like `isAdmin`, `isUser`, or any custom logic based on your `Permissions` type.

**Q: Can I use authentication state outside of React components?**  
A: Yes, the `useAuthenticationStorage()` helper lets you access and observe authentication state in places like your router or utility files.

**Q: Does this package support token encryption?**  
A: Yes, it supports encrypted storage (e.g., localStorage or cookies) using a secret key that you provide.

**Q: How do I handle login and logout?**  
A: Call the `login()` method with your user's profile, permissions, token, and optional cookie options. Use `logout()` to clear all session data.

**Q: Is this package TypeScript friendly?**  
A: Absolutely! It was built with TypeScript in mind and supports full typing via generics for your custom `Profile` and `Permissions` types.

**Q: Where can I find support or report issues?**  
A: You can open issues or discussions on the GitHub repository: [https://github.com/resourge](https://github.com/resourge).
