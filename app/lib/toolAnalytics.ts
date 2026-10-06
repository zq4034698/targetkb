export const ANALYTICS_CONSENT_KEY = 'targetkb-analytics-consent';

export type ToolEventName = 'compression_start' | 'compression_success' | 'compression_error' | 'image_download';

export type ToolErrorCode =
  | 'invalid_target'
  | 'batch_limit'
  | 'unsupported_file'
  | 'decode_failed'
  | 'canvas_failed'
  | 'format_unavailable'
  | 'target_unreachable'
  | 'processing_failed';

export type ToolEventParams = {
  tool_page: 'home' | '100kb' | '200kb';
  target_kb?: number;
  output_format: 'jpg' | 'png' | 'webp';
  file_count: number;
  processed_count: number;
  language: 'en' | 'zh-CN' | 'zh-TW';
  error_code?: ToolErrorCode;
  trigger?: 'upload' | 'retry';
};

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', name: ToolEventName, params: ToolEventParams) => void;
};

const eventNames: readonly ToolEventName[] = ['compression_start', 'compression_success', 'compression_error', 'image_download'];
const errorCodes: readonly ToolErrorCode[] = ['invalid_target', 'batch_limit', 'unsupported_file', 'decode_failed', 'canvas_failed', 'format_unavailable', 'target_unreachable', 'processing_failed'];
const pending: Array<{ name: ToolEventName; params: ToolEventParams }> = [];
const maxPending = 100;
let ready = false;

function hasConsent(browser: AnalyticsWindow): boolean {
  try {
    return browser.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'accepted';
  } catch {
    return false;
  }
}

function clearPending(): void {
  pending.length = 0;
  ready = false;
}

function sanitizeParams(name: ToolEventName, params: ToolEventParams): ToolEventParams | undefined {
  const invalidTargetError = name === 'compression_error' && params?.error_code === 'invalid_target';
  if (!params || !['home', '100kb', '200kb'].includes(params.tool_page)
    || (!invalidTargetError && (typeof params.target_kb !== 'number' || !Number.isFinite(params.target_kb) || params.target_kb <= 0))
    || !['jpg', 'png', 'webp'].includes(params.output_format)
    || !Number.isInteger(params.file_count) || params.file_count < 1 || params.file_count > 10
    || !Number.isInteger(params.processed_count) || params.processed_count < 0 || params.processed_count > 10
    || !['en', 'zh-CN', 'zh-TW'].includes(params.language)
    || (params.error_code !== undefined && !errorCodes.includes(params.error_code))
    || (params.trigger !== undefined && !['upload', 'retry'].includes(params.trigger))) {
    return undefined;
  }

  // Copy only the public allowlist, even if a caller supplies extra properties.
  const sanitized: ToolEventParams = {
    tool_page: params.tool_page,
    output_format: params.output_format,
    file_count: params.file_count,
    processed_count: params.processed_count,
    language: params.language,
  };
  if (!invalidTargetError) sanitized.target_kb = params.target_kb;
  if (params.error_code !== undefined) sanitized.error_code = params.error_code;
  if (params.trigger !== undefined) sanitized.trigger = params.trigger;
  return sanitized;
}

function emit(browser: AnalyticsWindow, name: ToolEventName, params: ToolEventParams): void {
  // Re-check consent at emission, including each previously queued event.
  if (!hasConsent(browser) || typeof browser.gtag !== 'function') return;
  try {
    browser.gtag('event', name, params);
  } catch {
    // Analytics must never interrupt compression or downloads.
  }
}

/** Records safe tool metrics only after consent. Never buffers pre-consent activity. */
export function trackToolEvent(name: ToolEventName, params: ToolEventParams): void {
  try {
    if (typeof window === 'undefined') return;
    const browser = window as AnalyticsWindow;
    if (!hasConsent(browser)) {
      clearPending();
      return;
    }
    if (!eventNames.includes(name)) return;
    const sanitized = sanitizeParams(name, params);
    if (!sanitized) return;
    if (ready && typeof browser.gtag === 'function') {
      emit(browser, name, sanitized);
      return;
    }
    if (pending.length < maxPending) pending.push({ name, params: sanitized });
  } catch {
    // Defensive against inaccessible storage and unusual browser integrations.
  }
}

/** Call after GA's js/config commands, e.g. the initialization Script's onReady. */
export function flushToolEvents(): void {
  try {
    if (typeof window === 'undefined') return;
    const browser = window as AnalyticsWindow;
    if (!hasConsent(browser)) {
      clearPending();
      return;
    }
    if (typeof browser.gtag !== 'function') return;
    ready = true;
    const events = pending.splice(0);
    for (const event of events) emit(browser, event.name, event.params);
  } catch {
    // Loading/blocked analytics must not affect the tool.
  }
}
