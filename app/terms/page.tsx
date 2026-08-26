import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | TargetKB',
  description: 'Terms for using TargetKB image compression tools.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <main className="legal"><nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href="/">Compress an image</a></nav><article className="legal-main"><p className="eyebrow"><span /> TargetKB</p><h1>Terms of Use</h1><p className="updated">Last updated: August 26, 2026</p><p>By using TargetKB, you agree to these terms.</p><h2>Use of the service</h2><p>TargetKB provides image compression and conversion tools for lawful personal and business use. You are responsible for ensuring you have the rights to use every file you process.</p><h2>Availability</h2><p>We aim to keep TargetKB available and useful, but the service is provided as-is and may be changed, paused, or discontinued without notice.</p><h2>Your responsibility</h2><p>Always keep an original copy of important files. Compression can change image quality, file format, and dimensions; you should review the downloaded result before submitting it to a form or platform.</p><h2>Prohibited use</h2><p>Do not use TargetKB to process illegal content, attempt to disrupt the service, or bypass technical limits.</p><h2>Changes to these terms</h2><p>We may update these terms as the product develops. Continued use after an update means you accept the revised terms.</p></article></main>;
}
