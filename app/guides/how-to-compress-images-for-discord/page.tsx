import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress Images for Discord | TargetKB',
  description: 'Make screenshots, photos, and memes smaller for Discord while keeping text and important detail clear.',
  alternates: { canonical: '/guides/how-to-compress-images-for-discord' },
};

export default function Page() {
  return <GuideArticle
    label="Discord image guide"
    title="How to compress images for Discord"
    intro="A giant screenshot or camera photo can be inconvenient to upload and slow for others to view. The aim is not the smallest possible image — it is a lightweight image that still makes the message, meme, or screenshot easy to understand."
    sections={[
      { heading: 'Start with a practical target for the image type', body: <><p>For a normal screenshot or shared photo, 500KB to 1MB is a useful starting range. A simple meme or small avatar can often use less, while a detailed game screenshot may need more room to keep small text readable.</p><p><a href="/compress-image-for-discord">Open the Discord image compressor</a> with a 1MB target.</p></> },
      { heading: 'Resize extra-large screenshots before reducing quality', body: <><p>Modern displays can produce very wide screenshots. If people will view the image inside a chat window, they usually do not need the original pixel dimensions. Reducing width and height first often preserves text and interface detail better than forcing a low JPEG quality.</p><p>Use <a href="/resize-image">Resize Image</a> when you need to make a large screenshot more practical.</p></> },
      { heading: 'Keep screenshots and photos in the right format', body: <><p>JPG is normally efficient for photos and game captures. PNG is helpful for sharp UI screenshots, diagrams, and transparency, but it can remain larger. If a screenshot becomes too soft as JPG, try a slightly higher target or keep PNG when file size is not a concern.</p><p>Use <a href="/convert-image-to-jpg">Convert Image to JPG</a> for a smaller photo file when appropriate.</p></> },
      { heading: 'Compress a small batch consistently', body: <><p>If you are sending a sequence of screenshots, use one target across the batch so every file stays manageable. TargetKB can process up to 10 images at once, which is useful for a bug report, game highlights, or a visual walkthrough.</p></> },
      { heading: 'Check small text before sharing', body: <><p>Open the final image and zoom in on the parts other people need to read: error messages, UI labels, stats, or chat text. If those details are not clear, increase the target or start from a full-resolution original instead of repeatedly compressing a downloaded file.</p><p>For messaging by email instead, see <a href="/guides/how-to-compress-images-for-email">how to compress images for email attachments</a>.</p></> },
    ]}
  />;
}
