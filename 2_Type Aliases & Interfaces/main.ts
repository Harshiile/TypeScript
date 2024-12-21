// Default values
const setMarks = (name: string, marks: number = 0): void => {
    console.log(`${name} gets ${marks} marks`);
}
setMarks('harhisl')


// -----------------------------------------------------------------------------------------------------------------


// Type Aliasess : Just like schema, define structure of data

type User = {
    name: string,
    age: number,
    isAbsent: boolean,
    date: Date,
    city: string
}

const setDetails = (user: User): User => {
    return {
        name: user.name,
        age: user.age,
        isAbsent: user.isAbsent,
        date: user.date,
        city: user.city
    }
}
// Positions of arguments are anything, does not depends on definition
console.log(setDetails({ name: 'Harhsil', date: new Date(), city: 'Baroda', age: 22, isAbsent: false }));


// Composite Type Alias : Existing type alias + new type alias
type Employee = User & {
    state: String,
    country: String
}

const obj: Employee = {
    name: 'Harhsil',
    date: new Date(),
    city: 'Baroda',
    age: 22,
    isAbsent: false,
    state: 'GUJ',
    country: 'INDIA',
}


// readonly keyword
type UserTwo = {
    readonly _id: number
    name: string
    age: number
}

const user: UserTwo = { _id: 453, name: 'Harhsil', age: 98 }
// user._id = 11 // Can't overwrite due to readonly keyword


// -----------------------------------------------------------------------------------------------------------------



export { }