/* Implement middle which will take in an array and return the 
middle-most element(s) of the given array.*/


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
    //return "🙂 Arrays are equal!";
  else
    console.log(`❌ Arrays are NOT equal!`);
    //return "❌ Arrays are NOT equal!";
};

// Function to find the middle element in an array
const middle = function (array) {
  //console.log(array);
  let newArray = [];
  let index = Math.ceil(array.length / 2) - 1;
  
  if (array.length <= 2)
    return newArray;
  else if (array.length % 2 !== 0) {
    newArray.push(array[index]);
    return newArray;
  }
  else if (array.length % 2 === 0) {
    newArray.push(array[index]); 
    newArray.push(array[index + 1]);
    return newArray; 
  }
};

// Function to print the middle element(s) in an array
const printMiddle = function (array) {
  console.log(array); 
};


// TEST CODE
/*middle([]) // => []
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
middle(["Hello","Hi","Bye","See You"]);
middle(["Apple","Mango","Berry"]);
middle(["Single"]);
middle(["One","TWo"]);*/

printMiddle(middle([])); // => []
printMiddle(middle([1])); // => []
printMiddle(middle([1, 2])); // => []
printMiddle(middle([1, 2, 3])); // => [2]
printMiddle(middle([1, 2, 3, 4, 5])); // => [3]
printMiddle(middle([1, 2, 3, 4])); // => [2, 3]
printMiddle(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
printMiddle(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
printMiddle(middle(["Hello","Hi","Bye","See You"]));
printMiddle(middle(["Apple","Mango","Berry"]));
printMiddle(middle(["Single"]));
printMiddle(middle(["One","TWo"]));

console.log(eqArrays(middle([1, 2, 3]), [2])); // => true
console.log(eqArrays(middle([1, 2, 3, 4]), [2])); // => false
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3])); // => true

//assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => true
//assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2]), true); // => false
//assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => true

//assertArraysEqual((middle([1, 2, 3]), [2]), true); // => true
//assertArraysEqual((middle([1, 2, 3, 4]), [2]), true); // => false
//assertArraysEqual((middle([1, 2, 3, 4]), [2, 3]), true); // => true


