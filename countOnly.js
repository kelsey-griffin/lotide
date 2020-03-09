const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);

  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const resultObject = {}
  const keyList = []
  
  for (myKey in itemsToCount) {
    if (itemsToCount[myKey]) {
      keyList.push(myKey)
    }
  }
  
  for (let nameToCount of keyList) {
    resultObject[nameToCount] = 0;
    for (let name of allItems) {
      if (name === nameToCount) {
        resultObject[nameToCount] += 1;
      }
    }  
    if (resultObject[nameToCount] === 0) {
      resultObject[nameToCount] = undefined;
    }
  }  
  
  return resultObject;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
