import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://targetkb.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/compress-image-to-100kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/compress-image-to-50kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/compress-image-to-200kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/compress-image-to-500kb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/compress-image-to-1mb`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/convert-heic-to-jpg`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/resize-image`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/resize-image-for-website`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/resize-image-for-wordpress`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/reduce-image-size-for-online-form`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/resize-passport-photo`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/resize-photo-for-visa-application`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/resize-photo-for-job-application`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/convert-image-to-jpg`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/convert-image-to-webp`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/convert-jpg-to-png`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/crop-image-to-square`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
