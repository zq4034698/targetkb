import type { Metadata } from 'next';
import HomeCompressor from './components/HomeCompressor';
export const metadata: Metadata = { alternates: { canonical: 'https://targetkb.com/' } };
export default function Page() { return <HomeCompressor />; }
