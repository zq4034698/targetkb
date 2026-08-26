import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Photo for Job Application | TargetKB', description: 'Resize and compress a profile photo for a job application. Make an upload-ready JPG with the dimensions and file-size limit you need.' };
export default function Page() { return <ResizeLanding title="Resize a photo for a job application." description="Prepare a neat, lightweight profile photo for recruitment portals. Choose a square dimension, preserve proportions, and compress to the upload limit." focus="resize a photo for a job application" examples={['Recruitment and career portals', '400 × 400 profile-photo preset', '100 KB photo upload limits']} toolHref="/?resize=1&width=400&height=400&target=100" />; }
