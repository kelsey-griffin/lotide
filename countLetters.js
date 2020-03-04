const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);

  }
};

const countLetters = function(itemsToCount) {
  const noSpaces = itemsToCount.replace(/ /g, '').toLowerCase();
  
  console.log(noSpaces)
  const resultObject = {};
  for (let letter of noSpaces) {
    resultObject[letter] = 0;
    console.log(resultObject)
    for (let checkLetter of noSpaces) {
      if (checkLetter === letter) {
        resultObject[letter] += 1;
      }
    }  
    if (resultObject[letter] === 0) {
      resultObject[letter] = undefined;
    }
  }  
  
  return resultObject;
};

const sentence = "Lighthouse in the house"
console.log(countLetters(sentence))