// Convert an object into an array of values

const fName = { a: "ana", b: "bianca", c: "cristina" };

let n = null;

for (i of fName) {
  n += i;
}

console.log(n);
console.log();
console.log();
