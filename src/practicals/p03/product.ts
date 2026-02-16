export class Product {
    name: string;
    private price: number;
    static DISCOUNT_PERCENT: number = 10;

    constructor() {
        this.name = ''
        this.price = 0
    }

    getPrice(): number {
        return this.price;
    }
    setPrice(price: number): void {
        this.price = price;
    }
    getProfile(): string {
        return this.name;
    }
}

