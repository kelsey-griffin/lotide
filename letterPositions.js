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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const noSpaces = sentence.replace(/ /g, '').toLowerCase().split('');
  const resultObject = {};
  for (let letter of noSpaces) {
    resultObject[letter] = [];
  }
  let counter = 0
  for (let letter of noSpaces) {
    resultObject[letter].push(counter);
    counter ++
  }  
  return resultObject;
};

assertArraysEqual(letterPositions("this was so hard").s, [3, 7, 9])