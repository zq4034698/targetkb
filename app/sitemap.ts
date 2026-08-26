import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://targetkb.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/compress-image-to-100kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/compress-image-to-200kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/compress-image-to-1mb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
