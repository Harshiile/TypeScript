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


// -----------------------------------------------------------------------------------------------------------------


// Interfaces
