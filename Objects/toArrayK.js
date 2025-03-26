// Convert an object into an array of keys

const fName = { a: "ana", b: "bianca", c: "cristina" };

let n = "";
for (let i in fName) {
  n += i;
}

let spl = n.split("");

console.log(n);
console.log(spl);

// let y = Object.keys(fName);

// console.log(y);
