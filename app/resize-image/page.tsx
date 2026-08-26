import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Image Online - Free Pixel Resizer | TargetKB', description: 'Resize images by width and height in pixels, then compress them to an exact KB or MB limit. Free, private, browser-based image resizer.' };
export default function Page() { return <ResizeLanding title="Resize image online, then make it fit." description="Set a width or height in pixels, preserve the aspect ratio, and compress the final image to any upload limit in one private browser tool." focus="resize an image online" examples={['Resize image to 1200 × 800', 'Make a smaller image for email', 'Resize and compress up to 10 images']} />; }
