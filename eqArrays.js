// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;

  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){ 
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
console.log(assertEqual(eqArrays([1, 3], [4, 2]), false));
console.log(assertEqual(eqArrays([1, 3, "4"], [1, 3, 4]), false));
