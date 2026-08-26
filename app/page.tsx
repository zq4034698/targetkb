'use client';

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react';

type Result = { url: string; name: string; originalBytes: number; compressedBytes: number; width: number; height: number };
const presets = [20, 50, 100, 200, 500];
const displayBytes = (value: number) => value < 1024 * 1024 ? `${Math.max(1, Math.round(value / 1024))} KB` : `${(value / (1024 * 1024)).toFixed(2)} MB`;
const cleanName = (name: string) => name.replace(/\.[^/.]+$/, '') || 'compressed-image';

const copy = {
  en: { navHow: 'How it works', navPopular: 'Popular sizes', navPrivacy: 'Privacy', navButton: 'Compress an image', eyebrow: 'Precise compression, made simple', titleA: 'Compress images', titleB: 'to any size.', intro: 'Set your target in KB or MB. TargetKB automatically finds the best balance of file size and image quality — ready to upload.', targetLabel: 'Target file size', targetTitle: 'Make my image fit', drop: 'Drop your image here', browse: 'or click to browse · JPG, PNG, WebP, HEIC', working: 'Finding the best compression…', local: 'This happens privately in your browser.', popular: 'Popular targets', ready: 'Ready to upload', optimized: 'Optimized JPG', download: 'Download image', noSignup: 'No sign-up. Your image stays on your device.', steps: [['Enter a limit', 'Choose any target in KB or MB. No guessing quality settings.'], ['Upload once', 'We automatically tune quality and dimensions to fit your target.'], ['Upload anywhere', 'Get a smaller image ready for forms, email, and websites.']], built: 'Built for real upload limits', popularTitle: 'Popular image size targets', popularIntro: 'Start with a common requirement, or enter your own exact file limit above.', uses: ['ID cards & forms', 'Applications & portals', 'Passports & online forms', 'Profiles & registrations', 'Email attachments', 'Website uploads'], private: 'Private by design', privacyTitle: 'Your photos are yours.', privacyText: 'TargetKB processes images locally in your browser whenever possible. We never ask you to create an account just to make a file smaller.', stored: 'images stored', footer: 'Exact image compression for every upload limit.', errorSize: 'Enter a target size of at least 1 KB.', errorFile: 'Please choose an image file (JPG, PNG, WebP, or HEIC).', errorRead: 'This image format could not be read in this browser.', errorBrowser: 'Your browser cannot prepare this image.', errorReach: 'We could not reach that size. Try a slightly larger target.' },
  'zh-CN': { navHow: '使用方法', navPopular: '热门规格', navPrivacy: '隐私说明', navButton: '压缩图片', eyebrow: '精确压缩，简单完成', titleA: '图片压缩至', titleB: '任意大小。', intro: '输入目标 KB 或 MB，TargetKB 会自动平衡文件大小与画质，生成可直接上传的图片。', targetLabel: '目标文件大小', targetTitle: '让图片符合要求', drop: '把图片拖到这里', browse: '或点击选择 · JPG、PNG、WebP、HEIC', working: '正在寻找最佳压缩效果…', local: '全程在你的浏览器本地处理。', popular: '热门目标', ready: '可以上传', optimized: '已优化为 JPG', download: '下载图片', noSignup: '无需注册。图片始终留在你的设备上。', steps: [['输入限制', '输入任意 KB 或 MB，无需猜测压缩质量。'], ['上传一次', '系统自动调整画质和尺寸，贴合你的目标。'], ['顺利上传', '获得适合表单、邮件和网站上传的小尺寸图片。']], built: '为真实上传限制而设计', popularTitle: '热门图片体积规格', popularIntro: '选择常见的上传限制，或在上方输入你需要的精确大小。', uses: ['证件与在线表单', '申请与报名系统', '护照与在线表单', '头像与注册资料', '邮件附件', '网站图片上传'], private: '隐私优先', privacyTitle: '你的照片，只属于你。', privacyText: 'TargetKB 会尽可能在你的浏览器本地处理图片。为了压缩文件，我们不会要求你创建账户。', stored: '张图片被存储', footer: '为每一种上传限制提供精确图片压缩。', errorSize: '请输入至少 1 KB 的目标大小。', errorFile: '请选择图片文件（JPG、PNG、WebP 或 HEIC）。', errorRead: '此浏览器无法读取该图片格式。', errorBrowser: '你的浏览器无法处理这张图片。', errorReach: '无法压缩到该大小，请尝试略微提高目标限制。' },
  'zh-TW': { navHow: '使用方法', navPopular: '熱門規格', navPrivacy: '隱私說明', navButton: '壓縮圖片', eyebrow: '精確壓縮，簡單完成', titleA: '圖片壓縮至', titleB: '任意大小。', intro: '輸入目標 KB 或 MB，TargetKB 會自動平衡檔案大小與畫質，產生可直接上傳的圖片。', targetLabel: '目標檔案大小', targetTitle: '讓圖片符合要求', drop: '把圖片拖到這裡', browse: '或點擊選擇 · JPG、PNG、WebP、HEIC', working: '正在尋找最佳壓縮效果…', local: '全程在你的瀏覽器本機處理。', popular: '熱門目標', ready: '可以上傳', optimized: '已最佳化為 JPG', download: '下載圖片', noSignup: '無需註冊。圖片始終留在你的裝置上。', steps: [['輸入限制', '輸入任意 KB 或 MB，無需猜測壓縮品質。'], ['上傳一次', '系統自動調整畫質和尺寸，貼合你的目標。'], ['順利上傳', '獲得適合表單、郵件和網站上傳的小尺寸圖片。']], built: '為真實上傳限制而設計', popularTitle: '熱門圖片容量規格', popularIntro: '選擇常見的上傳限制，或在上方輸入你需要的精確大小。', uses: ['證件與線上表單', '申請與報名系統', '護照與線上表單', '頭像與註冊資料', '郵件附件', '網站圖片上傳'], private: '隱私優先', privacyTitle: '你的照片，只屬於你。', privacyText: 'TargetKB 會盡可能在你的瀏覽器本機處理圖片。為了壓縮檔案，我們不會要求你建立帳戶。', stored: '張圖片被儲存', footer: '為每一種上傳限制提供精確圖片壓縮。', errorSize: '請輸入至少 1 KB 的目標大小。', errorFile: '請選擇圖片檔案（JPG、PNG、WebP 或 HEIC）。', errorRead: '此瀏覽器無法讀取該圖片格式。', errorBrowser: '你的瀏覽器無法處理這張圖片。', errorReach: '無法壓縮到該大小，請嘗試稍微提高目標限制。' },
} as const;
type Language = keyof typeof copy;

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [target, setTarget] = useState('100');
  const [unit, setUnit] = useState<'KB' | 'MB'>('KB');
  const [resizeEnabled, setResizeEnabled] = useState(false);
  const [resizeWidth, setResizeWidth] = useState('');
  const [resizeHeight, setResizeHeight] = useState('');
  const [lockAspect, setLockAspect] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const t = copy[language];
  const maxImagesText = language === 'en' ? 'Max 10 images' : language === 'zh-CN' ? '一次最多 10 张图片' : '一次最多 10 張圖片';

  useEffect(() => {
    document.documentElement.lang = language;
    const requestedTarget = new URLSearchParams(window.location.search).get('target');
    if (requestedTarget === '50' || requestedTarget === '100' || requestedTarget === '200' || requestedTarget === '500') { setTarget(requestedTarget); setUnit('KB'); }
    if (requestedTarget === '1mb') { setTarget('1'); setUnit('MB'); }
    if (new URLSearchParams(window.location.search).get('resize') === '1') setResizeEnabled(true);
  }, [language]);

  async function compressOne(file: File, targetBytes: number): Promise<Result> {
    if (!file.type.startsWith('image/')) throw new Error(t.errorFile);
    let source: Blob = file;
    if (file.type === 'image/heic' || file.type === 'image/heif' || /\.(heic|heif)$/i.test(file.name)) {
      const heic2any = (await import('heic2any')).default;
      const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 });
      source = Array.isArray(converted) ? converted[0] : converted;
    }
    const sourceUrl = URL.createObjectURL(source);
    try {
      const image = await new Promise<HTMLImageElement>((resolve, reject) => { const element = new Image(); element.onload = () => resolve(element); element.onerror = () => reject(new Error(t.errorRead)); element.src = sourceUrl; });
      const requestedWidth = Math.round(Number(resizeWidth));
      const requestedHeight = Math.round(Number(resizeHeight));
      let baseWidth = image.naturalWidth;
      let baseHeight = image.naturalHeight;
      if (resizeEnabled && (requestedWidth > 0 || requestedHeight > 0)) {
        if (lockAspect) {
          const scaleByWidth = requestedWidth > 0 ? requestedWidth / image.naturalWidth : Number.POSITIVE_INFINITY;
          const scaleByHeight = requestedHeight > 0 ? requestedHeight / image.naturalHeight : Number.POSITIVE_INFINITY;
          const requestedScale = Math.min(scaleByWidth, scaleByHeight);
          baseWidth = Math.max(1, Math.round(image.naturalWidth * requestedScale));
          baseHeight = Math.max(1, Math.round(image.naturalHeight * requestedScale));
        } else {
          baseWidth = requestedWidth > 0 ? requestedWidth : image.naturalWidth;
          baseHeight = requestedHeight > 0 ? requestedHeight : image.naturalHeight;
        }
      }
      let output: Blob | null = null; let outputWidth = baseWidth; let outputHeight = baseHeight; let scale = 1;
      for (let pass = 0; pass < 8 && !output; pass += 1) {
        const width = Math.max(1, Math.round(baseWidth * scale)); const height = Math.max(1, Math.round(baseHeight * scale));
        const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
        const context = canvas.getContext('2d', { alpha: false }); if (!context) throw new Error(t.errorBrowser);
        context.fillStyle = '#fff'; context.fillRect(0, 0, width, height); context.drawImage(image, 0, 0, width, height);
        let low = 0.08; let high = 0.95; let candidate: Blob | null = null;
        for (let attempt = 0; attempt < 9; attempt += 1) {
          const quality = (low + high) / 2;
          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
          if (!blob) continue;
          if (blob.size <= targetBytes) { candidate = blob; low = quality; } else high = quality;
        }
        if (candidate) { output = candidate; outputWidth = width; outputHeight = height; } else scale *= 0.72;
      }
      if (!output) throw new Error(t.errorReach);
      return { url: URL.createObjectURL(output), name: `${cleanName(file.name)}-${target}${unit.toLowerCase()}.jpg`, originalBytes: file.size, compressedBytes: output.size, width: outputWidth, height: outputHeight };
    } finally { URL.revokeObjectURL(sourceUrl); }
  }

  async function compress(files: File[]) {
    setError(''); setResults([]);
    const targetBytes = Number(target) * (unit === 'MB' ? 1024 * 1024 : 1024);
    if (!Number.isFinite(targetBytes) || targetBytes < 1024) { setError(t.errorSize); return; }
    if (files.length > 10) { setError(language === 'en' ? 'You can upload up to 10 images at a time.' : language === 'zh-CN' ? '一次最多上传 10 张图片。' : '一次最多上傳 10 張圖片。'); return; }
    setWorking(true);
    try {
      const completed: Result[] = [];
      for (const file of files) { completed.push(await compressOne(file, targetBytes)); setResults([...completed]); }
    } catch (caught) { setError(caught instanceof Error ? caught.message : 'Something went wrong. Please try another image.'); } finally { setWorking(false); }
  }
  const onPick = (event: ChangeEvent<HTMLInputElement>) => { const files = Array.from(event.target.files ?? []); if (files.length) void compress(files); event.target.value = ''; };
  const onDrop = (event: DragEvent<HTMLButtonElement>) => { event.preventDefault(); setDragging(false); const files = Array.from(event.dataTransfer.files); if (files.length) void compress(files); };
  const selectPreset = (value: string, nextUnit: 'KB' | 'MB') => { setTarget(value); setUnit(nextUnit); };

  return <main>
    <nav className="nav wrap"><a className="brand" href="#top"><span className="brand-mark">T</span>TargetKB</a><div className="nav-links"><a href="#how">{t.navHow}</a><a href="#popular">{t.navPopular}</a><a href="#privacy">{t.navPrivacy}</a></div><select className="language-select" aria-label="Select language" value={language} onChange={(event) => setLanguage(event.target.value as Language)}><option value="en">English</option><option value="zh-CN">简体中文</option><option value="zh-TW">繁體中文</option></select><button className="nav-button" onClick={() => inputRef.current?.click()}>{t.navButton}</button></nav>
    <section className="hero wrap" id="top"><div className="eyebrow"><span /> {t.eyebrow}</div><h1>{t.titleA}<br /><em>{t.titleB}</em></h1><p className="hero-copy">{t.intro}</p>
      <section className="compressor" aria-label="Image compressor"><div className="target-row"><div><span className="field-label">{t.targetLabel}</span><strong>{t.targetTitle}</strong></div><label className="target-input"><input aria-label="Target size" value={target} inputMode="decimal" onChange={(event) => setTarget(event.target.value)} /><select aria-label="Size unit" value={unit} onChange={(event) => setUnit(event.target.value as 'KB' | 'MB')}><option>KB</option><option>MB</option></select></label></div>
        <button className={`dropzone ${dragging ? 'dragging' : ''}`} onClick={() => inputRef.current?.click()} onDrop={onDrop} onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)}><span className="upload-icon">↑</span><span><b>{working ? t.working : t.drop}</b><small>{working ? t.local : `${t.browse} · ${maxImagesText}`}</small></span></button>
        <input ref={inputRef} className="hidden-input" type="file" multiple accept="image/jpeg,image/png,image/webp,image/heic,image/heif" onChange={onPick} />
        <section className="resize-panel" aria-label="Resize image options">
          <label className="resize-toggle"><input type="checkbox" checked={resizeEnabled} onChange={(event) => setResizeEnabled(event.target.checked)} /><span><b>{language === 'en' ? 'Resize before compressing' : language === 'zh-CN' ? '压缩前调整尺寸' : '壓縮前調整尺寸'}</b><small>{language === 'en' ? 'Optional dimensions in pixels' : language === 'zh-CN' ? '可选：按像素设置尺寸' : '選填：依像素設定尺寸'}</small></span></label>
          {resizeEnabled && <div className="resize-fields"><label>W <input aria-label="Resize width" inputMode="numeric" placeholder="1200" value={resizeWidth} onChange={(event) => setResizeWidth(event.target.value.replace(/\D/g, ''))} /> px</label><span>×</span><label>H <input aria-label="Resize height" inputMode="numeric" placeholder="800" value={resizeHeight} onChange={(event) => setResizeHeight(event.target.value.replace(/\D/g, ''))} /> px</label><label className="aspect-lock"><input type="checkbox" checked={lockAspect} onChange={(event) => setLockAspect(event.target.checked)} /> {language === 'en' ? 'Keep aspect ratio' : language === 'zh-CN' ? '保持比例' : '保持比例'}</label></div>}
        </section>
        <div className="popular-row"><span>{t.popular}</span>{presets.map((preset) => <button key={preset} onClick={() => selectPreset(String(preset), 'KB')}>{preset}KB</button>)}<button onClick={() => selectPreset('1', 'MB')}>1MB</button></div>
        {error && <p className="message error">{error}</p>}
        {results.length > 0 && <section className="batch-results"><div className="batch-title"><div className="success-icon">✓</div><div><span className="field-label">{t.ready}</span><strong>{results.length} / 10 {language === 'en' ? 'images compressed' : language === 'zh-CN' ? '张图片已压缩' : '張圖片已壓縮'}</strong></div></div>{results.map((result) => <div className="result" key={result.url}><div><h2>{displayBytes(result.originalBytes)} <i>→</i> {displayBytes(result.compressedBytes)}</h2><p>{result.width} × {result.height}px · {t.optimized}</p></div><a className="download" href={result.url} download={result.name}>{t.download} <span>↓</span></a></div>)}</section>}
      </section><p className="privacy-note">{t.noSignup}</p>
    </section>
    <section className="proof wrap" id="how">{t.steps.map((step, index) => <div key={step[0]}><span className="number">0{index + 1}</span><h2>{step[0]}</h2><p>{step[1]}</p></div>)}</section>
    <section className="size-section" id="popular"><div className="wrap"><div className="section-heading"><div><span className="eyebrow"><span /> {t.built}</span><h2>{t.popularTitle}</h2></div><p>{t.popularIntro}</p></div><div className="size-grid">{['20KB', '50KB', '100KB', '200KB', '500KB', '1MB'].map((size, index) => <button className="size-card" key={size} onClick={() => { selectPreset(size.replace('KB', '').replace('MB', ''), size.includes('MB') ? 'MB' : 'KB'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><strong>{size}</strong><span>{t.uses[index]}</span><i>↗</i></button>)}</div></div></section>
    <section className="privacy wrap" id="privacy"><div className="lock">⌁</div><div><span className="eyebrow"><span /> {t.private}</span><h2>{t.privacyTitle}</h2><p>{t.privacyText}</p></div><div className="stat"><strong>0</strong><span>{t.stored}</span></div></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">T</span>TargetKB</a><p>{t.footer}</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><span>© 2026 TargetKB</span></footer>
  </main>;
}
