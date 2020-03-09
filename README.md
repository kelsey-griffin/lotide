
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kelsey-griffin/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
`head(array)`: returns the head of the array [1, 2, 3] => [1]
`tail(array)`: returns the tail of the array [1, 2, 3] => [2, 3]
`middle(array)`: returns the middle of the array (if even returns the two middle elements) [1, 2, 3, 4] => [2, 3]
`assertEqual(a, b)`: returns a boolean describing if two items are equal (not optimized for objects or arrays)
`assertObjectsEqual(obj1, obj2)`: returns a boolean describing if two arrays are equal
`assertArraysEqual`:returns a boolean describing if two objects are equal
`countLetters("phrase")`: returns an object containing the number of occurences of each letter in a phrase
`countOnly(fullList, shortList)`: given an object with a shortlist of items (listed true or false), function will return an object with the number of occurrences of each item that is true
`eqArrays(arr1, arr2)`: returns a boolean describing if two arrays are equal
`eqObjects(obj1, obj2)`: returns a boolean describing if two objects are equal
`findKey(obj, callback)`: returns the key from given object that matches callback function's requirements
`findKeyByValue(obj, value)`: returns the key matching a given value in an object
`letterPositions("phrase")`: returns an array of the positions of each letter in a given phrase
`map(array, callback)`: returns a new array each element mutated according to the callback function
`flatten(array)`: flattens nested arrays into one array
`takeUntil(array, callback)`: returns each element of the array until the element meets callback function
`without(array, elementToRemove)`: returns an array with specified element removed
`recursive_eqArrays(array1, array2)`: returns a boolean describing if two arrays are equal (but with recursive code)
`recursive_eqObjects(obj1, obj2)`: returns a boolean describing if two objects are equal (but with recursive code)
