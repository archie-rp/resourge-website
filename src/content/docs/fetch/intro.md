---
title: "Quick Start"
---

`react-fetch` provides a set of tools to simplify the request process.
Provides useFetch, useScrollRestoration, FetchProvider, HttpService, LoadingService and a Loader and GlobalLoader.

## Features

- Build with typescript.
- Build on top of fetch.
- useScrollRestoration to restore scroll position.
- FetchProvider to inject configs like token, header, etc.
- useFetch tries to prevent "Can't perform a React state update on an unmounted component".
- Centralize request into a unique place, with HttpService.
- Together with @resourge/http-service it will also abort request on component unmount. (@resourge/http-service is not mandatory but otherwise this functionality will need the developer to do it)
- Global, local components and LoadingService to centralize showing Loaders.

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @resourge/react-fetch
```

or NPM:

```sh
npm install @resourge/react-fetch --save
```

## Usage

```jsx
import React from 'react'

import {
  useFetch
} from '@resourge/react-fetch'

function FooComponent() {
  // const [products, fetch, isLoading, error] = useFetch(
  // or
  const { data: products, isLoading, error } = useFetch(
	() => {
      return // Axios/fetch/HttpService
	},
	{
	  initialValue: []
	}
  );

  if ( isLoading ) {
	return <>Loading...</>
  }

  if ( error ) {
	return <>Something went wrong</>
  }
  
  return (
    <ul>
	  {
		products.map((val) => (
		  <li key={val.id}>{ val.name }</li>
		))
	  }
    </ul>
  )
}

export default App
```