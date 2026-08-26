import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Passport Photo Online - Free Tool | TargetKB', description: 'Resize and compress a passport photo online. Set pixel dimensions and an exact KB limit before downloading an upload-ready JPG.' };
export default function Page() { return <ResizeLanding title="Resize a passport photo online." description="Create a smaller passport-photo file by setting pixel dimensions and a required KB limit in one browser-based tool. Always check the exact rules of the authority receiving your photo." focus="resize a passport photo" examples={['Square passport-photo starting preset', 'Exact KB limits for online portals', 'Private browser-based processing']} toolHref="/?resize=1&width=600&height=600&target=200" />; }
