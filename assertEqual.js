// Function to compare two strings or numbers and check if they are equal or not
const assertEqual = function(actual, expected) {

  let str1Type = typeof(actual); 
  let str2Type = typeof(expected);

  // Using String Concatenation
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

  // Using String Literals
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
  
};

// TEST CODE for the above functionality
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "lIghthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse");
assertEqual(1, 1);
assertEqual(12345, 12345);
assertEqual(12345, 123);
assertEqual(2345, 123);
assertEqual("1", 1);
assertEqual(1, "1");
assertEqual("12345", "12345");
assertEqual("12345", "123");
assertEqual("", 123);
assertEqual(123, "");
assertEqual("", "");
assertEqual("", '');
assertEqual("",);
