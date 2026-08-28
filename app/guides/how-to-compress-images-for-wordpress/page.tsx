import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress Images for WordPress | TargetKB',
  description: 'Make WordPress images smaller before upload by resizing to the display size, choosing the right format, and using practical file-size targets.',
  alternates: { canonical: '/guides/how-to-compress-images-for-wordpress' },
};

export default function Page() {
  return <GuideArticle
    label="WordPress image guide"
    title="How to compress images for WordPress"
    intro="A heavy image is one of the easiest ways to slow a WordPress page down. The useful workflow is simple: remove oversized dimensions first, choose a suitable format, then compress only as far as the layout needs."
    sections={[
      { heading: 'Resize to the largest size your layout will display', body: <><p>Uploading a 4,000-pixel camera original for a 1,200-pixel blog image adds data that visitors will never see. Check the maximum displayed width in your theme, page builder, or image block, then resize close to that size before compression.</p><p>Use <a href="/resize-image-for-wordpress">Resize Image for WordPress</a> when you need to set the dimensions first.</p></> },
      { heading: 'Use a practical starting target', body: <><p>For an ordinary article image, 200KB to 500KB is often a sensible range. A large, detailed hero image may need more room, while a small card image or thumbnail can use less. File size should follow the job of the image, not one fixed rule for every upload.</p><p><a href="/compress-image-for-wordpress">Open the WordPress image compressor</a> with a 200KB starting target.</p></> },
      { heading: 'Choose JPG for photos and consider WebP when supported', body: <><p>JPG is widely compatible and usually efficient for photographs. WebP can also be a strong choice on a modern WordPress setup, but check that your host, theme, and image workflow support it. PNG is best reserved for transparency, logos, or sharp screenshots because photographic PNG files are often larger.</p><p>Use <a href="/convert-image-to-webp">Convert Image to WebP</a> when that format fits your site.</p></> },
      { heading: 'Do not compress an already-compressed image again', body: <><p>Each extra JPG compression pass can remove more visible detail. Keep an original source image outside the media library, then make a fresh optimized version whenever you need a different size. This gives you better results for a hero image, blog image, and social share image.</p></> },
      { heading: 'A simple pre-upload checklist', body: <><ol><li>Resize the image to the largest display width it needs.</li><li>Use JPG for photos, or WebP when your WordPress setup supports it.</li><li>Start with 200KB to 500KB for a standard content image.</li><li>Open the final file and check text, faces, and product detail before uploading.</li></ol><p>For a broader explanation of image quality, see <a href="/guides/compress-image-without-losing-quality">how to compress an image without losing too much quality</a>.</p></> },
    ]}
  />;
}
