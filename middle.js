// TEST/ASSERTION FUNCTIONS 
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

const assertArraysEqual = function(actual, expected) {
  let match = true
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] != expected[i]) match = false
  }
  if (match) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }  
};

//ACTUAL FUNCTION
const middle = function(array) {
 
  if (array.length <= 2) {
    return []
  } else {
    const middleIndex = (array.length - 1) / 2
    if (Number.isInteger(middleIndex)) {
      return array[middleIndex]
    } else {
      return [array[Math.floor(middleIndex)], array[Math.ceil(middleIndex)]];
    }
  } 
};  
console.log(middle([1,2]))

// TEST CODE
assertArraysEqual(middle([1, 4]), []);
assertArraysEqual(middle([1, 3, 4]), [3]);
assertArraysEqual(middle([1, 3, 4, 4]), [3, 4]);
assertArraysEqual([],[])