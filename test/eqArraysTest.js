const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 3], [4, 2]), false);
assertEqual(eqArrays([1, 3, "4"], [1, 3, 4]), false);

//testing