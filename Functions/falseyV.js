// Write a function that removes falsy values from an array

const falsey = [
  null,
  3,
  undefined,
  "Creveti",
  false,
  "si",
  550,
  NaN,
  "",
  -0,
  0n,
];
let toDelete = [null, undefined, false, NaN, "", -0, 0n];

let filt = falsey.filter(falseyNr);

function falseyNr(value) {
  return !toDelete.includes(value);
}

console.log(filt);
