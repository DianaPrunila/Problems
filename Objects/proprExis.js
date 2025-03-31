// Check if a property exists in an object

const fName = { a: "ana", b: "bianca", c: "cristina" };

let target = "c";

console.log("The keys are: " + Object.keys(fName));

if (target in fName) {
  console.log("Exists: " + target);
} else {
  console.log("Not exist " + target);
}

////
let found = false;
for (let i of Object.keys(fName)) {
  if (i == target) {
    console.log("Exists: " + target);
    found = true;
    break; // Stop loop when found
  }
}
if (!found) {
  console.log("Not exist " + target);
}
