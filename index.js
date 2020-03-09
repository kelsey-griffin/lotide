// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual')
const assertArraysEqual = require('./assertArraysEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPositions = require('./letterPositions')
const map = require('./map')
const flatten = require('./flatten')
const takeUntil = require('./takeUntil')
const without = require('./without')
const recursive_eqArrays = require('./recursive_eqArrays')
const recursive_eqObjects = require('./recursive_eqObjects')

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertObjectsEqual,
  assertArraysEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  flatten,
  takeUntil,
  without,
  recursive_eqArrays,
  recursive_eqObjects,
};
