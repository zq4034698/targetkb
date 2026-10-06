import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Reduce a Photo Size to 100KB | TargetKB',
  description: 'Learn how to reduce a photo or picture size to under 100KB for forms, job applications, and profile uploads.',
  alternates: { canonical: '/guides/how-to-compress-image-to-100kb' },
};

export default function Page() {
  return <GuideArticle
    label="100KB photo guide"
    title="How to reduce a photo size to 100KB"
    intro="If an online form, job portal, or profile upload asks for a photo under 100KB, first check its file-size, format, and dimension requirements. Work from the exact byte limit instead of repeatedly guessing a JPEG quality setting."
    toolHref="/compress-image-to-100kb"
    sections={[
      { heading: 'Start with the exact 100KB limit', body: <><p>When a website says “maximum 100KB”, a 101KB photo can still be rejected. Start with an exact-size tool that works backwards from the limit, rather than exporting at a random quality percentage.</p><p><a href="/compress-image-to-100kb">Reduce your photo size to 100KB</a> and upload a JPG, PNG, WebP, or HEIC image.</p></> },
      { heading: 'Reduce dimensions before removing too much detail', body: <><p>A phone photo can be several thousand pixels wide. If the destination only needs a small thumbnail, reducing width and height can help preserve visible detail at 100KB. Keep any minimum or exact pixel dimensions required by the form.</p><p>Crop portrait and profile images only when the destination asks for that shape. Avoid stretching a photo to force it into a required ratio.</p></> },
      { heading: 'Use JPG for photos when the file must be small', body: <><p>JPG is normally a practical choice for photographs under a strict limit. PNG is useful for sharp screenshots or transparent logos, but it can remain much larger. If the portal accepts JPG, start with the original image and compress to JPG in one pass.</p><p>TargetKB defaults to JPG, placing transparent areas on white. Its current PNG and WebP outputs also do not preserve transparency. Keep the original and use a transparency-preserving tool when that is required.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> when JPG is the format you need.</p></> },
      { heading: 'Check whether 100KB means 100,000 or 102,400 bytes', body: <><p>TargetKB calculates 1KB as 1,024 bytes, so its 100KB target is 102,400 bytes. A destination using decimal kilobytes may enforce 100,000 bytes instead. Check the portal’s stated byte limit before choosing a target; the “100KB” label alone does not resolve that difference.</p><p>For a limit below 100,000 bytes, you can enter a custom target of 97KB, which equals 99,328 bytes in TargetKB. Check the downloaded file’s size in bytes, any required dimensions, and the readability of faces or text before submitting. Meeting the size limit alone does not guarantee acceptance.</p></> },
      { heading: 'Common 100KB upload workflows', body: <><ul><li><strong>Online forms:</strong> check the accepted format and pixel dimensions as well as file size.</li><li><strong>Job applications:</strong> use a clear headshot and follow the portal’s image rules.</li><li><strong>Visa or registration portals:</strong> crop to the requested ratio before compressing.</li><li><strong>Profile photos:</strong> a smaller square image is often clearer than an oversized original compressed too aggressively.</li></ul><p>For form-specific checks, see the <a href="/guides/reduce-image-size-for-online-forms">online form image guide</a>.</p></> },
    ]}
  />;
}
