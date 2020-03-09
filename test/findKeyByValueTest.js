const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue Tests', () => {
  it('returns key associated with a value', () => {
    assert.equal(findKeyByValue({a: 1, b: 2, c: 3}, 3), "c");
  });
  it('returns undefined if key value does not exist in object', () => {
    assert.equal(findKeyByValue({a: 1, b: 2, c: 3}, "ten"), undefined);
  });
});
