import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress an Image to 100KB | TargetKB',
  description: 'Learn how to make a JPG, PNG, WebP, or HEIC image fit under 100KB for forms, job applications, and profile uploads.',
  alternates: { canonical: '/guides/how-to-compress-image-to-100kb' },
};

export default function Page() {
  return <GuideArticle
    label="100KB image guide"
    title="How to compress an image to 100KB"
    intro="A 100KB limit is common on online forms, job portals, profile uploads, and document systems. The reliable approach is to work from the limit itself instead of repeatedly guessing a JPEG quality setting."
    sections={[
      { heading: 'Start with the exact 100KB limit', body: <><p>When a website says “maximum 100KB”, a 101KB file can still be rejected. Start with an exact-size tool that works backwards from the limit, rather than exporting at a random quality percentage.</p><p><a href="/compress-image-to-100kb">Open Compress Image to 100KB</a> and upload a JPG, PNG, WebP, or HEIC image.</p></> },
      { heading: 'Reduce dimensions before removing too much detail', body: <><p>A phone photo can be several thousand pixels wide, even when the form only displays a small square thumbnail. Reducing its width and height first removes detail the form will never show, helping the final image stay clearer at 100KB.</p><p>For portrait and profile images, use a sensible square crop before compression. Avoid stretching a photo to force it into a required shape.</p></> },
      { heading: 'Use JPG for photos when the file must be small', body: <><p>JPG is normally the practical choice for photographs under a strict limit. PNG is useful for sharp screenshots or transparent logos, but it can remain much larger. If the portal accepts JPG, converting a photo before compression usually gives the best chance of fitting under 100KB.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> if you need a smaller photo file first.</p></> },
      { heading: 'Leave a small safety buffer for strict forms', body: <><p>Some portals measure the file slightly differently or add metadata checks. If the requirement is “under 100KB”, target a little below that number when the image still looks clear. Open the downloaded file and check that faces, text, or document details remain readable before submitting.</p></> },
      { heading: 'Common 100KB upload workflows', body: <><ul><li><strong>Online forms:</strong> check the accepted format and pixel dimensions as well as file size.</li><li><strong>Job applications:</strong> use a clear headshot and follow the portal’s image rules.</li><li><strong>Visa or registration portals:</strong> crop to the requested ratio before compressing.</li><li><strong>Profile photos:</strong> a smaller square image is often clearer than an oversized original compressed too aggressively.</li></ul><p>For form-specific checks, see the <a href="/guides/reduce-image-size-for-online-forms">online form image guide</a>.</p></> },
    ]}
  />;
}
