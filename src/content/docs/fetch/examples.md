---
title: React Fetch Examples
description: Practical usage examples for @resourge/react-fetch.
---

## Basic Fetch Example

Fetch data from an API endpoint and handle loading and error states.

```tsx
import { useFetch } from '@resourge/react-fetch';

export default function UserProfile() {
  const { data, error, loading } = useFetch('/api/user/123');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user.</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
}
````

---

## Pagination Example

Use `usePagination` to load pages of data and append results.

```tsx
import { usePagination } from '@resourge/react-fetch';

export default function ItemList() {
  const { data, loading, loadMore, hasMore } = usePagination('/api/items');

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}

      {loading && <p>Loading...</p>}

      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  );
}
```

---

## Infinite Loading Example

Load data as the user scrolls down using `useInfiniteLoading`.

```tsx
import { useInfiniteLoading } from '@resourge/react-fetch';

export default function InfinitePosts() {
  const { data, loading, loadMore, hasMore } = useInfiniteLoading('/api/posts');

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}

      {loading && <p>Loading...</p>}

      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  );
}
```

---

## Scroll Restoration Example

Restore scroll position when navigating between pages.

```tsx
import { useScrollRestoration } from '@resourge/react-fetch';

export default function Page() {
  useScrollRestoration();

  return (
    <div>
      <h1>Page Content</h1>
      {/* page content */}
    </div>
  );
}
```

---

## Detect Online Status Example

Display online/offline status.

```tsx
import { useIsOnline } from '@resourge/react-fetch';

export default function NetworkStatus() {
  const isOnline = useIsOnline();

  return <p>Status: {isOnline ? 'Online' : 'Offline'}</p>;
}
```

---

## Using Loader Component

Show a loader while waiting for data.

```tsx
import { Loader, useFetch } from '@resourge/react-fetch';

export default function DataLoader() {
  const { loading } = useFetch('/api/data');

  return <>{loading && <Loader />}</>;
}
```

---

## Using RefreshControl Component

Pull-to-refresh example for mobile.

```tsx
import { RefreshControl } from '@resourge/react-fetch';

export default function RefreshableList() {
  const onRefresh = () => {
    // logic to refresh data
  };

  return (
    <div>
      <RefreshControl onRefresh={onRefresh} />
      {/* list content */}
    </div> 
  );
}
```
