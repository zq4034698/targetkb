import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';
export const metadata: Metadata = { title: 'Crop Image to Square - Free Online Tool | TargetKB', description: 'Center crop an image to a square, resize it, and compress it to an exact KB or MB target. Free browser-based image tool.' };
export default function Page() { return <TransformLanding title="Crop an image to a square." description="Make a centered square crop for profile photos, forms, and social images, then download a smaller upload-ready file." toolHref="/?crop=square" steps={['Enable center crop to square.', 'Choose optional square dimensions and a file-size target.', 'Upload up to 10 images and download the results.']} faq="Can I choose the crop position?" />; }
