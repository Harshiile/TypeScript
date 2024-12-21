class User {
    email: string
    id: number
    constructor(email: string, id: number) {
        this.email = email
        this.id = id
    }
}
const user = new User('themc@gmail.com', 1001)
console.log(user.id);
