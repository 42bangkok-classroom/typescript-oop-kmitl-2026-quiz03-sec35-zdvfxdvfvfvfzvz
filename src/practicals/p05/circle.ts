import { Shape } from './shape'

export class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color)
    }

    draw(): void {
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`)
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}
