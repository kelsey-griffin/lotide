// TEST/ASSERTION FUNCTIONS 
const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2)
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(middle(actual), expected)) {
    console.log(`✅ Assertion passed: The middle of [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion failed: The middle of [${actual}] !== [${expected}]`);
  }
};

//ACTUAL FUNCTION
const middle = function(array) {
 
  if (array.length <= 2) {
    return []
  } else {
    const middleIndex = (array.length - 1) / 2
    if (Number.isInteger(middleIndex)) {
      return [array[middleIndex]]
    } else {
      return [array[Math.floor(middleIndex)], array[Math.ceil(middleIndex)]];
    }
  } 
};  


// TEST CODE
assertArraysEqual([1, 4], []);
assertArraysEqual([1, 3, 4], [3]);
assertArraysEqual([1, 3, 4, 4], [3, 4]);
assertArraysEqual([],[])