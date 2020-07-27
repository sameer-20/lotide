
const eqArrays = require ('./eqArrays');

// Function to compare two arrays and print appropriate message
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))
    console.log(`🙂 Arrays are equal!`);
  else
    console.log(`❌ Arrays are NOT equal!`);
};

module.exports = assertArraysEqual;

