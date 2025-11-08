export interface PricingStrategy
{
  calc(raw: number): number;
}

export class NoDiscount implements PricingStrategy
{
  calc(raw: number) { return raw; }
}

export class StudentDiscount implements PricingStrategy
{
  calc(raw: number) { return Math.round(raw * 0.85); }
}

export class BulkDiscount implements PricingStrategy
{
  constructor(private threshold = 3, private rate = 0.8) {}

  calc(raw: number)
  {
    return raw >= this.threshold * 100 ? Math.round(raw * this.rate) : raw;
  }
}

export class PricingContext
{
  constructor(private strategy: PricingStrategy) {}
  setStrategy(s: PricingStrategy) { this.strategy = s; }
  run(raw: number) { return this.strategy.calc(raw); }
}
