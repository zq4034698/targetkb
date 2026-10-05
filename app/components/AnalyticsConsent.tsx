'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { ANALYTICS_CONSENT_KEY, flushToolEvents } from '../lib/toolAnalytics';

const measurementId = 'G-VXP85VKCDW';
const consentKey = ANALYTICS_CONSENT_KEY;

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<'loading' | 'accepted' | 'declined'>('loading');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(consentKey);
      setChoice(saved === 'accepted' ? 'accepted' : saved === 'declined' ? 'declined' : 'loading');
    } catch { setChoice('declined'); }
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    try { window.localStorage.setItem(consentKey, value); setChoice(value); }
    catch { setChoice('declined'); }
  };

  return <>
    {choice === 'accepted' && <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} onReady={flushToolEvents} />
      {/* vinext calls inline onReady before inserting the script; flush after it executes. */}
      <Script id="google-analytics" strategy="afterInteractive" onReady={() => queueMicrotask(flushToolEvents)}>{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}</Script>
    </>}
    {choice === 'loading' && <aside className="analytics-consent" aria-label="Analytics cookie choice">
      <p>We use optional analytics to understand which tools are useful. Your images are never sent to analytics.</p>
      <a href="/privacy">Privacy</a>
      <div><button onClick={() => choose('declined')}>No thanks</button><button className="accept" onClick={() => choose('accepted')}>Accept analytics</button></div>
    </aside>}
  </>;
}
