// Write a function that generates a random number between two given numbers.

function randomNr(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNr(20, 40));
