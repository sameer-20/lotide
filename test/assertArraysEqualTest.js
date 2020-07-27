
const assertArraysEqual = require ('../assertArraysEqual');


// TEST CODE for assertArraysEqual.js

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Arrays are equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Arrays are NOT equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Arrays are equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Arrays are NOT equal
