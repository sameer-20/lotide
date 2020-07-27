
const assertEqual = require ('../assertEqual');
const head = require ('../head');
const assert = require('chai').assert;


// TEST CODE for head.js

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);  
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });

  it("do not return '5' for [4,5,6,7]", () => {
    assert.notEqual(head([4,5,6,7]), 5); 
  });

  it("returns 'Hello Dear' for ['Hello Dear']", () => {
    assert.strictEqual(head(['Hello Dear']), 'Hello Dear'); 
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

  
});
