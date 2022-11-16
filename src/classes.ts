interface UserInterface {
    firstName: string,
    lastName: string,
    getFullName(): string
}
class UserClass implements UserInterface {
    firstName: string
    lastName: string
    static readonly id:string = "abc"
    constructor(fistName: string,lastName: string) {
        this.firstName = fistName
        this.lastName = lastName
    }
    getFullName(): string {
        return this.firstName+' '+this.lastName
    }
}