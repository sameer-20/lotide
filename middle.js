/* Implement middle which will take in an array and return the 
middle-most element(s) of the given array.*/

const eqArrays = require ('./eqArrays');

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
  const result = middle (array);
  console.log(result); 
};


module.exports = printMiddle;

