---
title: Schemas FAQ
description: Frequently asked questions about @resourge/schema.
---

# FAQ

**Q: How do I validate nested objects?**  
A: Use the `object` schema inside another `object` schema.

**Q: Can I use async validation?**  
A: Yes, use `.asyncTest()` for custom async validation logic.

**Q: How do I customize error messages?**  
A: Pass a custom message as the second argument to validation methods, e.g. `.min(3, "Too short!")`.

**Q: Is TypeScript supported?**  
A: Yes, all schemas are fully typed.

---

For more, see the [official documentation](https://github.com/resourge/schema).