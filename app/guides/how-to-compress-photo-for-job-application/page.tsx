import type { Metadata } from 'next';
import GuideArticle from '../../components/GuideArticle';

export const metadata: Metadata = {
  title: 'How to Compress a Photo for a Job Application | TargetKB',
  description: 'Prepare an upload-ready job application photo by checking the portal’s file limit, dimensions, crop, and accepted format before compressing.',
  alternates: { canonical: '/guides/how-to-compress-photo-for-job-application' },
};

export default function Page() {
  return <GuideArticle
    label="Job application photo guide"
    title="How to compress a photo for a job application"
    intro="Recruitment portals often reject a profile photo for technical reasons, not because the photo itself is wrong. Before you upload, match the file-size limit, dimensions, crop, and accepted format shown in the application."
    sections={[
      { heading: 'Check the application’s rules first', body: <><p>Look for the maximum file size, file type, required width and height, and whether the photo must be square. These are separate requirements. A 100KB JPG can still fail if the portal expects a 400 × 400 pixel square image.</p><p><a href="/compress-image-for-job-application">Open the job application photo compressor</a> to start with a 100KB target.</p></> },
      { heading: 'Crop before compression when a square headshot is required', body: <><p>Center the face in a square crop and leave enough space around the head and shoulders. Avoid stretching a rectangular photo into a square because it can make the image look unnatural. Crop first, then resize to the dimensions the portal states.</p><p>Use <a href="/resize-photo-for-job-application">Resize Photo for Job Application</a> for a 400 × 400 starting preset.</p></> },
      { heading: 'Use a safe file-size target', body: <><p>If the portal says “maximum 100KB”, aim a little below the limit. A small buffer helps avoid rejection when a service measures the file slightly differently. If the limit is 200KB or another size, use that exact number instead of manually guessing JPEG quality.</p><p>See <a href="/compress-image-to-100kb">Compress Image to 100KB</a> for a strict low-file-size workflow.</p></> },
      { heading: 'Use JPG unless the portal says otherwise', body: <><p>JPG is normally the most efficient format for a photographic headshot. PNG is useful when a portal specifically requests it or when transparency matters, but it can make a photo unnecessarily large. Always follow the upload form’s allowed formats.</p></> },
      { heading: 'Review the final image before you submit', body: <><ol><li>Open the downloaded file at normal size.</li><li>Check that the face is clear and not distorted.</li><li>Confirm the file is below the maximum size.</li><li>Confirm the crop, dimensions, and format match the application instructions.</li></ol><p>For general portal errors, read the <a href="/guides/reduce-image-size-for-online-forms">online form image checklist</a>.</p></> },
    ]}
  />;
}
