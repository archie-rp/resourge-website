---
title: React Router API Reference
description: Full API reference for @resourge/react-router
---

## Platform-Specific Usage

* **Web**: Use `BrowserRouter` or `LanguageRoute`.
* **Mobile (React Native)**: Use `MobileRouter` with tab routes like `TabsRoute`, `BottomTabsRoute`, `TopTabsRoute`.

---

## BrowserRouter (Web, Online)

`BrowserRouter` manages web routing using the HTML5 history API.

**Example:**

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

## MobileRouter (Mobile-only)

Provides routing suited for mobile apps with native navigation and tab support.

---

## Route

Defines a route with a path and component.

---

## Switch

Renders the first matched route from its children.

---

## SetupPaths (`path`, `pathParam`, `searchParam`)

Helpers to define route paths and parameters with type safety.

---

## TabsRoute (Mobile-only)

Defines routes inside a tab navigator.

---

## BottomTabsRoute (Mobile-only)

Bottom tab navigation container.

---

## TopTabsRoute (Mobile-only)

Top tab navigation container.

---

## LanguageRoute (Web-only)

Handles i18n with language prefixes in URLs.

---

## Navigate

Declarative navigation component.

**Example:**

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

## Redirect

Alias of `Navigate` for backward compatibility.

---

## Title (Web-only)

Sets page title for current route.

---

## Meta (Web-only)

Sets meta tags for SEO.

---

## Prompt

Shows confirmation dialog on navigation away.

---

## Hooks

### useNavigate()

Returns a function to perform navigation programmatically.

**Example:**

```tsx
import { useNavigate } from '@resourge/react-router';

function MyComponent() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return <button onClick={goHome}>Go Home</button>;
}
```

---

### useParams()

Returns route parameters as an object.

**Example:**

```tsx
import { useParams } from '@resourge/react-router';

function UserProfile() {
  const params = useParams();
  return <div>User ID: {params.userId}</div>;
}
```

---

### useSearchParams()

Get and set query parameters.

**Example:**

```tsx
import { useSearchParams } from '@resourge/react-router';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  function updateQuery(newQuery) {
    setSearchParams({ q: newQuery });
  }

  return (
    <div>
      <input value={query} onChange={e => updateQuery(e.target.value)} />
      <p>Searching for: {query}</p>
    </div>
  );
}
```

---

### useAction()

Handles route actions (e.g., form submissions).

**Example:**

```tsx
import { useAction } from '@resourge/react-router';

function SubmitForm() {
  const action = useAction();

  async function handleSubmit(data) {
    await action.submit(data);
  }

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

### useMatchPath()

Checks if a path matches the current URL.

**Example:**

```tsx
import { useMatchPath } from '@resourge/react-router';

function HighlightLink({ to }) {
  const isActive = useMatchPath(to);
  return <a style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{to}</a>;
}
```

---

### useSwitch()

Returns information about matched routes in a switch.

---

### useLink()

Creates link props for navigation components.

**Example:**

```tsx
import { useLink } from '@resourge/react-router';

function CustomLink({ to, children }) {
  const linkProps = useLink(to);
  return <a {...linkProps}>{children}</a>;
}
```

---

### useNormalizeUrl()

Normalizes URLs based on routing config.

---

### useBeforeURLChange()

Runs logic before the URL changes, can block navigation.

**Example:**

```tsx
import { useBeforeURLChange } from '@resourge/react-router';

function UnsavedChangesWarning() {
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

### useBlocker()

Blocks navigation and allows custom confirmation.

---

### usePrompt()

Shortcut hook to prompt user before leaving.

**Example:**

```tsx
import { usePrompt } from '@resourge/react-router';

function FormPage() {
  const [isBlocking, setIsBlocking] = React.useState(true);

  usePrompt(isBlocking, 'Are you sure you want to leave?');

  return <form>...</form>;
}
```

---

## Utilities

### matchPath(pathPattern, pathname)

Checks if pathname matches pattern and returns params.

---

### generatePath(pathPattern, params)

Builds a path string with parameters filled.

---

### viteReactRouter

Helper for integrating with Vite build tool.

---