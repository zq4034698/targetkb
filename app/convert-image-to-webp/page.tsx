import type { Metadata } from 'next';
import TransformLanding from '../components/TransformLanding';
export const metadata: Metadata = { title: 'Convert Image to WebP - Free Online Converter | TargetKB', description: 'Convert images to WebP and compress them in your browser. Create lightweight modern web images with no sign-up.' };
export default function Page() { return <TransformLanding title="Convert image to WebP." description="Create lightweight WebP images for modern websites while controlling the final file size." toolHref="/?format=webp" steps={['Choose WebP as the output format.', 'Set a target size and optionally resize the image.', 'Download your WebP image when it is ready.']} faq="Is WebP good for websites?" />; }
