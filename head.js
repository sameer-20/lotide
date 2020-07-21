// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  let str1Type = typeof(actual);
  let str2Type = typeof(expected);


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


const head = function(inputArray) {
  if(inputArray.length > 0)
    return inputArray[0];
  else
    return undefined; 
};


// TEST CODE for the above functionality
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4,5,6,7]), 5);
assertEqual(head(["Hello Dear", "Hello", "Labs"]), "Hello");
assertEqual(head(["5",6,7]), 5);
assertEqual(head(["hEllo", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([]), "");
assertEqual(head(["Hello Dear"]), "Hello Dear");
assertEqual(head([4]), 4);
