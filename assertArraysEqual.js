// Function to compare two strings and check if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`❌ Assertion Failed: "${actual}" !== "${expected}"`);
  else
    return console.log(`🙂 Assertion Passed: "${actual}" === "${expected}"`);
};

// Function to compare two arrays and check if they are equal or not
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
  } else
    return false;
  return true;
};

// Function to compare two arrays and print appropriate message
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))
    console.log(`🙂 Arrays are equal!`);
  else
    console.log(`❌ Arrays are NOT equal!`);
};


// TEST CODE for the above functionality
/*console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false*/

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Arrays are equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Arrays are NOT equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Arrays are equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Arrays are NOT equal

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
