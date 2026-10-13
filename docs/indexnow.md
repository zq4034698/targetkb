# Published-page update notifications

After a successful production deployment, notify IndexNow only about pages that were actually added or changed:

```sh
npm run indexnow -- /resize-passport-photo /guides/reduce-image-size-for-online-forms
```

This command checks the published text verification key and every page's HTTP 200/self-canonical response before posting once to the official shared endpoint. It rejects HTTP, www, other hosts, credentials, queries and fragments; it deduplicates URLs and caps a batch at 100. It is not a scheduled full-sitemap submission and does not run on visitors' devices.

The key is served by the root `.txt` route, not included in the sitemap. Keep that route in future deployments. No image data, analytics data or account credentials are sent; the request includes the site host, verification key, key location and explicit public page URLs.

HTTP 200 means the notification was received. HTTP 202 means received with ownership validation still pending. Neither confirms crawling, indexing or improved rankings. Do not repeatedly submit unchanged URLs or immediately retry failures/429 responses. Check Bing Webmaster Tools for actual index status.

Sources: [IndexNow protocol](https://www.indexnow.org/documentation), [official participating endpoints](https://www.indexnow.org/faq).
