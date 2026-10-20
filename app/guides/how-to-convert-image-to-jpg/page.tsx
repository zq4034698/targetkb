import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Convert an Image to JPG | TargetKB',
  description: 'Convert PNG, WebP or HEIC to JPG in your browser. Follow the steps, choose an upload size limit, and fix white backgrounds or conversion errors.',
  alternates: { canonical: '/guides/how-to-convert-image-to-jpg' },
};

export default function Page() {
  return <GuideArticle
    label="JPG conversion guide"
    title="How to convert an image to JPG"
    intro="JPG is a widely accepted format for photographs, online forms, email attachments, and many website uploads. Converting an image to JPG can also make it much easier to meet a strict file-size limit."
    sections={[
      { heading: 'Convert an image to JPG in four steps', body: <><ol><li><a href="/convert-image-to-jpg#compressor">Open the JPG converter</a>. JPG output and a 1MB limit (1,048,576 bytes per image) are preselected.</li><li>Before choosing files, set the size limit and any required resize settings. Processing starts as soon as you select images.</li><li>Select up to 10 PNG, WebP, JPG or supported HEIC images. Each image is processed locally in your browser.</li><li>Download the JPG files and check their dimensions, size and readability. Keep your originals.</li></ol><p>Renaming <code>photo.png</code> to <code>photo.jpg</code> does not convert the image data. Use the converter to create a JPEG-encoded file. JPG and JPEG name the same image format.</p></> },
      { heading: 'Choose JPG when a smaller photo file is useful', body: <><p>JPG is designed for photographs and usually creates a smaller file than a photographic PNG. It is a practical choice when an upload form accepts JPG or JPEG and you do not need transparency.</p><p><a href="/convert-image-to-jpg">Open Convert Image to JPG</a> to process PNG, WebP, HEIC, and other supported image files.</p></> },
      { heading: 'Converting a PNG file?', body: <><p>PNG is useful for graphics and transparent backgrounds, while JPG is usually better for ordinary photos and smaller uploads. When your starting file is PNG, use the dedicated <a href="/convert-png-to-jpg">PNG to JPG converter</a>. Transparent areas will be placed on a white background because JPG does not support transparency.</p></> },
      { heading: 'Convert to JPG and compress for an upload limit', body: <><p>Conversion changes the format; compression reduces file size. TargetKB can do both in the same operation. The target is a maximum size, not a request to pad the result to an exact number of bytes. A converted file can be smaller than the target.</p><p>Choose the preset that matches your form: <a href="/compress-image-to-100kb">JPG under 100KB</a>, <a href="/compress-image-to-150kb">under 150KB</a>, <a href="/compress-image-to-200kb">under 200KB</a>, or <a href="/compress-image-to-1mb">under 1MB</a>. These tools use 1KB = 1,024 bytes. If the form uses decimal bytes, use the strict decimal-limit option and check the downloaded byte size. Small limits may reduce quality and pixel dimensions.</p></> },
      { heading: 'Why is the background white or the JPG larger?', body: <><p>JPG cannot store transparent pixels. TargetKB exports transparent areas on white, so keep your PNG original if you need a transparent logo or cutout. For graphics with fine text, inspect the JPG at full size: lossy encoding can soften edges.</p><p>Converting an already efficient WebP or HEIC file to JPG does not guarantee a smaller file. Use JPG when the destination requires it; keep the original format when it is accepted and gives a better result.</p></> },
      { heading: 'What if the image cannot be converted?', body: <><p>If a HEIC file fails to decode, try exporting a JPEG copy from the device or app that created it, then compress that copy. The browser-side decoder does not guarantee support for every HEIC file. Use the <a href="/convert-heic-to-jpg">HEIC to JPG tool</a> for the same local workflow.</p><p>If an upload still rejects a converted image, check its byte size, pixel dimensions and accepted formats separately. A JPG extension alone does not satisfy all upload rules. PDF documents are not supported by this image converter.</p></> },
      { heading: 'Resize oversized images before exporting', body: <><p>A large camera image can contain more pixels than the destination will display. Resize it close to the required dimensions first, especially for profile photos, website images, and online forms. This usually produces a clearer small JPG than lowering compression quality too far.</p><p>Use <a href="/resize-image">Resize Image</a> when you know the target width or height.</p></> },
      { heading: 'Check the final JPG before uploading', body: <><ol><li>Open the downloaded JPG and check that important details are clear.</li><li>Confirm the file size is under any stated limit.</li><li>Confirm the form accepts JPG or JPEG.</li><li>Keep the original image in case you need a larger version later.</li></ol></> },
    ]}
  />;
}
