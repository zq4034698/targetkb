import type { Metadata } from 'next';
import GuideArticle from '../components/GuideArticle';

export const metadata: Metadata = {
  title: 'Free Image Converter — JPG, PNG, WebP & HEIC | TargetKB',
  description: 'Convert images online for free. Change PNG, WebP, HEIC, and JPG files in your browser, then compress them to an exact KB or MB limit.',
  alternates: { canonical: '/image-converter' },
};

export default function Page() {
  return <GuideArticle
    label="Free image converter"
    title="Convert images online — JPG, PNG, WebP, and HEIC"
    intro="Choose the format your upload accepts, convert it in your browser, and set a precise file-size limit when you need one. TargetKB handles common image formats without requiring an account."
    sections={[
      { heading: 'Convert any common image to JPG', body: <><p>JPG is the practical choice for most photographs, profile images, online forms, and email attachments. It is widely accepted and usually gives a smaller file than a photographic PNG.</p><p><a href="/convert-image-to-jpg">Convert Image to JPG</a> supports PNG, WebP, HEIC, and other browser-readable image formats. If you are starting with a PNG, use the dedicated <a href="/convert-png-to-jpg">PNG to JPG converter</a>.</p></> },
      { heading: 'Convert iPhone HEIC photos to JPG', body: <><p>HEIC is common on iPhones, but older sites and many upload portals do not accept it. Convert the photo to JPG first, then choose a size such as 100KB, 150KB, 200KB, or 1MB when the destination has a limit.</p><p><a href="/convert-heic-to-jpg">Convert HEIC to JPG</a></p></> },
      { heading: 'Make modern WebP images for websites', body: <><p>WebP is useful when you control the website and want smaller modern image files. It works especially well for many web images, while JPG remains the safer default for broad compatibility.</p><p><a href="/convert-image-to-webp">Convert Image to WebP</a></p></> },
      { heading: 'Convert JPG to PNG when you need PNG output', body: <><p>PNG can be useful for screenshots, graphics, and workflows that require lossless output. It may be larger than JPG, so confirm the upload limit after converting.</p><p><a href="/convert-jpg-to-png">Convert JPG to PNG</a></p></> },
      { heading: 'Choose the format and size together', body: <><p>Changing an extension is not the same as converting an image. Use a real converter, then set the exact file-size target required by your form or site. For photos, JPG plus a sensible size limit is usually the easiest path.</p><p>Need to fit a strict limit? Start with <a href="/compress-image-to-100kb">100KB</a>, <a href="/compress-image-to-150kb">150KB</a>, <a href="/compress-image-to-200kb">200KB</a>, or <a href="/compress-image-to-1mb">1MB</a>.</p></> },
    ]}
  />;
}
