import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Image for Website - Free Online Tool | TargetKB', description: 'Resize images for faster websites. Set pixel dimensions and reduce file size to an exact KB or MB target before uploading.' };
export default function Page() { return <ResizeLanding title="Resize images for your website." description="Prepare lightweight website images with the right pixel dimensions and a smaller file size before you upload." focus="resize an image for a website" examples={['Blog and landing-page images', 'Product and portfolio photos', 'Fast-loading mobile images']} />; }
