export type Patty = "beef" | "soy";

export interface Burger
{
  bun: string;
  patty: Patty;
  cheese?: boolean;
  pickles?: boolean;
  sauces: string[];
}

export interface BurgerBuilder
{
  setBun(type: string): this;
  setPatty(type: Patty): this;
  addCheese(): this;
  addPickles(): this;
  addSauce(s: string): this;
  build(): Burger;
}

class SimpleBurgerBuilder implements BurgerBuilder
{
  private burger: Burger = { bun: "plain", patty: "beef", sauces: [] };
  setBun(type: string) { this.burger.bun = type; return this; }
  setPatty(type: Patty) { this.burger.patty = type; return this; }
  addCheese() { this.burger.cheese = true; return this; }
  addPickles() { this.burger.pickles = true; return this; }
  addSauce(s: string) { this.burger.sauces.push(s); return this; }
  build() { return { ...this.burger }; }
}

export class BurgerDirector
{
  constructor(private builder: BurgerBuilder = new SimpleBurgerBuilder()) {}
  makeCheeseBurger()
  {
    return this.builder
      .setBun("sesame").setPatty("beef").addCheese().addSauce("ketchup")
      .build();
  }
  makeVeganBurger()
  {
    return this.builder
      .setBun("whole-wheat").setPatty("soy").addSauce("mustard")
      .build();
  }
}
