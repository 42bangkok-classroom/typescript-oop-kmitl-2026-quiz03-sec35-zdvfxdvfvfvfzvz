export class Student {
    constructor(public firstname?: string, public lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    printName() {
        console.log(this.firstname + " " + this.lastname);
    }
}