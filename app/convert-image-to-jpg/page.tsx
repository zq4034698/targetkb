import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';
export const metadata: Metadata = { title: 'Convert Image to JPG - Free Online Converter | TargetKB', description: 'Convert PNG, WebP, HEIC and other images to JPG in your browser. Optionally resize and compress to an exact KB or MB limit.' };
export default function Page() { return <TransformLanding title="Convert image to JPG." description="Turn an image into an upload-friendly JPG, then reduce it to the exact file size you need." toolHref="/?format=jpg" steps={['Choose JPG as the output format.', 'Set an optional KB or MB target and upload up to 10 images.', 'Download optimized JPG files when processing is complete.']} faq="Can I convert PNG or HEIC to JPG?" />; }
