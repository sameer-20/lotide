// Function to compare two strings and check if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  else
    return console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
};


// Find count of each character in a string

const countLetters = function(inputString) {
  const results = {};
  const newString = inputString.split(" ").join("");
  console.log(newString);
  for (const character of newString) {
    //console.log(character);
      if (results[character]) {
        results[character] += 1;
      } else {
        results[character] = 1;
      }
  }
  return results;
};


// TEST CODE

let result1 = countLetters("twinkle twinkle little star");
console.log(result1);

 assertEqual(result1["t"], 5); //Pass
 assertEqual(result1["n"], 3); //Fail
 assertEqual(result1["r"], 1); //Pass

result1 = countLetters("lighthouse in the house");
console.log(result1);
 