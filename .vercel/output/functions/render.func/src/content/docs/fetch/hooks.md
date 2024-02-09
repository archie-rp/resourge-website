---
title: 'Hooks'
---


## useFetch

Hook to fetch and set data.
It will do the loading, error, set data, manually abort request if component is unmounted, and/or triggering other useFetch's.

`useFetch` has 2 modes.
 - When initialState is not set in the config, useEffect is simply a hook that returns a method that trigger's loading, error and the promise.
 - When initialState is set in the config, it will also do everything in the previous mode plus will trigger an useEffect and useOnFocusFetch and will also return `data`.

```jsx
// Fetch with useEffect 
// const {
//	data,
//    error,
//    fetch,
//    isLoading,
//    noLoadingFetch,
//    setData
// } = useFetch(
// or 
const [data, fetch, error, isLoading] = useFetch(
  async () => {
    return // Axios/fetch/HttpService
  }, 
  {
    initialState: []
  }
);
// Fetch without useEffect, no data is returned or no useEffect will be triggered
// const {
//    error,
//    fetch,
//    isLoading,
//    noLoadingFetch
// } = useFetch(
// or 
const [fetch, error, isLoading] = useFetch(
  async () => {
    return // Axios/fetch/HttpService
  }
);
```

### Options

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| **initialState** | `any` | true for useEffect trigger, otherwise no | Default data values. |
| **deps** | `React.DependencyList` | false | useEffect dependencies. Basically works on useEffect dependencies. _Note: Only with initialState set_ |
| **enable** | `boolean` | true | When false useEffect will not trigger fetch  |
| **noEmitError** | `boolean` | false | When false makes it so no error is emitted.  |
| **silent** | `boolean` | false | Doesn't trigger any Loading. (default: false) |
| **useLoadingService** | `boolean, string or string[]` | false | Instead of triggering a local loading, this make it so LoadingService does it. [see more](#useLoadingService) |
| **onWindowFocus** | `boolean` | false | Fetch on window focus (default: true). _Note: Only with initialState set_ |
| **scrollRestoration** | `method or array of method` | false | Serves to restore scroll position. [see how its done](#scrollRestoration). _Note: Only with initialState set_ |

#### scrollRestoration

```jsx
import React from 'react'

import {
  useScrollRestoration,
  useFetch
} from '@resourge/react-fetch'

function App() {
  // <<navigation action type>> is to know if the navigation was pop/push/replace/etc use together with navigation package (@resourge/react-router or react-router)
  const [scrollRestoration, ref] = useScrollRestoration('<<navigation action type>>');
  // If ref is not set it will update window scrollbar
  const { data: products, isLoading, error } = useFetch(
    async () => {
      return // Axios/fetch/HttpService
	},
	{
	  initialValue: [],
	  scrollRestoration: scrollRestoration
	}
  );

  if ( isLoading ) {
	return <>Loading...</>
  }

  if ( error ) {
	return <>Something went wrong</>
  }
  
  return (
    <ul ref={ref}>
	  {
		products.map((val) => (
		  <li key={val.id}>{ val.name }</li>
		))
	  }
    </ul>
  )
}
```

#### useLoadingService

Instead of triggering a local loading, this make it so LoadingService does it.
It can be a boolean, string or array of strings. <br />
When:
*  true - Will trigger GlobalLoading loading;
*  string - Will trigger loaderId Loading ("``` <Loader loaderId="">```") 
*  string[] - Will trigger all loaderId Loading ("``` <Loader loaderId="">```") 

## Loader

Component show loading at the useFetch or LoadingService command. <br />
`loadingElement` is optional. When undefined it will use either the GlobalLoader loading component or the default. 

```jsx
import React from 'react'

import {
  Loader
} from '@resourge/react-fetch'

function Bar() {
  const [data, fetch, error, isLoading] = useFetch(
    async () => {
      return // Axios/fetch/HttpService
    }, 
    {
      initialState: [],
	  useLoadingService: "Loading one" // Will trigger Loader loaderId="Loading one"
    }
  );

  return (
	...
  )
}

function App() {
  return (
	<Loader
	  // Mandatory and it's the id of this loader
	  loaderId="Loading one"
	  // Optional, in case it is undefined it will use GlobalLoader component.
	  loadingElement={<div>Loading Message</div>}
	>
	  children
	</Loader>
  )
}

export default App
```