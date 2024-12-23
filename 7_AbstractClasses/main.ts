// Abstract class is blueprint/schema/definition same as interface, we can't make instance of abstract class
abstract class Employee {
    protected id: number = 1001
    protected name: string = 'Harshil'
    abstract sayName(): void
    tellId(): void {
        console.log(this.id);
    }
}

class Admin extends Employee {
    sayName(): void {
        console.log(this.name);
    }
}
const user = new Admin()
user.sayName()
user.tellId()


// Diffn b/w Abstract classes & Interface
// -- Abstract classes have both abstract & concrete methods ( contain both definition & derivation )
// -- Interface just have Structure of properties/methods ( only contain definition )