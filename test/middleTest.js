
const printMiddle = require ('../middle.js');

// TEST CODE for middle.js

printMiddle([]); // => []
printMiddle([1]); // => []
printMiddle([1, 2]); // => []
printMiddle([1, 2, 3]); // => [2]
printMiddle([1, 2, 3, 4, 5]); // => [3]
printMiddle([1, 2, 3, 4]); // => [2, 3]
printMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // => [5]
printMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => [5, 6]
printMiddle(["Hello","Hi","Bye","See You"]); // => ["Hi", "Bye"]
printMiddle(["Apple","Mango","Berry"]); // => ["Mango"]
printMiddle(["Single"]); // => []
printMiddle(["One","TWo"]); // => []

/* console.log(eqArrays(middle([1, 2, 3]), [2])); // => true
console.log(eqArrays(middle([1, 2, 3, 4]), [2])); // => false
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3])); // => true
 */
