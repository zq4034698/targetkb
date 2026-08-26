import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TargetKB',
  description: 'How TargetKB handles your images and privacy.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <main className="legal"><nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href="/">Compress an image</a></nav><article className="legal-main"><p className="eyebrow"><span /> TargetKB</p><h1>Privacy Policy</h1><p className="updated">Last updated: August 26, 2026</p><p>TargetKB is designed to make image compression simple without asking you to hand over more data than necessary.</p><h2>Images and files</h2><p>When you use the image compressor, image processing happens locally in your browser whenever your device supports it. TargetKB does not create an account for you or intentionally keep your original images.</p><h2>Analytics and basic logs</h2><p>If you choose “Accept analytics”, Google Analytics collects aggregated usage information such as pages viewed, browser and device category, approximate location, and interaction events. We use it to understand which tools are useful. We do not send your image files or image contents to Google Analytics.</p><h2>Cookies</h2><p>Analytics is optional. We load Google Analytics only after you choose to accept it. We do not use advertising cookies in the current version. You can decline analytics without affecting image processing.</p><h2>Third-party links</h2><p>TargetKB may link to third-party services. Their privacy practices are governed by their own policies.</p><h2>Contact</h2><p>For privacy questions, contact us through the TargetKB GitHub project.</p></article></main>;
}
