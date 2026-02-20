export class Circle {
    constructor(public color: string, public radius: number) {}

    draw() {
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`)
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
    getColor(): string {
        return this.color
    }
}