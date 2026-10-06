export async function encodeCanvas(canvas: HTMLCanvasElement, mime: string, quality?: number): Promise<Blob | null> {
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mime, quality));
  // Browsers may silently fall back to PNG when a requested encoder is missing.
  // Check before testing its size, so even an oversized fallback reports the right problem.
  if (blob && blob.type !== mime) throw new Error('format_unavailable');
  return blob;
}
