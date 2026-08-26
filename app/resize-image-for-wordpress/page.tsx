import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Image for WordPress - Free Online Tool | TargetKB', description: 'Resize and compress images before uploading to WordPress. Choose pixel dimensions and an exact file-size target in one browser tool.' };
export default function Page() { return <ResizeLanding title="Resize images for WordPress uploads." description="Set sensible dimensions, preserve image proportions, and reduce file weight before adding media to your WordPress library." focus="resize an image for WordPress" examples={['Featured images and blog posts', 'WooCommerce product images', 'WordPress media-library uploads']} />; }
