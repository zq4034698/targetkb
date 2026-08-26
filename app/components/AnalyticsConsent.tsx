'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const measurementId = 'G-VXP85VKCDW';
const consentKey = 'targetkb-analytics-consent';

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<'loading' | 'accepted' | 'declined'>('loading');

  useEffect(() => {
    const saved = window.localStorage.getItem(consentKey);
    setChoice(saved === 'accepted' ? 'accepted' : saved === 'declined' ? 'declined' : 'loading');
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(consentKey, value);
    setChoice(value);
  };

  return <>
    {choice === 'accepted' && <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}</Script>
    </>}
    {choice === 'loading' && <aside className="analytics-consent" aria-label="Analytics cookie choice">
      <p>We use optional analytics to understand which tools are useful. Your images are never sent to analytics.</p>
      <a href="/privacy">Privacy</a>
      <div><button onClick={() => choose('declined')}>No thanks</button><button className="accept" onClick={() => choose('accepted')}>Accept analytics</button></div>
    </aside>}
  </>;
}
