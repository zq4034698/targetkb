import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress Images for Email Attachments | TargetKB',
  description: 'Learn how to reduce photo attachment size for email while keeping images clear, including a practical target size for sending several photos.',
  alternates: { canonical: '/guides/how-to-compress-images-for-email' },
};

export default function Page() {
  return <GuideArticle
    label="Email attachment guide"
    title="How to compress images for email attachments"
    intro="Large image attachments make messages slow to send, difficult to receive, and hard to forward. You do not need a one-size-fits-all quality setting: choose a practical size per photo, then make sure all the attachments together fit your email provider’s limit."
    sections={[
      { heading: 'Start with 500KB to 1MB per photo', body: <><p>For a normal photo that someone will view on a phone or laptop, 500KB to 1MB is a useful starting range. A single photo can often stay clear at that size. If you are sending several images in one message, use a smaller target for each one.</p><p><a href="/compress-image-for-email">Open the email image compressor</a> with a 1MB target already selected.</p></> },
      { heading: 'Plan for the total attachment size, not one image alone', body: <><p>Email services limit the combined size of all files in a message. Ten images at 1MB each are very different from one image at 1MB. Decide how many photos you need to send, then choose a per-image target that leaves room for the rest of the attachments.</p><p>TargetKB can process up to 10 images in one batch, so you can apply the same sensible target consistently.</p></> },
      { heading: 'Resize phone photos when the recipient does not need full resolution', body: <><p>Phone cameras create images much larger than an email recipient usually needs. If the photo will be viewed in a message rather than printed, resize it to a reasonable display width before compressing. This normally looks better than keeping every pixel and lowering JPEG quality too far.</p><p>Use <a href="/resize-image">Resize Image</a> first when you know the desired dimensions.</p></> },
      { heading: 'Use JPG for photographs', body: <><p>JPG is usually the most efficient format for photos. PNG can be better for diagrams, screenshots, or transparency, but photographic PNG files are often unnecessarily large for email. When the recipient does not need transparency, JPG is normally the simpler choice.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> if you need to change the format first.</p></> },
      { heading: 'Check clarity before you attach and send', body: <><p>Open one of the compressed files and check the areas that matter: faces, small text, product details, or document information. If the image looks soft, increase the target slightly or begin with a higher-quality original. Avoid repeatedly compressing a file that has already been compressed.</p><p>For website-sized images instead, see <a href="/guides/how-to-compress-image-to-200kb">how to compress an image to 200KB</a>.</p></> },
    ]}
  />;
}
