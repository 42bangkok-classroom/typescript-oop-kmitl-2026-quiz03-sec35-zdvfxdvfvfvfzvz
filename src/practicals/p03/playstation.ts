import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
  private model: string;
  private generation: number;
  constructor(name: string, generation: number, price: number = 0) {
    super(name, price);
    this.model = name;
    this.generation = generation;
  }
  getDiscountPrice(): number {
    return this.getPrice() - (this.getPrice() * Product.DISCOUNT_PERCENT / 100);
  }
  getGeneration(): number {
    return this.generation;
  }
  getProfile(): string {
    return `${this.model} (Gen ${this.generation})`;
  }
}