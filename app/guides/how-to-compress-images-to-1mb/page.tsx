import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress Images to 1MB | TargetKB',
  description: 'Make large photos and images under 1MB for email, uploads, and sharing while keeping useful detail.',
  alternates: { canonical: '/guides/how-to-compress-images-to-1mb' },
};

export default function Page() {
  return <GuideArticle
    label="1MB image guide"
    title="How to compress images to 1MB"
    intro="A 1MB limit is roomy enough for a clear photo, but original phone and camera files can still be much larger. The reliable approach is to use the exact limit, then resize only when the image needs more room to stay clear."
    sections={[
      { heading: 'Start with the exact 1MB limit', body: <><p>When an upload says “maximum 1MB”, set the compressor to 1MB instead of guessing a JPEG quality percentage. TargetKB works from the file-size limit and aims for the clearest result below it.</p><p><a href="/compress-image-to-1mb">Open Compress Images to 1MB</a> and upload one image or a batch of up to 10.</p></> },
      { heading: 'Resize very large camera images when needed', body: <><p>A high-resolution photo may not need every original pixel for email, marketplace listings, or a standard upload form. Reducing dimensions before strong compression usually preserves faces, product detail, and text more effectively.</p><p>Use <a href="/resize-image">Resize Image</a> if you know the display size or maximum dimensions.</p></> },
      { heading: 'Use the right format for the image', body: <><p>JPG is usually the most efficient format for photographs. WebP can work well for modern web use. PNG is best for transparency and sharp graphics, but a photographic PNG may remain much larger than an equivalent JPG.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> when you need a more compact photo file.</p></> },
      { heading: 'Check batch totals for email attachments', body: <><p>One image under 1MB is different from ten images under 1MB. If you are sending several attachments, choose a lower target per image so the whole message stays manageable. For that workflow, see <a href="/guides/how-to-compress-images-for-email">how to compress images for email</a>.</p></> },
    ]}
  />;
}
