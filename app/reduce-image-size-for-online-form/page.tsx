import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Reduce Image Size for Online Forms | TargetKB', description: 'Resize and compress photos for online forms. Match pixel rules and exact KB upload limits in a private browser-based tool.' };
export default function Page() { return <ResizeLanding title="Make an image fit an online form." description="Many forms restrict both image dimensions and file size. Set both requirements before you download an upload-ready JPG." focus="reduce an image size for an online form" examples={['Job and school applications', 'Government and registration forms', 'Profile-photo upload limits']} />; }
