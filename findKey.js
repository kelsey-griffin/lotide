const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);

  }
};

// const restaurants = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

const findKey = function(object, callback) {  
  for (key in object) {
    if (callback(object[key])) return key;
  }
};


// assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
