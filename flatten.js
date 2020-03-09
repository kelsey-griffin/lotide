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
    } else {
      flat.push(nestedArrays[outer])
    }
  }
  return flat
};

// const flatten = function(array) {
//   return array.reduce(function(acc, curr) {
//     if (Array.isArray(curr)) {
//       let vals = []
//       for (let inner = 0; inner < curr.length; inner++) {
//         vals.push(curr[inner])
//       }
//       return acc.concat(vals)
//     }

//     return acc.concat([curr])
//   }, [])
// }

// assertArraysEqual([1, [3, 5, 8], 4], [1, 3, 5, 8, 4]);
