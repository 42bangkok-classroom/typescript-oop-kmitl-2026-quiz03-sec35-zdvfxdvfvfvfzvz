export class Shape {
    constructor(public color: string) {}

    getColor(): string {
        return this.color
    }
    Shape(){
        console.log('Shape constructor called')
    }
    draw(): void {
        console.log(`Drawing a shape with color ${this.color}`)
    }
    getArea(): number {
        return 0
    }
}