import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress an Image to 150KB | TargetKB',
  description: 'Make a photo or image under 150KB for profiles, forms, and website uploads while keeping useful detail.',
  alternates: { canonical: '/guides/how-to-compress-image-to-150kb' },
};

export default function Page() {
  return <GuideArticle
    label="150KB image guide"
    title="How to compress an image to 150KB"
    intro="A 150KB upload limit is common when a website needs a small but still recognizable photo. The simplest way to meet it is to set the exact limit first, then resize only when the image needs more room to stay clear."
    sections={[
      { heading: 'Use the exact 150KB limit', body: <><p>When a form says the file must be under 150KB, a vague “compress image” setting can still leave the result too large. Start with an exact target so the file is ready to upload without repeated trial and error.</p><p><a href="/compress-image-to-150kb">Open Compress Image to 150KB</a> and upload a JPG, PNG, WebP, or HEIC file.</p></> },
      { heading: 'Resize large photos before strong compression', body: <><p>Phone and camera images often contain far more pixels than a profile image or ordinary online form can display. Reducing the dimensions before aggressive compression usually preserves faces, edges, and text more effectively.</p><p>Use <a href="/resize-image">Resize Image</a> when the destination gives a recommended width or height.</p></> },
      { heading: 'Choose JPG for most photographs', body: <><p>JPG is usually the best format for a photograph under 150KB. PNG is helpful for transparency or sharp graphics, but a photographic PNG often stays much larger at the same dimensions.</p><p>If the upload accepts JPG, use <a href="/convert-image-to-jpg">Convert Image to JPG</a> before setting the file-size limit.</p></> },
      { heading: 'Check the result before uploading', body: <><p>Open the final image and check the details that matter at its actual display size. If text or a face looks soft, resize more deliberately or start from a clearer original rather than repeatedly compressing the downloaded file.</p><p>Need a smaller or larger limit? Try <a href="/compress-image-to-100kb">100KB</a> or <a href="/compress-image-to-200kb">200KB</a>.</p></> },
    ]}
  />;
}
