// const assertEqual = require('../assertEqual');
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements);
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse");
// assertEqual(result[1], "Labs"); // ensure second element is "Labs");


const assert = require('chai').assert;

describe("tail tests", () => {
  it("return array length of 2 if given array length 3", () => {
    assert.equal(tail([1, 2, 3]).length, 2);
  });
  it("return all but the first element of an array", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("return an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});