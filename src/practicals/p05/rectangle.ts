import { Shape } from './shape'

export class Rectangle extends Shape {
    constructor(color: string, public width: number, public height: number) {
        super(color)
    }

    draw(): void {
        console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`)
    }

    getArea(): number {
        return this.width * this.height
    }
}
