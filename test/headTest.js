// const assertEqual = require('../assertEqual');
// const head = require('../head');
// 
// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(head([2,4,1]), 2);
// assertEqual("hi", "hi");
// assertEqual(1, 1);

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 2 for [2,4,1]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});