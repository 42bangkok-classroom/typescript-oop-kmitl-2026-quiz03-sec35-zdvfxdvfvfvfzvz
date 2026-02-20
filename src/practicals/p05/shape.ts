import { Drawable } from './drawable'

export abstract class Shape implements Drawable {
    constructor(public color: string) {}

    getColor(): string {
        return this.color
    }

    abstract draw(): void
    abstract getArea(): number
}
