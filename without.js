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


// Function to compare two arrays and return a new array
// with only those elements from source that are not present in the itemsToRemove array.
const without = function(sourceArr, itemsToRemoveArr) {
  let tempArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let isEqualFlag = false; //Initialize flag to False
    
    for (let j = 0; j < itemsToRemoveArr.length; j++) {
      if (sourceArr[i] === itemsToRemoveArr[j])
        isEqualFlag = true;  //If equal, set flag to True
    }

    if (isEqualFlag === false)
      tempArr.push(sourceArr[i]); //Push the element into Array
  }
  return tempArr;
};


// TEST CODE for the above functionality

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words1 = [1,2,3];
console.log(without(words1, [1]));
assertArraysEqual(words1, [1,2,4]);

const words2 = ["1", "2", "3"];
console.log(without(words2, [1, 2, "3"]));
assertArraysEqual(words2, ["1", "2", "3"]);

