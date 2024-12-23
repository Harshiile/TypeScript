class User {
    _email: string // default access modifier is Public
    _id: number
    private _uid: number;
    constructor(email: string, id: number) {
        this._email = email
        this._id = id
        this._uid = 100231
    }
    get id(): number {
        return this._id - 459
    }
    get email(): string {
        return this._email + '###'
    }
}
const user = new User('themc@gmail.com', 1001)
// console.log(user.id);
// console.log(user.email);



// ------------------------------------------------------------------------------------------

// Interface with classes : It is mostly use for defining schema for class

interface Employee {
    _id: number,
    _name: string,
    _isActive: boolean,
    isPool: () => boolean
}

class Company implements Employee {
    constructor(
        public _id: number,
        public _name: string,
        public _isActive: boolean
    ) { }

    isPool(): boolean {
        return true
    }
    get name(): string {
        return this._name + '__xx'
    }
    set name(val: string) {
        this._name = val.toUpperCase()
    }
}

const emp1 = new Company(1005, 'Harshil', false)
// console.log(emp1.name);
