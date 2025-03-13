// Find the average of numbers in an array

let arr = [1, 3, 5, 5, 2, 7, 8, 3, 2]; //18

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let average = sum / 2;

console.log("the average is:", average);
