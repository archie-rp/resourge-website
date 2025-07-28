---
title: React Fetch FAQ
description: Frequently asked questions about @resourge/react-fetch.
---

**Q: What is `@resourge/react-fetch`?**  
A: A React library providing hooks and components for declarative, type-safe data fetching with features like pagination, infinite loading, scroll restoration, and more.

**Q: How does `useFetch` work?**  
A: `useFetch` simplifies fetching data from APIs with built-in loading and error states, caching, and automatic updates on dependency changes.

**Q: Can I perform pagination with this library?**  
A: Yes, the `usePagination` hook supports paginated data loading and includes helpers like `loadMore` and `hasMore`.

**Q: How is infinite scrolling handled?**  
A: Use `useInfiniteLoading` to automatically load more data as the user scrolls, with control over when to fetch the next batch.

**Q: Does it support offline detection?**  
A: Yes, the `useIsOnline` hook tracks the user's network status and updates reactively.

**Q: Can I restore scroll position on page navigation?**  
A: Yes, `useScrollRestoration` and `useInfiniteScrollRestoration` hooks help restore scroll positions automatically.

**Q: Are the hooks typed with TypeScript?**  
A: Yes, all hooks and components have full TypeScript support and infer request and response types when possible.

**Q: Can I customize the loading indicators?**  
A: Yes, components like `Loader`, `GlobalLoader`, `LoadingFallback`, and `LoadingSuspense` provide flexible ways to display loading states.

**Q: Does the library integrate with React Suspense?**  
A: Yes, `LoadingSuspense` wraps suspense boundaries to show fallback loading UI.

**Q: Is it possible to persist fetch states?**  
A: While not built-in, you can combine these hooks with state management or caching solutions for persistence.

**Q: How do I contribute?**  
A: See the [CONTRIBUTING.md](https://github.com/resourge/fetch/blob/master/CONTRIBUTING.md) file in the repository for guidelines on contributing.

**Q: Where can I get help or report issues?**  
A: Use the GitHub issues page or join the community discussions linked in the repository.

