export class Rectangle {
    constructor(public color: string, public width: number, public height: number) {}

    draw() {
        console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`)
    }

    getArea(): number {
        return this.width * this.height
    }
    getColor(): string {
        return this.color
    }
}