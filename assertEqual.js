// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;

  }
};

module.exports = assertEqual;