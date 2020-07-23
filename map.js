//Implementing MAP function 

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

// Function to find the first character of each array element
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Input String
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CODE for the above functionality
console.log(eqArrays(results1[0], ["g"])); // => true
console.log(eqArrays(results1[1], ["o"])); // => false

assertArraysEqual(results1[0], ["g"]); // => Arrays are equal
assertArraysEqual(results1[1], ["o"]); // => Arrays are NOT equal
assertArraysEqual(results1[2], ["t"]); // => Arrays are equal
assertArraysEqual(results1[3], ["t"]); // => Arrays are NOT equal

assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]); // => Arrays are equal

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g","c","t","m","t"]); // => Arrays are equal