const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
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

const without = function(array, toRemove) {
  let newArray = array;
  for (let i = 0; i < toRemove.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === toRemove[i]) {
        newArray.splice(j , 1)
      }
    }
  }  
  return newArray;
};

// // TEST CODE
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);