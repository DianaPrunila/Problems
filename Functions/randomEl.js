// Write a function that returns a random element from an array.
const El = ["ana", 34, 4, 0, null, undefined];
const len = El.length;

function randomEl(x) {
  const randomIndex = Math.floor(Math.random() * len);
  return x[randomIndex];
}

console.log(randomEl(El));
