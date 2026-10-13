type ResizeLandingProps = {
  title: string;
  description: string;
  focus: string;
  examples: string[];
  toolHref?: string;
};

export default function ResizeLanding({ title, description, focus, examples, toolHref = '/?resize=1' }: ResizeLandingProps) {
  const faqs = [
    { question: 'Can I resize without distorting the image?', answer: 'Yes. Keep aspect ratio enabled and enter a width or a height. If you enter both, the image fits within those dimensions while keeping its original proportions. The two values are bounds, not a promise of an exact size. A tight file-size limit may reduce pixel dimensions further.' },
    { question: 'What image formats can I resize?', answer: 'You can upload JPG, PNG, WebP, HEIC, and HEIF images. JPG is selected by default; you can also choose PNG or WebP output where supported by your browser.' },
    { question: 'Are my images uploaded to a server?', answer: 'No. Image processing happens locally in your browser whenever possible.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href={toolHref}>Resize an image</a></nav>
    <section className="seo-hero"><p className="eyebrow"><span /> Browser-based image resize tool</p><h1>{title}</h1><p>{description}</p><a className="seo-cta" href={toolHref}>Resize and compress image <span>→</span></a></section>
    <section className="seo-card-grid">{examples.map((example) => <article className="seo-card" key={example}><strong>{example}</strong><p>Set the pixel dimensions, keep the original proportions if you want, then choose a final KB or MB upload limit.</p></article>)}</section>
    <section className="seo-content"><div className="seo-content-inner"><h2>How to {focus}</h2><ol><li>Open TargetKB and enable “Resize before compressing”.</li><li>Enter a width or height in pixels. Keep aspect ratio enabled to avoid stretching. If you enter both values, they define bounds that the image fits within while preserving its proportions.</li><li>Choose JPG, PNG, or WebP output and set the maximum file size your upload accepts, then upload up to 10 images.</li><li>Download the resized image and check its final dimensions and file size.</li></ol><h3>Resize and compress in one step</h3><p>Dimensions and file size solve different upload problems. Resizing sets the starting pixel dimensions; a tight file-size limit may require reducing them further. TargetKB combines resizing and compression locally in your browser. Check the downloaded width, height and file size against your destination’s requirements.</p><p><a href="/guides/image-compression-limits">Check file-size units, output quality and format limitations</a> before preparing an upload.</p></div></section>
    <section className="seo-faq"><h2>Frequently asked questions</h2>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <footer className="footer wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><p>Exact image compression for every upload limit.</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>;
}
