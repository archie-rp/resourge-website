---
title: React Router FAQ
description: Frequently asked questions about @resourge/react-router.
---

**Q: What is `@resourge/react-router`?**  
A: A flexible routing library for React and React Native that supports web and mobile platforms with features like nested routes, navigation hooks, and tab-based routing.

**Q: How do I define routes?**  
A: Use the `Route` component inside `BrowserRouter` or `MobileRouter` with a `path` and an `element` prop to define your routes.

**Q: Can I navigate programmatically?**  
A: Yes, use the `useNavigate` hook to get a navigate function which you can call with a path to change routes.

**Q: How do I access URL parameters?**  
A: Use the `useParams` hook inside a route component to access dynamic segments in the URL.

**Q: Does it support query parameters?**  
A: Yes, the `useSearchParams` hook allows reading and updating URL query parameters reactively.

**Q: Can I prevent navigation if there are unsaved changes?**  
A: Yes, use `useBeforeURLChange` or `usePrompt` hooks to block or confirm navigation based on your conditions.

**Q: How do I perform redirects?**  
A: Use the `Navigate` component to redirect users to a different route programmatically.

**Q: Does it support nested and tab routes?**  
A: Yes, you can use `TabsRoute`, `BottomTabsRoute`, and `TopTabsRoute` components for nested tab-based navigation on mobile.

**Q: Is there support for meta tags and page titles?**  
A: Yes, `Meta` and `Title` components are available for managing document metadata on web platforms.

**Q: Can I customize route matching?**  
A: Yes, utilities like `matchPath` and `generatePath` help customize route pattern matching and path generation.

**Q: How can I contribute?**  
A: Contributions are welcome! Please check the [CONTRIBUTING.md](https://github.com/resourge/react-router/blob/master/CONTRIBUTING.md) in the repository.

**Q: Where can I get support or report issues?**  
A: Use the GitHub issues page or community discussions linked in the repository.
