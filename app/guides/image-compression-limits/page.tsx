import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'Image File Size Limits: KB, MB, Quality and Formats | TargetKB',
  description: 'Understand how TargetKB handles upload limits, file-size units, JPEG quality, PNG transparency and batches before compressing photos.',
  alternates: { canonical: '/guides/image-compression-limits' },
};

export default function Page() {
  return <GuideArticle label="Compression reference" title="How image upload limits work" intro="To meet an upload limit, check three separate requirements: file size in bytes, image dimensions in pixels, and the accepted file format. A smaller file does not automatically meet the other two requirements." sections={[
    { heading: 'Does 100KB mean exactly 100KB?', body: <><p>TargetKB produces a file at or below the selected limit; it does not add padding to make the file exactly that size. The compressor searches JPEG or WebP quality settings, then reduces dimensions if needed. A successful download can therefore be smaller than the target.</p><p><a href="/compress-image-to-100kb">Compress to 100KB</a> or <a href="/compress-image-to-150kb">compress to 150KB</a>.</p></> },
    { heading: 'KB and MB can mean different byte counts', body: <><p>TargetKB currently uses 1KB = 1,024 bytes and 1MB = 1,048,576 bytes. Some upload services use decimal units: 1KB = 1,000 bytes and 1MB = 1,000,000 bytes. If a portal rejects a result near its limit, choose a slightly lower target: 97KB for a decimal 100KB limit, or 976KB for a decimal 1MB limit.</p><p>Check the downloaded file size in bytes rather than relying on a rounded label.</p></> },
    { heading: 'Compression can change image quality and dimensions', body: <><p>JPEG and WebP compression can lose detail. Tight limits may also require fewer pixels. Keep your original file, and check faces, text and required dimensions in the downloaded result. TargetKB does not guarantee that a compressed image will be accepted by a visa, passport or application portal.</p><p><a href="/resize-image">Set required pixel dimensions</a> before compressing.</p></> },
    { heading: 'What happens to transparent PNG backgrounds?', body: <><p>JPG does not support transparency. When TargetKB converts an image to JPG, transparent areas are placed on white. The current compressor uses an opaque canvas for its other outputs too, so it is not suitable when you must preserve transparency. Keep your original transparent PNG for that purpose.</p><p><a href="/convert-png-to-jpg">Convert PNG to JPG</a> when a white background is acceptable.</p></> },
    { heading: 'Does the target apply to a whole batch?', body: <><p>No. TargetKB processes up to 10 images, with the selected size limit applied to each file individually. Ten images under 1MB do not make a batch under 1MB. For attachments with a total limit, select a lower target per image and check the combined size.</p><p><a href="/compress-image-for-email">Prepare images for email</a>.</p></> },
  ]} />;
}
