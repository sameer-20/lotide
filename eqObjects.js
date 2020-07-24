// Function to compare two strings and check if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  else
    return console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
};


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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of Object.keys(object1)) {
     
    let val1 = Array.isArray(object1[key]);
    let val2 = Array.isArray(object2[key]);
    
    if (val1 && val2)
      return eqArrays(object1[key], object2[key]);
    
    else if (object1[key] !== object2[key])
      return false;  
  }
  return true;
};



// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // Assertion Passed

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // Assertion Passed

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // Assertion Passed

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); // Assertion Passed

const cd3 = { c: "1", d: ["2", "3"] };
//eqObjects(cd, cd3); // => false
assertEqual(eqObjects(cd, cd3), false); // Assertion Passed

const cd4 = { c: "1", d: ["2", 4] };
//eqObjects(cd, cd4); // => false
assertEqual(eqObjects(cd, cd4), false); // Assertion Passed