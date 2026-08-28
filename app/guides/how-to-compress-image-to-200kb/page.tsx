import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress an Image to 200KB | TargetKB',
  description: 'Make a JPG, PNG, WebP, or HEIC image under 200KB for email, online applications, and profile-photo uploads without unnecessary quality loss.',
  alternates: { canonical: '/guides/how-to-compress-image-to-200kb' },
};

export default function Page() {
  return <GuideArticle
    label="200KB image guide"
    title="How to compress an image to 200KB"
    intro="A 200KB file limit gives photos more room than a strict 50KB or 100KB requirement, but an original phone image is usually still far too large. The goal is to remove pixels and data that the destination will not use while keeping the important detail clear."
    sections={[
      { heading: 'Use the stated 200KB limit as your starting point', body: <><p>If a form says “200KB maximum”, exporting a file that is merely smaller than the original is not enough. It must be below the limit. An exact-size compressor removes the guesswork by optimizing toward the maximum file size you were given.</p><p><a href="/compress-image-to-200kb">Open Compress Image to 200KB</a>, then upload a JPG, PNG, WebP, or HEIC photo.</p></> },
      { heading: 'Resize oversized photos before squeezing quality', body: <><p>A modern phone image may be 3,000 pixels wide or more. For a profile image, email attachment, or application upload, that resolution is often unnecessary. Reducing dimensions before aggressive JPEG compression usually keeps edges, faces, and text looking cleaner.</p><p>Use <a href="/resize-image">Resize Image</a> when the destination provides a recommended width or height. Keep the original aspect ratio unless it specifically requires a square or passport-photo crop.</p></> },
      { heading: 'Choose JPG for photographs and PNG for graphics only when needed', body: <><p>For photographs, JPG is normally the most practical format under 200KB. It can preserve a natural-looking photo at a much smaller size. PNG is useful for graphics, screenshots, and transparency, but it often stays larger than a comparable JPG.</p><p>If an upload portal accepts JPG, converting a large photo first can make the result clearer at the same 200KB limit. Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> when needed.</p></> },
      { heading: 'Check the result for the detail that matters', body: <><p>Before uploading, open the compressed image at the size people will actually see. Check faces in profile photos, small text in document captures, and any required ID details. If it looks soft, reduce dimensions more deliberately or start with a better-lit original instead of repeatedly compressing an already-compressed file.</p></> },
      { heading: 'Common 200KB upload workflows', body: <><ul><li><strong>Email:</strong> compress several photos to around 200KB each to keep attachments practical.</li><li><strong>Applications and registrations:</strong> confirm the accepted format, dimensions, and file-size limit before uploading.</li><li><strong>Profile images:</strong> crop the subject cleanly, then optimize for the requested maximum size.</li><li><strong>Website uploads:</strong> use the page’s displayed dimensions as a guide; large originals are rarely necessary.</li></ul><p>Need a smaller limit instead? See <a href="/guides/how-to-compress-image-to-100kb">how to compress an image to 100KB</a>.</p></> },
    ]}
  />;
}
