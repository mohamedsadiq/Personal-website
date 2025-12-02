---
trigger: always_on
---

When handling user-uploaded or remote images, always generate and apply a blur placeholder before rendering. Use Next.js <Image> with `placeholder="blur"` and a base64 blurDataURL. Do not render full-res images until the blur is set. If blur generation fails, fall back to a neutral low-opacity background.

Requirements:
- Generate blurDataURL on the server (do not compute in the client)
- Use `next/image` with `placeholder="blur"` and `blurDataURL`
- Cache the placeholder alongside the image
- Handle failure gracefully (still render with a fallback)
