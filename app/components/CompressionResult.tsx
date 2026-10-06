'use client';

import { summarizeCompression, type CompressionMeasurements } from '../lib/compressionResult';
import type { ToolEventParams } from '../lib/toolAnalytics';

export type CompressionOutput = CompressionMeasurements & {
  url: string;
  name: string;
  format: string;
  analytics: ToolEventParams;
};

type Props = {
  result: CompressionOutput;
  language: 'en' | 'zh-CN' | 'zh-TW';
  onDownload: () => void;
};

const copy = {
  en: { preview: 'Open full-size preview', output: 'Output', bytes: 'bytes', dimensions: 'Dimensions', original: 'Original', limit: 'Limit', fits: 'Within the selected byte limit', check: 'Check readability and the portal’s format and pixel requirements before uploading.', download: 'Download image', saved: 'smaller', notSmaller: 'Output is not smaller than the original' },
  'zh-CN': { preview: '查看完整输出预览', output: '输出大小', bytes: '字节', dimensions: '输出尺寸', original: '原图', limit: '体积上限', fits: '已满足所选字节上限', check: '上传前请检查清晰度，以及网站要求的格式和像素尺寸。', download: '下载图片', saved: '体积减少', notSmaller: '输出文件没有比原图更小' },
  'zh-TW': { preview: '查看完整輸出預覽', output: '輸出大小', bytes: '位元組', dimensions: '輸出尺寸', original: '原圖', limit: '容量上限', fits: '已符合所選位元組上限', check: '上傳前請檢查清晰度，以及網站要求的格式和像素尺寸。', download: '下載圖片', saved: '容量減少', notSmaller: '輸出檔案沒有比原圖更小' },
} as const;

export default function CompressionResult({ result, language, onDownload }: Props) {
  const t = copy[language];
  const number = new Intl.NumberFormat(language);
  const size = (bytes: number) => bytes < 1024 * 1024
    ? `${number.format(Number((bytes / 1024).toFixed(2)))} KB`
    : `${number.format(Number((bytes / (1024 * 1024)).toFixed(2)))} MB`;
  const details = summarizeCompression(result);

  return <article className="result" aria-label={`${t.output}: ${number.format(result.compressedBytes)} ${t.bytes}`}>
    <a className="result-preview" href={result.url} target="_blank" rel="noopener" aria-label={t.preview}>
      {/* Local blob URLs need a native image, not a server-side image optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={result.url} alt={t.preview} width={100} height={100} loading="lazy" />
      <span>{t.preview} ↗</span>
    </a>
    <div className="result-details">
      <h2>{size(result.originalBytes)} <i>→</i> {size(result.compressedBytes)}</h2>
      <dl>
        <div><dt>{t.output}</dt><dd>{number.format(result.compressedBytes)} {t.bytes} · {result.format}</dd></div>
        <div><dt>{t.limit}</dt><dd>{number.format(result.targetBytes)} {t.bytes}</dd></div>
        <div><dt>{t.dimensions}</dt><dd>{result.width} × {result.height} px{details.dimensionsChanged && <small>{t.original}: {result.originalWidth} × {result.originalHeight} px</small>}</dd></div>
      </dl>
      <p className="result-status">{details.meetsLimit && <>✓ {t.fits} · </>}{result.compressedBytes < result.originalBytes ? `${details.savedPercent}% ${t.saved}` : t.notSmaller}</p>
    </div>
    <a className="download" href={result.url} download={result.name} onClick={onDownload}>{t.download} <span>↓</span></a>
    <p className="result-check">{t.check}</p>
  </article>;
}
