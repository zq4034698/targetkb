import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';

export const metadata: Metadata = { title: 'Convert HEIC to JPG — Free Online | TargetKB', description: 'Convert iPhone HEIC photos to upload-friendly JPG files in your browser. Free, private, and no sign-up required.', alternates: { canonical: '/convert-heic-to-jpg' } };

export default function Page() {
  return <TransformLanding
    inlineToolPage="heic-to-jpg"
    title="Convert HEIC to JPG"
    description="Convert HEIC and HEIF photos to JPG directly on this page. The tool starts with a 1MB limit per image. Choose a larger limit before uploading if retaining detail matters more than file size."
    toolHref="/?format=jpg&target=1mb"
    ctaLabel="Convert HEIC to JPG"
    steps={[
      'JPG output and a 1MB limit (1,048,576 bytes) are selected above. Set the limit your destination allows before uploading.',
      'Choose one HEIC or HEIF photo, or up to 10 images. Processing happens locally in your browser.',
      'Download each JPG and check its dimensions, visible detail and file size. A tight limit may reduce quality or dimensions; conversion can also make a file larger.',
    ]}
    faq="What if my HEIC photo cannot be converted?"
    faqAnswer="HEIC and HEIF photos can use different encodings. TargetKB uses a browser-side decoder, but not every file can be decoded. If conversion fails, the tool shows an error. Keep the original and try exporting a JPEG from your photo app. A converted JPG is lossy and is not guaranteed to be smaller than the HEIC original."
    relatedGuide={{ href: '/guides/how-to-convert-image-to-jpg', label: 'Read the JPG conversion guide and format limitations' }}
  />;
}
