const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false