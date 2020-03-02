// FUNCTION IMPLEMENTATION
const head = function(array) {
  return array[0]
}


const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;

  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(head([2,4,1]), 2));
console.log(assertEqual("hi", "hi"));
console.log(assertEqual(1, 1));

