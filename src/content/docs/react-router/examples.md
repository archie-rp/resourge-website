---
title: React Router Examples
description: Practical examples for using @resourge/react-router.
---

## Basic BrowserRouter Setup

```tsx
import { BrowserRouter, Routes, Route } from '@resourge/react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Navigate Component Example

```tsx
import { Navigate } from '@resourge/react-router';

function LoginRedirect() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Dashboard />;
}
```

---

## useNavigate Hook Example

```tsx
import { useNavigate } from '@resourge/react-router';

function GoHomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>
      Go Home
    </button>
  );
}
```

---

## useParams Hook Example

```tsx
import { useParams } from '@resourge/react-router';

function UserProfile() {
  const params = useParams();
  return <div>User ID: {params.userId}</div>;
}
```

---

## useSearchParams Hook Example

```tsx
import { useSearchParams } from '@resourge/react-router';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div>
      <input
        value={query}
        onChange={e => setSearchParams({ q: e.target.value })}
        placeholder="Search..."
      />
      <p>Searching for: {query}</p>
    </div>
  );
}
```

---

## useBeforeURLChange Hook Example

```tsx
import { useBeforeURLChange } from '@resourge/react-router';

function UnsavedChangesGuard({ hasUnsavedChanges }) {
  useBeforeURLChange((newUrl, action) => {
    if (hasUnsavedChanges) {
      return window.confirm('You have unsaved changes, leave anyway?');
    }
    return true;
  });

  return null;
}
```

---

## usePrompt Hook Example

```tsx
import { usePrompt } from '@resourge/react-router';

function FormPage() {
  const [isBlocking, setIsBlocking] = React.useState(true);

  usePrompt(isBlocking, 'Are you sure you want to leave this page?');

  return (
    <form>
      {/* form inputs */}
      <button onClick={() => setIsBlocking(false)}>Save</button>
    </form>
  );
}
```

---

## matchPath Utility Example

```tsx
import { matchPath } from '@resourge/react-router';

const result = matchPath('/users/:id', '/users/123');
console.log(result.params.id); // Outputs: 123
```

---

## generatePath Utility Example

```tsx
import { generatePath } from '@resourge/react-router';

const path = generatePath('/users/:id', { id: '123' });
console.log(path); // Outputs: /users/123
```