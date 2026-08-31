import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress a Photo to 500KB | TargetKB',
  description: 'Learn how to make a photo or picture under 500KB for email, websites, and upload forms while preserving useful detail.',
  alternates: { canonical: '/guides/how-to-compress-photo-to-500kb' },
};

export default function Page() {
  return <GuideArticle
    label="500KB photo guide"
    title="How to compress a photo to 500KB"
    intro="A 500KB target gives a photo far more room than a strict form limit, while still making uploads and sharing much easier. It is a practical middle ground for clear photos that do not need their original camera resolution."
    sections={[
      { heading: 'Set an exact 500KB target', body: <><p>If you need a photo to be below 500KB, work from the limit directly. This is more reliable than exporting at a random quality percentage, which can leave the file too large or remove more detail than necessary.</p><p><a href="/compress-image-to-500kb">Open Compress Photo to 500KB</a> and upload your JPG, PNG, WebP, or HEIC file.</p></> },
      { heading: 'Resize extra-large photos first', body: <><p>A 4,000-pixel phone photo has far more data than most email messages, web pages, and upload forms need. Reducing the dimensions before compression often produces a clearer 500KB result than keeping the original resolution and using very low JPEG quality.</p><p>Use <a href="/resize-image">Resize Image</a> when you know the maximum width or height you need.</p></> },
      { heading: 'Use JPG for a smaller photo file', body: <><p>JPG is usually the practical choice for photographs when file size matters. PNG is better for transparency or sharp graphics, but it can remain larger. If the destination accepts JPG, converting first often makes it easier to reach 500KB.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> when needed.</p></> },
      { heading: 'When 500KB is a useful target', body: <><ul><li><strong>Email:</strong> a clear individual photo that remains practical to attach.</li><li><strong>Website uploads:</strong> a normal content image that is not a tiny thumbnail.</li><li><strong>Online portals:</strong> a mid-size image limit when 100KB is too restrictive.</li><li><strong>Photo sharing:</strong> a smaller copy that is easier to send than the camera original.</li></ul><p>For a stricter upload limit, see <a href="/guides/how-to-compress-image-to-100kb">how to reduce a photo size to 100KB</a>.</p></> },
    ]}
  />;
}
