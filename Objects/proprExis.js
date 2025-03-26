// Check if a property exists in an object

const fName = { a: "ana", b: "bianca", c: "cristina" };

let target = "c";

// for (let [key, value] of Object.entries(fName)) {
//   if (key == target) {
//     console.log("The property already exists");
//   } else {
//     console.log("The property dose not exist yet");
//   }
// }
console.log("The keys are: " + Object.keys(fName));

for (let i of Object.keys(fName)) {
  if (i !== target) {
    continue;
  }
  console.log("The property already exists: " + Object.keys(fName[i]));
}
