// Find the largest number in an array

let arr = [1, 3, 5, 9, 2, 7, 8, 3, 2];

let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < i) {
    nMax = arr[i];
  } else {
    max = nMax;
  }
}

console.log(max);
