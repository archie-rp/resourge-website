---
title: Introduction to @resourge/react-router
description: Overview of the @resourge/react-router package for React applications.
---

`@resourge/react-router` is a declarative routing library for React applications that enables seamless navigation and dynamic route matching. It provides a flexible and simple API for defining routes, handling navigation, and managing the browser history.

### Key Features

- **Declarative Routing:** Define your routes as React components for clear and maintainable navigation.
- **Nested Routes:** Supports nested route structures for complex UI hierarchies.
- **Dynamic Routing:** Easily handle dynamic route parameters and URL matching.
- **Navigation Components:** Includes components like `<Link>`, `<NavLink>`, and `<Outlet>` for in-app navigation.
- **History Management:** Manages browser history and URL synchronization effortlessly.
- **Lightweight and Extensible:** Designed to be simple yet powerful for any React project.

### When to Use

Use `@resourge/react-router` if you are building a React application that requires:

- Declarative and dynamic routing
- Nested route layouts
- URL parameter handling
- History and navigation management
- Integration with React’s component-based architecture

### Installation

You can install it using npm or yarn:

```bash
npm install @resourge/react-router
# or
yarn add @resourge/react-router
````

### Basic Usage

```tsx
import React from 'react';
import { Router, Route, Link } from '@resourge/react-router';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Router>
  );
}

export default App;
```