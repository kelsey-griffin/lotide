const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 4], []);
assertArraysEqual([1, 3, 4], [3]);
assertArraysEqual([1, 3, 4, 4], [3, 4]);
assertArraysEqual([],[])