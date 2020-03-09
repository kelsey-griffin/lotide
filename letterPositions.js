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

module.exports = letterPositions;
// assertArraysEqual(letterPositions("this was so hard").s, [3, 7, 9])