type ResizeLandingProps = {
  title: string;
  description: string;
  focus: string;
  examples: string[];
};

export default function ResizeLanding({ title, description, focus, examples }: ResizeLandingProps) {
  return <main className="seo-page">
    <nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href="/?resize=1">Resize an image</a></nav>
    <section className="seo-hero"><p className="eyebrow"><span /> Browser-based image resize tool</p><h1>{title}</h1><p>{description}</p><a className="seo-cta" href="/?resize=1">Resize and compress image <span>→</span></a></section>
    <section className="seo-card-grid">{examples.map((example) => <article className="seo-card" key={example}><strong>{example}</strong><p>Set the pixel dimensions, keep the original proportions if you want, then choose a final KB or MB upload limit.</p></article>)}</section>
    <section className="seo-content"><div className="seo-content-inner"><h2>How to {focus}</h2><ol><li>Open TargetKB and enable “Resize before compressing”.</li><li>Enter a width or height in pixels. Keep the aspect ratio enabled to avoid stretching.</li><li>Set the maximum file size your upload accepts, then upload up to 10 images.</li><li>Download the resized JPG when the result is ready.</li></ol><h3>Resize and compress in one step</h3><p>Dimensions and file size solve different upload problems. Resizing reduces pixel dimensions; compression reduces the file weight. TargetKB combines both locally in your browser so you can create a smaller image without sending it to a server.</p></div></section>
    <section className="seo-faq"><h2>Frequently asked questions</h2><details><summary>Can I resize without distorting the image?</summary><p>Yes. Keep aspect ratio enabled and enter either a width or a height. TargetKB calculates the other dimension from the original image.</p></details><details><summary>What image formats can I resize?</summary><p>You can upload JPG, PNG, WebP, HEIC, and HEIF images. Results download as optimized JPG files.</p></details><details><summary>Are my images uploaded to a server?</summary><p>No. Image processing happens locally in your browser whenever possible.</p></details></section>
    <footer className="footer wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><p>Exact image compression for every upload limit.</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>;
}
