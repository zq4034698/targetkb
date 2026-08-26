type LandingProps = {
  size: string;
  query: string;
  title: string;
  description: string;
  uses: Array<{ heading: string; text: string }>;
  guide: string;
  faqs: Array<{ question: string; answer: string }>;
};

export default function ExactSizeLanding({ size, query, title, description, uses, guide, faqs }: LandingProps) {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href={`/?target=${query}`}>Open compressor</a></nav>
    <section className="seo-hero"><p className="eyebrow"><span /> Exact size image compressor</p><h1>{title}</h1><p>{description}</p><a className="seo-cta" href={`/?target=${query}`}>Compress image to {size} <span>→</span></a></section>
    <section className="seo-card-grid">{uses.map((use) => <article className="seo-card" key={use.heading}><strong>{use.heading}</strong><p>{use.text}</p></article>)}</section>
    <section className="seo-content"><div className="seo-content-inner"><h2>How to compress an image to {size}</h2><p>{guide}</p><ol><li>Open the TargetKB compressor with the {size} limit already selected.</li><li>Upload one image or up to 10 images at once.</li><li>Download the optimized JPG file once it is ready to upload.</li></ol><h3>Why use an exact-size compressor?</h3><p>Many upload forms reject files for being only slightly too large. TargetKB works backwards from your requested limit, automatically balancing image dimensions and JPEG quality instead of asking you to guess a quality percentage.</p></div></section>
    <section className="seo-faq"><h2>Frequently asked questions</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    <footer className="footer wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><p>Exact image compression for every upload limit.</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>;
}
