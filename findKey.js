//

// Function to compare two strings and check if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  else
    return console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
};

// To scan the object & return the first key for which the callback returns a truthy value. 
const findKey = function (object, callback){

  for (let key in object){
    // console.log(key); // Returns each key
    // console.log(object[key]); // Returns each key value
    // console.log(callback(object[key]));
 
    if(callback(object[key])){
      return key;
    }
  }
};


// INPUT
const result1 =  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "undefined"

console.log(result1);
console.log("-----------------");

const result2 =  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result2);
console.log("-----------------");

const result3 =  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "Akaleri"

console.log(result3);
console.log("-----------------");

// TEST CODE

assertEqual(result1,"noma"); // Assertion Failed
assertEqual(result2,"noma"); // Assertion Passed