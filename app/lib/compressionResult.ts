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
  // Only offer these when the user explicitly needs a decimal byte limit.
  const value = Number(target);
  if ((unit === 'KB' && [50, 100, 150, 200, 500].includes(value)) || (unit === 'MB' && value === 1)) {
    const byteLimit = value * (unit === 'MB' ? 1_000_000 : 1_000);
    return { target: String(Math.floor((byteLimit - 1) / 1024)), byteLimit };
  }
  return null;
}
