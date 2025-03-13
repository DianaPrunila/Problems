let string = "Ana ar putea avea cirese";

let spl = string.split("");
let rev = spl.reverse().toString();
let mod = rev.replace(/\,/g, "");

console.log("string is:", string);
console.log("split array is:", spl);
console.log("reverse string is:", mod);
