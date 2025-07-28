---
title: HTTP Service Examples
description: Practical usage examples for @resourge/http-service.
---

Explore how to use the `@resourge/http-service` package in common scenarios.

---

## Creating the HttpService Instance

Create a configured instance of `BaseHttpService`:

```ts
import { BaseHttpService } from '@resourge/http-service';

const HttpService = new BaseHttpService({
  baseUrl: 'https://api.example.com',
  headers: {
    Authorization: 'Bearer token123',
  },
});
````

---

## Making HTTP Requests

### GET Request

```ts
HttpService.get('/posts/1')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### POST Request

```ts
const postData = {
  title: 'New Post',
  body: 'Lorem ipsum...',
  userId: 1,
};

HttpService.post('/posts', postData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### PUT Request

```ts
const updateData = {
  title: 'Updated Post',
  body: 'Updated content',
};

HttpService.put('/posts/1', updateData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### DELETE Request

```ts
HttpService.delete('/posts/1')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### PATCH Request

```ts
const patchData = {
  body: 'Patched content',
};

HttpService.patch('/posts/1', patchData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

---

## File Upload

Upload files with additional form data:

```ts
const files = [file1, file2];
const formData = {
  description: 'File description',
};

HttpService.upload('POST', '/files', files, formData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

---

## Using LoadingService

### Show and Hide Loading Indicators

```ts
import { LoadingService } from '@resourge/http-service';

LoadingService.show(); // Show default loader
LoadingService.hide(); // Hide default loader

LoadingService.show('customLoaderId'); // Show loader with custom ID
LoadingService.hide('customLoaderId'); // Hide loader with custom ID
```

### Listening to Loading State Changes

```ts
const removeListener = LoadingService.addListener(() => {
  console.log('Loading state changed!');
});

// Remove listener when no longer needed
removeListener();
```

### Listening to Custom Loader

```ts
const removeCustomListener = LoadingService.addListener('myLoaderId', () => {
  console.log('Custom loading state changed!');
});

// Remove listener later
removeCustomListener();
```

---

## Extending BaseHttpService

Create a custom service by extending `BaseHttpService`:

```ts
class CustomHttpService extends BaseHttpService {
  constructor() {
    super({
      baseUrl: 'https://api.example.com',
      headers: { Authorization: 'Bearer token123' },
    });
  }

  public customMethod() {
    // Your custom logic here
  }
}

const customService = new CustomHttpService();
customService.customMethod();
```