type GuideArticleProps = {
  label: string;
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: React.ReactNode }>;
};

export default function GuideArticle({ label, title, intro, sections }: GuideArticleProps) {
  return <main className="guide-page"><nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><a className="nav-button" href="/">Compress an image</a></nav><article className="guide-main"><p className="eyebrow"><span /> {label}</p><h1>{title}</h1><p className="guide-intro">{intro}</p>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><div>{section.body}</div></section>)}<aside className="guide-cta"><strong>Ready to make your image fit?</strong><p>Use TargetKB to set an exact KB or MB limit and download an upload-ready image.</p><a className="seo-cta" href="/">Open the free compressor <span>→</span></a></aside></article><footer className="footer wrap"><a className="brand" href="/"><span className="brand-mark">T</span>TargetKB</a><p>Exact image compression for every upload limit.</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer></main>;
}
