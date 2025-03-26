// Convert an object into an array of values

const fName = { a: "ana", b: "bianca", c: "cristina" };

let n = "";

for (let [letter, name] of Object.entries(fName)) {
  n += name + ",";
}
let m = n.split(",");
let o = m.slice(0, 3);
console.log(n);
console.log(m);
console.log(o);

// let x = Object.values(fName);

// console.log(x);
