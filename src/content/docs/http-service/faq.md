---
title: HTTP Service FAQ
description: Frequently asked questions about @resourge/http-service.
---

# FAQ

**Q: What is `http-service`?**  
A: It is a package providing core HTTP request handling and loading state management services for web applications.

**Q: What does `BaseHttpService` do?**  
A: It wraps the Fetch API to simplify making HTTP requests, including features like request throttling and file uploads.

**Q: How do I create an instance of `BaseHttpService`?**  
A: By importing it and providing configuration such as `baseUrl` and optional default headers.

**Q: Does `BaseHttpService` support all HTTP methods?**  
A: Yes, it supports `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, and file uploads.

**Q: How can I handle loading indicators?**  
A: Use the `LoadingService` to show or hide loading states and listen to changes with event listeners.

**Q: Can I customize request or response handling?**  
A: Yes, `BaseHttpService` supports interceptors to modify requests or responses globally.

**Q: How do I listen for loading state changes?**  
A: Use `LoadingService.addListener()` to register a callback that triggers on loading state changes.

**Q: Can I have multiple loading indicators?**  
A: Yes, you can use custom loader IDs to manage multiple independent loading states.

**Q: Is `http-service` compatible with any frontend framework?**  
A: Yes, it is framework-agnostic and can be used in any JavaScript or TypeScript environment.

**Q: How do I extend `BaseHttpService`?**  
A: You can subclass it to add custom methods or preset configurations.

**Q: What license does `http-service` use?**  
A: It is licensed under the MIT License.
