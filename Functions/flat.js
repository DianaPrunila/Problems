// Write a function that flattens a nested array.

const nestedArray = [
  ["apple", "banana", "cherry"],
  [10, 20, 30, 40],
  [true, false, null, undefined],
  ["cat", ["dog", "fish"], "bird"],
];

const len = nestedArray.length;

function flatted(x) {
  let fla = x.flat(2);
  return fla;
}

console.log(flatted(nestedArray));
