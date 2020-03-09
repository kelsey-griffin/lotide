const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);

  }
};

const recursive_eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
 
  for (const i of arr1) {
    if (Array.isArray(arr1[i])) {
      eqArrays(arr1[i], arr2[i]);
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = recursive_eqArrays;
// assertEqual(eqArrays([[2],[[4, 3]], 3], [[2],[[4, 3]], 3]), true);