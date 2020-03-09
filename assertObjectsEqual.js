
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

const eqObjects = function(objA, objB) {
  let aProps = Object.getOwnPropertyNames(objA);
  let bProps = Object.getOwnPropertyNames(objB);

  //if objects don't have the same number of properties  
  if (aProps.length !== bProps.length) { 
      return false;
  };

  for (prop of aProps) {

    if (Array.isArray(objA[prop]) && Array.isArray(objB[prop])) {
      eqArrays(objA[prop], objB[prop])
      
    } else if (objA[prop] !== objB[prop]) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})