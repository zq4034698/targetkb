import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';
export const metadata: Metadata = { title: 'Convert JPG to PNG - Free Online Tool | TargetKB', description: 'Convert JPG images to PNG in your browser. Resize images before converting and process up to 10 files at once.' };
export default function Page() { return <TransformLanding title="Convert JPG to PNG." description="Create a lossless PNG from a JPG without uploading your image to a server." toolHref="/?format=png" steps={['Choose PNG as the output format.', 'Optionally resize the image first.', 'Download the converted PNG file.']} faq="Why can a PNG file be larger than a JPG?" />; }
