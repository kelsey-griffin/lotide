const assert = require('chai').assert;
const flatten = require('../flatten');

describe('flatten test', () => {
  it('returns one array when given an array of nested arrays', () => {
    assert.deepEqual(flatten([[2], [[3]]]), [2, 3]);
  });
  it('returns one array when given an unnested array', () => {
    assert.deepEqual(flatten([2, 3]), [2, 3]);
  });
  it('returns an empty array when given an empty array', () => {
    assert.deepEqual(flatten([]), []);
  });
});