// Write a function that checks if a number is prime

function primeNr(x) {
  if (x % x === 0 && x % 1 === 0) {
    // daca x se imbarte la un y diferit de 1 si x=> x prim
    return " prime";
  } else {
    return "NOT prime";
  }
}

console.log(primeNr(5));
console.log(primeNr(25));
console.log(primeNr(18));
console.log(primeNr(16));
