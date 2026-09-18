import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';

export const metadata: Metadata = {
  title: 'Convert PNG to JPG — Free Online PNG to JPG Converter | TargetKB',
  description: 'Convert PNG to JPG free online in your browser. Make PNG files smaller and upload-ready with no sign-up; process up to 10 images.',
  alternates: { canonical: '/convert-png-to-jpg' },
};

export default function Page() {
  return <TransformLanding
    title="Convert PNG to JPG — free online"
    description="Turn PNG files into upload-ready JPGs in your browser. Start with a clear 1MB JPG, or choose an exact limit when a form requires a smaller file."
    toolHref="/?format=jpg&target=1mb"
    ctaLabel="Convert PNG to JPG"
    steps={[
      'Open the converter with JPG already selected as the output format.',
      'Choose one PNG image or upload up to 10 PNG files.',
      'Download your JPG files, or choose a stricter KB or MB limit before exporting.',
    ]}
    faq="Does converting PNG to JPG remove transparency?"
    faqAnswer="Yes. JPG does not support transparency, so transparent PNG areas are exported on a white background. Keep the PNG if you need the transparent version."
    relatedGuide={{ href: '/guides/how-to-convert-image-to-jpg', label: 'Read the full guide: how to convert an image to JPG' }}
  />;
}
