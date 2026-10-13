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
    toolHref="/compress-image-to-1mb"
    sections={[
      { heading: 'Start with the stated byte limit', body: <><p>TargetKB uses 1MB = 1,048,576 bytes. If your destination explicitly limits a file to 1,000,000 bytes, choose 976KB (999,424 bytes) instead. Check the <a href="/guides/image-compression-limits">file-size unit reference</a> and the actual downloaded bytes rather than relying on a rounded label.</p><p><a href="/compress-image-to-1mb">Open Compress Images to 1MB</a> and upload one image or a batch of up to 10. If your destination allows a larger file and you need more detail, you can use the <a href="/compress-image-to-2mb">2MB preset</a>; do not use it for a strict 1MB maximum.</p></> },
      { heading: 'Resize very large camera images when needed', body: <><p>A high-resolution photo may not need every original pixel for email, marketplace listings, or a standard upload form. Reducing dimensions before strong compression usually preserves faces, product detail, and text more effectively.</p><p>Use <a href="/resize-image">Resize Image</a> if you know the display size or maximum dimensions.</p></> },
      { heading: 'Use the right format for the image', body: <><p>JPG is usually practical for photographs. WebP can work well for web use. PNG can suit sharp graphics, but a photographic PNG may remain much larger than an equivalent JPG. The current TargetKB compressor does not preserve transparency in any output format; keep your original and use another tool when transparency is required.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> when you need a more compact photo file.</p></> },
      { heading: 'Check batch totals for email attachments', body: <><p>One image under 1MB is different from ten images under 1MB. If you are sending several attachments, choose a lower target per image so the whole message stays manageable. For that workflow, see <a href="/guides/how-to-compress-images-for-email">how to compress images for email</a>.</p></> },
    ]}
  />;
}
