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


const tail = function(inputArray) {
  if (inputArray.length > 1)
    return inputArray.slice(1);
  else if (inputArray.length === 1)
    return [];
  else
    return inputArray;
};


// TEST CODE for the above functionality
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[1], "lAbs");

result = tail([4,5,6,-7,-8]);
assertEqual(result.length, 4);
assertEqual(result[0], 5);
assertEqual(result[2], 7);
assertEqual(result[3], -8);

result = tail([4]);
assertEqual(result.length, 0);
assertEqual(result[0], "");

result = tail(["4","5","6"]);
assertEqual(result.length, 2);
assertEqual(result[0], "5");
assertEqual(result[0], 5);

result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], "");

