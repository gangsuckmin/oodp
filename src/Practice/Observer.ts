interface Observer
{
  update(price: number): void;
}

interface Subject
{
  register(observer: Observer): void;
  unregister(observer: Observer): void;
  notify(): void;
}

class Stock implements Subject
{
  private observers: Observer[] = [];
  private price: number = 0;

  register(observer: Observer): void
  {
    this.observers.push(observer);
  }

  unregister(observer: Observer): void
  {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setPrice(newPrice: number): void
  {
    this.price = newPrice;
    this.notify();
  }

  notify(): void
  {
    for (const observer of this.observers)
    {
      observer.update(this.price);
    }
  }
}

class PriceDisplay implements Observer
{
  update(price: number): void
  {
    console.log(`📺 화면에 표시: 현재 주가 = ${price}`);
  }
}

class PriceAlert implements Observer
{
  update(price: number): void
  {
    if (price > 100)
    {
      console.log(`🚨 알림: 주가 ${price} 초과!`);
    }
  }
}

const stock = new Stock();
const display = new PriceDisplay();
const alert = new PriceAlert();

stock.register(display);
stock.register(alert);

stock.setPrice(90);
stock.setPrice(120); 
