const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('letterPositions Test', () => {
  it('returns array of the positions of a letter in a string (having had spaces removed)', () => {
    assert.deepEqual(letterPositions("hey how's it going").h,[0, 3]);
  });
});