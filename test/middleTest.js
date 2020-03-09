const eqArrays = require('../eqArrays');
const middle = require('../middle')
// const assertArraysEqual = require('../assertArraysEqual');

// // TEST CODE
// assertArraysEqual([1, 4], []);
// assertArraysEqual([1, 3, 4], [3]);
// assertArraysEqual([1, 3, 4, 4], [3, 4]);
// assertArraysEqual([],[])

const assert = require('chai').assert;

describe("middle tests", () => {
  it("return an empty array if given an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("return an empty array if given an array of length 2", () => {
    assert.deepEqual(middle([1,2]), []);
  }); 
  it("return the middle of an odd numbered array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return the middle 2 items of an even numbered array", () => {
    assert.deepEqual(middle([1,2,3,4]), [2, 3]);
  });
});