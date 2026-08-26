import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TargetKB',
  description: 'How TargetKB handles your images and privacy.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <main className="legal"><nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href="/">Compress an image</a></nav><article className="legal-main"><p className="eyebrow"><span /> TargetKB</p><h1>Privacy Policy</h1><p className="updated">Last updated: August 26, 2026</p><p>TargetKB is designed to make image compression simple without asking you to hand over more data than necessary.</p><h2>Images and files</h2><p>When you use the image compressor, image processing happens locally in your browser whenever your device supports it. TargetKB does not create an account for you or intentionally keep your original images.</p><h2>Analytics and basic logs</h2><p>Our hosting provider may collect limited technical information needed to operate, secure, and improve the website, such as device type, browser, pages visited, and error information. This information is not used to identify you personally.</p><h2>Cookies</h2><p>TargetKB does not use advertising cookies in the current version. If we add optional analytics or payment features in the future, this policy will be updated before those changes take effect.</p><h2>Third-party links</h2><p>TargetKB may link to third-party services. Their privacy practices are governed by their own policies.</p><h2>Contact</h2><p>For privacy questions, contact us through the TargetKB GitHub project.</p></article></main>;
}
