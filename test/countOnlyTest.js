const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('Count Only Tests', () => {
  it('returns an object with the number of times each name in the shortList (that is true) shows up in the fullList', () => {
    assert.deepEqual(countOnly(['a', 'b', 'c', 'c', 'c'], {a: true, c: true}), {a: 1, c: 3});
  });
  it('returns undefined if name does not appear in list', () => {
    assert.deepEqual(countOnly(['a', 'b', 'c', 'c', 'c'], {d: true}), {d: undefined});
  });
});

