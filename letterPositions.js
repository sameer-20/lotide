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


// Find the position of each character in a sentence

const letterPositions = function(sentence) {
  let results = {};
  const newSentence = sentence.toLowerCase();
 
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== " "){  
      if (!results[newSentence[i]]){
        results[newSentence[i]] = [];
      }
      results[newSentence[i]].push(i);  
    }
  }
  return results;
};


// TEST CODE

let result1 = letterPositions("hello");
console.log(result1);

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [2]);
assertArraysEqual(result1["l"], [2,3]);
assertArraysEqual(result1["o"], [4]);

result1 = letterPositions("lighthouse in the house");
console.log(result1);