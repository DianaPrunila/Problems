// Count the number of vowels in a given string.

let f = "Ana ar putea avea peree"; //11

let reg = /[aeiou]/gi;

let find = f.match(reg).length;

let nr = find.length;

console.log(find);
