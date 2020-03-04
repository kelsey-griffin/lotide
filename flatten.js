// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(flatten(actual), expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
};


const flatten = function(nestedArrays) {
  let flat = [];
  for (let outer = 0; outer < nestedArrays.length; outer++) {
    if (Array.isArray(nestedArrays[outer])) {
      for (let inner = 0; inner < nestedArrays[outer].length; inner++) {
        flat.push(nestedArrays[outer][inner])
      }
    } else flat.push(nestedArrays[outer])
  }
  return flat
};

assertArraysEqual([1, [3, 5, 8], 4], [1, 3, 5, 8, 4]);
