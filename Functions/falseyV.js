// Write a function that removes falsy values from an array

const falsey = [
  "Ana",
  null,
  "are",
  3,
  undefined,
  "Creveti",
  false,
  "si",
  550,
  NaN,
  "",
  "ron",
  -0,
  0n,
];
let toDelete = [null, undefined, false, NaN, "", -0, 0n];
let toCancel = null;
let index = falsey.filter(toCancel);

function falseyNr() {
  for (let i = 0; i <= falsey.length; i++) {
    if (i === null) {
      falsey.splice(i.i, 1);
      return falsey;
    }
  }
}
console.log(falsey);
