---
title: React Fetch API Reference
description: Full API documentation and usage guide for @resourge/react-fetch.
---

## useFetch

The main hook for fetching data with caching and reactivity.

```tsx
import { useFetch } from '@resourge/react-fetch';

const { data, error, loading, refetch } = useFetch('/api/data');
```

### Parameters

* `input`: Request URL or Request object.
* `options` (optional): Fetch options like method, headers, body, etc.
* `config` (optional): Additional config for caching, revalidation, polling, etc.

### Returns

| Property  | Description                       |
| --------- | --------------------------------- |
| `data`    | The response data                 |
| `error`   | Any error caught during the fetch |
| `loading` | Loading state                     |
| `refetch` | Function to refetch the data      |

---

## usePagination

Hook for automatic pagination of data.

```tsx
import { usePagination } from '@resourge/react-fetch';

const { data, loading, loadMore, hasMore } = usePagination('/api/items');
```

---

## useInfiniteLoading

Hook for infinite loading of data.

```tsx
import { useInfiniteLoading } from '@resourge/react-fetch';

const { data, loading, loadMore, hasMore } = useInfiniteLoading('/api/items');
```

---

## useScrollRestoration

Keeps or restores the scroll position when navigating.

```tsx
import { useScrollRestoration } from '@resourge/react-fetch';

useScrollRestoration();
```

---

## useInfiniteScrollRestoration

Combines infinite scroll with scroll position restoration.

```tsx
import { useInfiniteScrollRestoration } from '@resourge/react-fetch';

useInfiniteScrollRestoration();
```

---

## useFetchOnDependencyUpdate

Refetches data when dependencies change.

```tsx
import { useFetchOnDependencyUpdate } from '@resourge/react-fetch';

const data = useFetchOnDependencyUpdate('/api/data', [dependency]);
```

---

## useIsOnline

Detects if the user is online or offline.

```tsx
import { useIsOnline } from '@resourge/react-fetch';

const isOnline = useIsOnline();
```

---

## Loader Component

Visual component to indicate loading state.

```tsx
import { Loader } from '@resourge/react-fetch';

<Loader />
```

---

## GlobalLoader Component

Global loader for the entire application.

```tsx
import { GlobalLoader } from '@resourge/react-fetch';

<GlobalLoader />
```

---

## LoadingFallback Component

Fallback component displayed during loading.

```tsx
import { LoadingFallback } from '@resourge/react-fetch';

<LoadingFallback />
```

---

## LoadingSuspense Component

Component to integrate with React Suspense.

```tsx
import { LoadingSuspense } from '@resourge/react-fetch';

<LoadingSuspense />
```

---

## RefreshControl Component

Pull-to-refresh control for mobile devices.

```tsx
import { RefreshControl } from '@resourge/react-fetch';

<RefreshControl onRefresh={() => { /* refresh logic */ }} />
```

---
