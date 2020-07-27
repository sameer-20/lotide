
const assertEqual = require ('../assertEqual');
const tail = require ('../tail');
const assert = require ('chai').assert;


// TEST CODE for tail.js

// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(result[1], "lAbs");

// result = tail([4,5,6,-7,-8]);
// assertEqual(result.length, 4);
// assertEqual(result[0], 5);
// assertEqual(result[2], 7);
// assertEqual(result[3], -8);

// result = tail([4]);
// assertEqual(result.length, 0);
// assertEqual(result[0], "");

// result = tail(["4","5","6"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "5");
// assertEqual(result[0], 5);

// result = tail([]);
// assertEqual(result.length, 0);
// assertEqual(result[0], "");

describe("#tail", () => {

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);  
  });

  it("returns [] for ['1']", () => {
    assert.deepEqual(tail([1]), []);  
  });

  it("returns ['2'] for ['1','2']", () => {
    assert.deepEqual(tail(['1','2']), ['2']);  
  });  

  it("returns ['2','3'] for ['1','2','3']", () => {
    assert.deepEqual(tail(['1','2','3']), ['2','3']);  
  });

  it("returns ['1',2,3] for ['1','1',2,3]", () => {
    assert.deepEqual(tail(['1','1',2,3]), ['1',2,3]);  
  });

  
}); 
