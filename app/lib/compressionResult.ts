export type CompressionMeasurements = {
  originalBytes: number;
  compressedBytes: number;
  originalWidth: number;
  originalHeight: number;
  width: number;
  height: number;
  targetBytes: number;
};

export function summarizeCompression(result: CompressionMeasurements) {
  return {
    meetsLimit: result.compressedBytes <= result.targetBytes,
    dimensionsChanged: result.originalWidth !== result.width || result.originalHeight !== result.height,
    savedPercent: result.originalBytes > result.compressedBytes
      ? Math.floor((1 - result.compressedBytes / result.originalBytes) * 1000) / 10
      : 0,
  };
}

export function strictDecimalPreset(target: string, unit: 'KB' | 'MB') {
  if (unit !== 'KB') return null;
  // Only offer these when the user explicitly needs a decimal byte limit.
  if (Number(target) === 100) return { target: '97', byteLimit: 100_000 };
  if (Number(target) === 200) return { target: '195', byteLimit: 200_000 };
  return null;
}
