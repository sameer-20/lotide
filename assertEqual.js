// Function to compare two strings or numbers and check if they are equal or not

const assertEqual = function(actual, expected) {

  let str1Type = typeof(actual); 
  let str2Type = typeof(expected);

   
  // Compare two strings/numbers using String Concatenation

  /*if (str1Type !== str2Type) {
    if (str1Type === 'string')
      return console.log("❌" + "Assertion Failed: " + '"' + actual + '"' + " !== " + expected);
    else if (str2Type === 'string')
      return console.log("❌" + "Assertion Failed: " + actual + " !== " + '"' + expected + '"');
  } else if (str1Type === str2Type) {
    if (actual === expected && str1Type === 'string')
      return console.log("🙂" + "Assertion Passed: " + '"' + actual + '"' + " === " + '"' + expected + '"');
    else if (actual !== expected && str1Type === 'string')
      return console.log("❌" + "Assertion Failed: " + '"' + actual + '"' + " !== " + '"' + expected + '"');
    else if (actual === expected && str1Type === 'number')
      return console.log("🙂" + "Assertion Passed: " + actual + " === " + expected);
    else if (actual !== expected && str1Type === 'number')
      return console.log("❌" + "Assertion Failed: " + actual + " !== " + expected);
  }*/

  // Compare two strings/numbers using String Literals

  if (str1Type !== str2Type) {
      if (str1Type === 'string')
      return console.log(`❌Assertion Failed: "${actual}" !== ${expected}`);
    else if (str2Type === 'string')
      return console.log(`❌Assertion Failed: ${actual} !== "${expected}"`);
  } else if (str1Type === str2Type) {
    if (actual === expected && str1Type === 'string')
      return console.log(`🙂Assertion Passed: "${actual}" === "${expected}"`);
    else if (actual !== expected && str1Type === 'string')
      return console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
    else if (actual === expected && str1Type === 'number')
      return console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
    else if (actual !== expected && str1Type === 'number')
      return console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

  // Compare two arrays
  
  if (actual !== expected)
    return console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
  else
    return console.log(`🙂Assertion Passed: "${actual}" === "${expected}"`);
  
};


module.exports = assertEqual;