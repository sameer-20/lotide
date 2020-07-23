// Implementing "takeUntil"

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

// To collect items from a provided array until the callback provided returns a truthy value. 
const takeUntil = function(array, callback) {
  const arr = [];

  for (let item of array){
    // console.log(item);
    // console.log(callback(item));
    if (!callback(item)) {
      arr.push(item);
    } else 
    return arr;
  }
}

// INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

console.log('---');

// TEST CODE
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => Arrays are equal
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => Arrays are equal
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ]); // => Arrays are NOT equal

console.log('---');

console.log(eqArrays(results1, [ 1, 2, 5, 7, 2 ])); // => true
console.log(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // => true
console.log(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ])); // => false
