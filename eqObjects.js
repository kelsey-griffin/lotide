const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
