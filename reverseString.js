let string = "Ana ar putea avea cirese";

let spl = string.split(""); // (24) ['A', 'n', 'a', ' ', 'a', 'r', ' ', 'p', 'u', 't', 'e', 'a', ' ', 'a', 'v', 'e', 'a', ' ', 'c', 'i', 'r', 'e', 's', 'e']

// let len = spl.length;
let text = "";
for (let i = 0; i < spl.length; i--) {
  text += spl[i - 1];
}

// let rev = spl.reverse().toString();
// let str= .toString()

// let rule = /\,/g;

// let mod = rev.replace(/\,/g, "");

console.log(text);
