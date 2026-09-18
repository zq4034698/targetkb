import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Convert an Image to JPG | TargetKB',
  description: 'Convert PNG, WebP, HEIC, and other image files to JPG online, then reduce the JPG size when an upload has a file limit.',
  alternates: { canonical: '/guides/how-to-convert-image-to-jpg' },
};

export default function Page() {
  return <GuideArticle
    label="JPG conversion guide"
    title="How to convert an image to JPG"
    intro="JPG is a widely accepted format for photographs, online forms, email attachments, and many website uploads. Converting an image to JPG can also make it much easier to meet a strict file-size limit."
    sections={[
      { heading: 'Choose JPG when a smaller photo file is useful', body: <><p>JPG is designed for photographs and usually creates a smaller file than a photographic PNG. It is a practical choice when an upload form accepts JPG or JPEG and you do not need transparency.</p><p><a href="/convert-image-to-jpg">Open Convert Image to JPG</a> to process PNG, WebP, HEIC, and other supported image files.</p></> },
      { heading: 'Converting a PNG file?', body: <><p>PNG is useful for graphics and transparent backgrounds, while JPG is usually better for ordinary photos and smaller uploads. When your starting file is PNG, use the dedicated <a href="/convert-png-to-jpg">PNG to JPG converter</a>. Transparent areas will be placed on a white background because JPG does not support transparency.</p></> },
      { heading: 'Set a file-size target when the upload has a limit', body: <><p>Conversion and compression are different steps. If a website says a file must be under 100KB, 200KB, or 1MB, enter that target while you convert so the final JPG is ready to upload instead of only changing the file extension.</p><p>For a strict form limit, try <a href="/compress-image-to-100kb">reduce photo size to 100KB</a>.</p></> },
      { heading: 'Resize oversized images before exporting', body: <><p>A large camera image can contain more pixels than the destination will display. Resize it close to the required dimensions first, especially for profile photos, website images, and online forms. This usually produces a clearer small JPG than lowering compression quality too far.</p><p>Use <a href="/resize-image">Resize Image</a> when you know the target width or height.</p></> },
      { heading: 'Check the final JPG before uploading', body: <><ol><li>Open the downloaded JPG and check that important details are clear.</li><li>Confirm the file size is under any stated limit.</li><li>Confirm the form accepts JPG or JPEG.</li><li>Keep the original image in case you need a larger version later.</li></ol></> },
    ]}
  />;
}
