import type { Metadata } from 'next';
import ExactSizeLanding from '../components/ExactSizeLanding';
export const metadata: Metadata = { title: 'Compress Image to 40KB — Free Online | TargetKB', description: 'Compress images to 40KB online for application forms and strict photo upload limits. Process up to 10 images.', alternates: { canonical: '/compress-image-to-40kb' } };
export default function Page() {
  return <ExactSizeLanding
    toolOnPage toolPage="40kb" size="40KB" query="40"
    title="Compress image to 40KB"
    description="Compress a photo to a 40KB file-size limit directly in your browser. JPG is selected by default. Process up to 10 images at once."
    uses={[
      { heading: 'Application photos', text: 'Check the portal’s file-size and pixel limits before selecting a photo.' },
      { heading: 'Signature images', text: 'If a form requires 140 × 60 pixels, for example, set the resize options before selecting the image and verify the downloaded dimensions.' },
      { heading: 'Batch compression', text: 'The selected size limit applies separately to each image.' },
    ]}
    guide="The default 40KB limit is 40,960 bytes. If your form requires less than 40,000 bytes, use the 39KB suggestion, which caps the result at 39,936 bytes."
    faqs={[
      { question: 'Will my photo be exactly 40KB?', answer: 'No. The limit is a maximum, and the result may be smaller. The tool reports an error if it cannot meet the selected size limit.' },
      { question: 'Can I keep the required pixel dimensions?', answer: 'Compression may reduce pixel dimensions. Check the downloaded width and height and compare them with the form requirements before uploading.' },
    ]}
  />;
}
