---
title: Http Service
description: Manage HTTP requests with ease using Resourge's simple and powerful HTTP service for JavaScript applications.
---

**Http Service** from Resourge provides a simple and flexible API for making HTTP requests, handling responses, and managing errors in your JavaScript applications. It is ideal for interacting with REST APIs and handling network operations efficiently.

## Features

- Simple API for GET, POST, PUT, DELETE, and more
- Built-in error handling and response parsing
- Support for request/response interceptors
- Works with any JavaScript framework or vanilla JS
- TypeScript support

## Installation

```bash
npm install @resourge/http-service
# or
yarn add @resourge/http-service
```

## Basic Usage

```js
import { http } from '@resourge/http-service';

// GET request
http.get('/api/users').then(users => {
  console.log(users);
}).catch(error => {
  console.error(error);
});

// POST request
http.post('/api/users', { name: 'Alice' }).then(user => {
  console.log(user);
});
```

## Using Interceptors

```js
http.interceptors.request.use(config => {
  // Modify request config (e.g., add auth token)
  config.headers['Authorization'] = 'Bearer token';
  return config;
});

http.interceptors.response.use(response => {
  // Handle or transform response
  return response;
});
```