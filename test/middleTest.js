
const printMiddle = require ('../middle.js');
const assert = require('chai').assert;

// TEST CODE for middle.js

// printMiddle([]); // => []
// printMiddle([1]); // => []
// printMiddle([1, 2]); // => []
// printMiddle([1, 2, 3]); // => [2]
// printMiddle([1, 2, 3, 4, 5]); // => [3]
// printMiddle([1, 2, 3, 4]); // => [2, 3]
// printMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // => [5]
// printMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => [5, 6]
// printMiddle(["Hello","Hi","Bye","See You"]); // => ["Hi", "Bye"]
// printMiddle(["Apple","Mango","Berry"]); // => ["Mango"]
// printMiddle(["Single"]); // => []
// printMiddle(["One","TWo"]); // => []

/* console.log(eqArrays(middle([1, 2, 3]), [2])); // => true
console.log(eqArrays(middle([1, 2, 3, 4]), [2])); // => false
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3])); // => true
 */


describe("#middle", () => {

  const emptyArr = [];

  it("returns [] for []", () => {
    assert.deepStrictEqual(printMiddle([]), emptyArr);  
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(printMiddle([1]), emptyArr);  
  });

  it("returns [] for [1,2]", () => {
    assert.deepEqual(printMiddle([1,2]), emptyArr);  
  });  

  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(printMiddle([1,2,3]), [2]);  
  });

  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(printMiddle([1,2,3,4]), [2,3]);  
  });

  it("returns ['b'] for ['a','b','c']", () => {
    assert.deepEqual(printMiddle(['a','b','c']), ['b']);  
  });

  it("returns ['b','c'] for ['a','b','c','d']", () => {
    assert.deepEqual(printMiddle(['a','b','c','d']), ['b','c']);  
  });


});