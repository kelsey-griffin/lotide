const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertArraysEqual;