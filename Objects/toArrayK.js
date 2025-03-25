// Convert an object into an array of keys

const fName = { a: "ana", b: "bianca", c: "cristina" };

let n = null;
for (let i in fName) {
  n += i;
}

let s = n.slice(4);

let spl = s.split("");

console.log(n);
console.log(s);
console.log(spl);
