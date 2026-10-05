# Tool usage events

`app/lib/toolAnalytics.ts` records these optional Google Analytics events. Compression and downloads keep working if analytics is declined, unavailable or blocked.

| Event | Granularity |
| --- | --- |
| `compression_start` | One processing attempt for a selected batch, including a retry; `processed_count` is 0. |
| `compression_success` | One batch attempt only when every selected image produces a result. `processed_count` equals the number of successful results. |
| `compression_error` | One safe error category for a failed batch attempt, including partial failure. `processed_count` counts the successful results in that attempt. A partially successful batch is not also a `compression_success`. |
| `image_download` | One click on an individual result's download link; `processed_count` is 1. This measures download intent, not a confirmed completed transfer. |

## Allowed parameters

- `tool_page`: `home`, `100kb` or `200kb`; identifies the tool entry page, not an arbitrary URL.
- `target_kb`: a finite positive number; omitted for `invalid_target` failures instead of recording invalid input.
- `output_format`: `jpg`, `png` or `webp`.
- `file_count`: integer 1–10; selected batch count, capped at 10 for `batch_limit` validation errors. A download retains its batch context.
- `processed_count`: integer 0–10; interpretation follows the event table.
- `language`: `en`, `zh-CN` or `zh-TW`.
- `trigger` (optional): `upload` or `retry`.
- `error_code` (optional): `invalid_target`, `batch_limit`, `unsupported_file`, `decode_failed`, `canvas_failed`, `target_unreachable` or `processing_failed`.

No file names, file contents, raw errors, user-provided URLs or identifiers are accepted. The helper copies only this parameter allowlist and rejects invalid values even if callers bypass TypeScript.

## Consent and initialization

`trackToolEvent(name, params)` checks `localStorage['targetkb-analytics-consent'] === 'accepted'` on every call. Missing, declined or inaccessible storage discards activity without queuing it. Calls during server rendering are harmless.

Once consent is accepted, events may wait in a bounded memory queue (maximum 100 events) until AnalyticsConsent calls `flushToolEvents()` after the Google tag's `js` and `config` initialization commands. The helper does not push events into `dataLayer` ahead of initialization. The flush checks consent again, removes queued entries and delivers them in order. The initialization Script defers the flush to a microtask because vinext invokes inline `onReady` before inserting the script. The external tag also flushes on readiness; both paths cover an already initialized Script remount. Declining consent clears pending activity the next time the helper is called; it cannot later replay pre-consent activity.

Events are best effort: reloads discard pending entries, excess queue entries are dropped, and tag failures do not trigger retries. Repeated flushes do not duplicate events. The helper makes no separate network requests.

In GA4, add event-scoped custom dimensions for `tool_page`, `output_format`, `language`, `trigger` and `error_code` if you want those breakdowns in standard reports. Validation errors (`invalid_target` and `batch_limit`) occur before `compression_start`; count them separately. For started processing attempts, compare `compression_success` plus processing errors with `compression_start`. Downloads are clicks, so multiple downloads in one batch can produce multiple events. These counts reflect only consenting visitors and are not a count of every site's user.

## Local verification

Run `npm test` with the project's Node 22.13+ runtime. This invokes `node --experimental-strip-types --test tests/toolAnalytics.test.mjs`; the flag also supports the earliest Node version in the project's supported range. The tests use Node's built-in test runner and stub `window`/`gtag`; no real analytics requests are sent. They check consent rejection, storage errors, initialization order, safe payloads, invalid values, queue bounds and analytics exceptions.

These tests verify local event semantics and privacy behavior. They do not verify production GA delivery, browser extensions, or completed file transfers.
