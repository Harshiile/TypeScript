// Two type of Initialization of array

// 1) 
const arr1: number[] = [] // 1D
const arr2: number[][] = [] // 2D

// 2)
const arr3: Array<number> = [] // 1D
const arr4: Array<Array<number>> = [] // 2D

arr1.push(4)
arr1.push(5)
arr1.push(6)
// console.log(arr1);



// Array with type alias
type Student = {
    name: string,
    age: number,
    isAbsent: boolean
}
const student: Array<Student> = []
student.push({
    name: 'Harshil',
    age: 45,
    isAbsent: true
})
student.push({
    name: 'Mcintyre',
    age: 67,
    isAbsent: false
})
// console.log(student);



// Array with Union type
// const op: Array<number | string> = []
const op: (number | string)[] = []
op.push(45)
op.push("hello")

// console.log(op);



export { }