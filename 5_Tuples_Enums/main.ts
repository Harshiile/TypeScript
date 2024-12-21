// Tuples : same as array but elements are in specific order & same numbers of elements which we described in initialization

let tp: [string, number, boolean, number];
tp = ["harshi", 3, true, 45]

let arr: Array<[string, number]> = [["fsadf", 54], ["opapsd", 23]] // Array of tuples

type RGB = [number, number, number]
const rgbColor: RGB = [134, 250, 192]


// ----------------------------------------------------------------------------------

// Enums
const enum Index { // Always put const before enum, it create feasible JS code for enum without const keyword JS code is too loaded
    First = 67,
    Second,
    Third
}
// console.log(Index.First);
// console.log(Index.Second);
// console.log(Index.Third);


export { }
