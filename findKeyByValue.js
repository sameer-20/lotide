// Function to compare two strings and check if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  else
    return console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
};


// Find the key in the object based on the value
const findKeyByValue = function(object,value) {
 
  for (let key in object){
    if (object[key] === value)
       return key;
  }
};


// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");