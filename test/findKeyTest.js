const assert = require('chai').assert;
const findKey = require('../findKey');

describe('findKey Tests', () => {
  it('returns key that matches a callback function', () => {
    assert.equal(findKey({a: {rating: 1}, b: {rating: 2}}, x => x.rating % 2 === 0), "b");
  });
  it('returns only first key to match condition if multiple keys match', () => {
    assert.equal(findKey({a: {rating: 4}, b: {rating: 2}}, x => x.rating % 2 === 0), "a");
  });
});
