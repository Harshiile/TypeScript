// Variables
let x: number = 45
let y: string;
y = 'Habibi'
// console.log(x);
// console.log(y);


// Variables with custom datatype
let name: 'Harshil' | 'Mcintyre' | 'Valkyrie'; // name must be among these 3 names
// name='hddsduk' // Error


// --------------------------------------------------------------------------------------------------------

// Functions
const sayName = (name: string): void => { // Always put void if function don't return anything
    console.log(`Your name is ${name}`);
}
// sayName(34) // Gives error
// sayName('harhsil')


// Functions with objects

const printObject = (x: { name: string, isAbsent: boolean }): number => {
    console.log(x.name, x.isAbsent);
    return 0;
}

console.log(printObject({ name: 'harshil', isAbsent: false }));


// --------------------------------------------------------------------------------------------------------

// Union type

let a: number | string;
a = 45 // true
a = 'hello' // true
// a=true // false

export { }