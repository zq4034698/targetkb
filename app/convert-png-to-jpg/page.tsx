import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';

export const metadata: Metadata = {
  title: 'Convert PNG to JPG — Free Online PNG to JPG Converter | TargetKB',
  description: 'Convert PNG to JPG free online in your browser. Make PNG files smaller and upload-ready with no sign-up; process up to 10 images.',
  alternates: { canonical: '/convert-png-to-jpg' },
};

export default function Page() {
  return <TransformLanding
    inlineToolPage="png-to-jpg"
    title="Convert PNG to JPG — free online"
    description="Convert PNG files to JPG directly on this page with a 1MB limit preselected. Transparent areas become white. Choose your upload limit before selecting files; tight limits may reduce detail or dimensions."
    toolHref="/?format=jpg&target=1mb"
    ctaLabel="Convert PNG to JPG"
    steps={[
      'JPG output and a 1MB limit (1,048,576 bytes) are already selected. Adjust the limit before uploading if needed.',
      'Choose one PNG image or upload up to 10 PNG files.',
      'Download each JPG and check the file size, dimensions and detail. Keep the PNG original if transparency matters.',
    ]}
    faq="Does converting PNG to JPG remove transparency?"
    faqAnswer="Yes. JPG does not support transparency, so transparent PNG areas are exported on a white background. Keep the PNG if you need the transparent version."
    relatedGuide={{ href: '/guides/how-to-convert-image-to-jpg', label: 'Read the full guide: how to convert an image to JPG' }}
  />;
}
