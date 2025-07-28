---
title: HTTP Service
description: Introduction to @resourge/http-service for HTTP requests and loading state management.
---

`@resourge/http-service` provides essential services to simplify HTTP requests and loading indicators in web applications. It includes:

- **BaseHttpService**: A flexible wrapper around Fetch API with support for request throttling, file uploads, and interceptors.
- **LoadingService**: A simple service to manage and listen to loading indicator states across your app.

## When to use

Use `http-service` when you need a reliable, extendable HTTP client with built-in loading state management, especially for React or other front-end frameworks.

## Why use this?

- Easy-to-use HTTP methods: GET, POST, PUT, PATCH, DELETE
- Request throttling for GET requests
- File upload support
- Customizable interceptors for requests and responses
- Global loading indicator management
- Event listeners for loading state changes
- Extensible through subclassing

## Installation

```bash
npm install @resourge/http-service
# or
yarn add @resourge/http-service
````

## Quick Start

```tsx
import { BaseHttpService } from '@resourge/http-service';

const HttpService = new BaseHttpService({
  baseUrl: 'https://api.example.com',
  headers: {
    Authorization: 'Bearer token123',
  },
});

// Example: GET request
HttpService.get('/posts/1')
  .then(response => console.log(response))
  .catch(error => console.error(error));

// Example: Show loading indicator
import { LoadingService } from '@resourge/http-service';

LoadingService.show();
// ... perform async tasks
LoadingService.hide();
```