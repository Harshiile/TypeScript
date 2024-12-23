const getValue = <T>(val: T): T => val
// console.log(getValue(45));
// console.log(getValue('Harshil'));


// -------------------------------------------------------------------------------------


// Usage of Generics : i.e. Give value of key of object where key is actually exists

// keyof keyword : returns "type" as union of keys of objects
const obj = {
    name: "Harshil",
    age: 54,
    marks: 100
}
// type t_obj = keyof obj; //--> t_obj = name | age | marks

const valOfKey = <T, U extends keyof T>(obj: T, key: U) => obj[key] // --> U extends keyof T === U extends ('name' | 'age' | 'marks')
// console.log(valOfKey(obj, 'age'));
// console.log(valOfKey(obj, 'name'));
// console.log(valOfKey(obj, 'id')); // Give Error, no key exists named "id"

