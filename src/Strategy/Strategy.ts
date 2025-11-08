export interface Compressor
{
  compress(data: Uint8Array): string;
}

export class ZipCompressor implements Compressor
{
  compress(data: Uint8Array) { return `ZIP(${data.length})`; }
}

export class RarCompressor implements Compressor
{
  compress(data: Uint8Array) { return `RAR(${data.length})`; }
}

export class CompressionContext
{
  constructor(private strategy: Compressor) {}
  setStrategy(s: Compressor) { this.strategy = s; }
  run(data: Uint8Array) { return this.strategy.compress(data); }
}
