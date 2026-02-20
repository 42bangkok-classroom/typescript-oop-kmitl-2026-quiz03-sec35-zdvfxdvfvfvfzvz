export class User {
    public username: string
    private password: string
    private loginAttempts: number

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
        this.loginAttempts = 0
    }

    getUsername(): string {
        return this.username
    }
    getLoginAttempts(): number {
        return this.loginAttempts
    }
    login(password: string): boolean {
        this.loginAttempts++
        return password === this.password
    }
}
