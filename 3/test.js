import utils, {
    mergeObjects,
    uniqueArray,
    pick,
    omit,
    zipArrays,
    flattenOnce
} from "./utils.js";


// mergeObjects
console.log(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 }));
console.log(mergeObjects({ a: { x: 1 } }, { a: { y: 2 } }));


// uniqueArray
console.log(uniqueArray([1, 2], [2, 3], [3, 4]));
console.log(uniqueArray([5, 6], [6, 7]));


// pick
console.log(pick({ a: 1, b: 2, c: 3 }, "a", "c"));
console.log(pick({ x: 10, y: 20, z: 30 }, "x", "z"));


// omit
console.log(omit({ a: 1, b: 2, c: 3 }, "b"));
console.log(omit({ x: 10, y: 20, z: 30 }, "x"));


// zipArrays
console.log(zipArrays([1, 2], [3, 4], [5, 6]));
console.log(zipArrays(["a", "b"], ["x", "y"]));


// flattenOnce
console.log(flattenOnce([1, 2], [3, 4], [5, 6]));
console.log(flattenOnce(["a"], ["b", "c"]));


// default export
console.log(utils);