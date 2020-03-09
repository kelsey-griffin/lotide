const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('eqObjects Test', () => {
  it('returns false when two objects have different number of keys', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, {c: "1", d: ["2", 3], e: 4}), false)
  });
  it('returns true when two objects are the same', () => {
    assert.deepEqual(eqObjects({c: "1", d: ["2", 3]}, {c: "1", d: ["2", 3]}), true)
  });
});
