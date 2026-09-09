import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress a JPEG to 80KB | TargetKB',
  description: 'Make a JPEG or JPG file under 80KB for strict upload forms while preserving the clearest practical photo quality.',
  alternates: { canonical: '/guides/how-to-compress-jpeg-to-80kb' },
};

export default function Page() {
  return <GuideArticle
    label="80KB JPEG guide"
    title="How to compress a JPEG to 80KB"
    intro="An 80KB photo limit leaves little room for a full-resolution camera image. The best approach is to start with the exact maximum, reduce unneeded dimensions, and keep enough detail for the upload form to accept and display the photo clearly."
    sections={[
      { heading: 'Use an exact 80KB target', body: <><p>If the upload limit is 80KB, a file that is even slightly larger can be rejected. Use an exact-size compressor rather than exporting JPEGs repeatedly at random quality percentages.</p><p><a href="/compress-image-to-80kb">Open Compress JPEG to 80KB</a> and upload your JPEG or JPG file.</p></> },
      { heading: 'Resize large photos before compressing too aggressively', body: <><p>Most form uploads show a small image, not a full camera-resolution photo. Reducing the width and height first removes pixels the form will not use, allowing the remaining photo to stay clearer at 80KB.</p><p>Use <a href="/resize-image">Resize Image</a> when the form gives you a recommended pixel size.</p></> },
      { heading: 'Leave a small buffer below the limit', body: <><p>When a portal says “maximum 80KB”, aim slightly below the maximum if the image still looks clear. This makes the upload less likely to fail because of metadata or differences in how a website calculates file size.</p></> },
      { heading: 'Check the final JPEG before uploading', body: <><ol><li>Confirm the downloaded file is below 80KB.</li><li>Check the required dimensions and crop.</li><li>Open the photo and make sure the face, text, or document detail is still clear.</li><li>Confirm that the portal accepts JPG or JPEG.</li></ol><p>For a slightly larger strict limit, see <a href="/guides/how-to-compress-image-to-100kb">how to reduce a photo size to 100KB</a>.</p></> },
    ]}
  />;
}
