// Function to find the tail in an array

const assertEqual = require ('./assertEqual'); 

const tail = function(inputArray) {
  if (inputArray.length > 1)
    return inputArray.slice(1);
  else if (inputArray.length === 1)
    return [];
  else
    return inputArray;
};

module.exports = tail;

