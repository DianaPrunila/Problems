// Add a new property country to an existing object

const person = { name: "Anna", city: "London", age: 27 };
Object.defineProperty(person, "country", { value: "UK" });

console.log(person);
