// Merge two sorted arrays into one sorted array

let arr = [1, 3, 5, 6, 4, 9, 7, 8, 2];
let arr2 = [2, 5, 1, 6, 3, , 8, 4, 7, 9];

let con = arr.concat(arr2);
let sor = con.sort().toString();

console.log("contatenated is:", con);
console.log("sorted is:", sor);
