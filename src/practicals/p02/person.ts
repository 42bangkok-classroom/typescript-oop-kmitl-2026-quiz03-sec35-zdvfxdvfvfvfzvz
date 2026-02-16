export class Person {
    firstname: string
    lastname: string
    private age: number
    static COUNTRY = 'Thailand'

    constructor() {
        this.firstname = ''
        this.lastname = ''
        this.age = 0
    }

    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age :number): void {
        this.age = age;
    }
}