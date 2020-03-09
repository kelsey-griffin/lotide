//ACTUAL FUNCTION
const middle = function(array) {
 
  if (array.length <= 2) {
    return []
  } else {
    const middleIndex = (array.length - 1) / 2
    if (Number.isInteger(middleIndex)) {
      return [array[middleIndex]]
    } else {
      return [array[Math.floor(middleIndex)], array[Math.ceil(middleIndex)]];
    }
  } 
};  

module.exports = middle;

