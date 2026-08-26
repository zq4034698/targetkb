import type { Metadata } from 'next';
import ResizeLanding from '../components/ResizeLanding';

export const metadata: Metadata = { title: 'Resize Photo for Visa Application | TargetKB', description: 'Resize and compress a photo for a visa application. Enter the required pixels and exact KB limit, then download an upload-ready JPG.' };
export default function Page() { return <ResizeLanding title="Make a photo fit a visa application." description="Set the dimensions and file-size limit required by your visa portal, then create a smaller JPG in your browser. Check the destination country’s current photo rules before submitting." focus="resize a photo for a visa application" examples={['Visa portal photo uploads', 'Square-image starting preset', 'Exact KB and MB limits']} toolHref="/?resize=1&width=600&height=600&target=200" />; }
