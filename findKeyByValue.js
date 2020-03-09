const findKeyByValue = function(object, value) {
  let foundKey

  for (key in object) {
    if (object[key] === value) {
      foundKey = key
    }
  }
  return foundKey
}
module.exports = findKeyByValue;

