// Interface : It is same as type but it's an extensible(can reopen)
interface User {
    name: string,
    age: number,
    startDate: () => number
}
interface Admin extends User { // Inheritance
    adminId: number
}
const user: Admin = { name: "Mcintyre", adminId: 1001, age: 534, startDate: () => { return 45 } }
// console.log(user.startDate());


// Reopening of Interface
interface Address {
    country: string,
    state: string
}
interface Address { // Reopening of interface, can add new properties here city & pinCode
    city: string,
    pinCode: number
}
const add: Address = { country: 'India', city: 'Baroda', state: 'Guj', pinCode: 388 }


// --------------------------------------------------------------------------------------------------

// Difference b/w type & interface
// - Main key diffn b/w this two is : type can't be reopened to add new properties, but interface can reopen
