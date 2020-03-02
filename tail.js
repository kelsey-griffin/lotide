// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1, (array.length));
};


const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  } else {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;

  }
};

// TEST CODE
console.log(assertEqual(tail(["Bootcamp", "a", "b"]), ["Bootcamp"]));
console.log(assertEqual(tail([2, 4, 1]), [4, 1]));
console.log(assertEqual(tail["a", "b", "hi"], ["b", "hi"]));
console.log(assertEqual(tail([2, 4, 1]), 1));

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements);
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse");
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs");