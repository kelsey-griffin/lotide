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

module.exports = countOnly;

