---
title: "Quick Start"
---

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @resourge/react-router
```

or NPM:

```sh
npm install @resourge/react-router --save
```

## Usage

```js
import React from 'react'

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Navigate,
  path,
  Redirect
} from '@resourge/react-router'
import { SetupPaths, path } from '@resourge/react-router/setupPaths';

// Lazy loads
const ProductList = React.lazy(() => import('./ProductList'));
// Lazy loads
const ProductForm = React.lazy(() => import('./ProductForm'));

const RoutePaths = SetupPaths({
  HOME: path(),
  PRODUCT: path('product')
  .routes({
    FORM: path().param('productId')
  })
})

function App() {
  return (
    <BrowserRouter>
      <button onClick={() => {
        window.history.pushState(null, '', RoutePaths.HOME.get())
      }}
      >
        Home
      </button>
      <Link
        to={RoutePaths.PRODUCT.get()}
      >
        Product List
      </Link>
      <Link
        to={
          RoutePaths.PRODUCT.FORM.get({
            productId: Math.random().toFixed(0)
          })
        }
      >
        Product
      </Link>
      <Switch>
        <Route path={RoutePaths.HOME.path}>
          Home
        </Route>
        <Route 
          path={RoutePaths.PRODUCT.path}
        >
          <ProductList />
        </Route>
        <Route path={RoutePaths.PRODUCT.FORM.path}>
          <ProductForm />
        </Route>
        {/* Redirect */}
        <Redirect from={'*'} to={RoutePaths.HOME.get()} />
        {/* OR */}
        <Navigate to={RoutePaths.HOME.get()} />
        {/* Redirect */}
      </Switch>
    </BrowserRouter>
  )
}

export default App

```


## Why

I love react-router, but the new version it's just not for me. It takes a lot of freedom and functionalities (prompt) for few specific new functionalities (loader, etc).
Things I dislike about the new react-router version:
  - Removal of multiple "path"'s;
  - Removal of optional params and having to duplicate routes feels uglier;
  - Removal of prompt/blocker;
  - Not being able to put layout/components inside routes and having to use outlet for routes that most of  the times are specific to a specific page;
  - Having to duplicate a lot of routes;
  - Removal of custom Route's, for example "ProtectedRoute";