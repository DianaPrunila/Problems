// Clone an object without modifying the original

const person = { name: "Anna", city: "London", age: 27 };
console.log("this is person: ", person); // "," 'couse it would try to concatenate a string with a obj if you put "+" and you'd get "[object Object]"

const toJsonString = JSON.stringify(person); // it removes the references
console.log("this is a JSON string: " + toJsonString);

const backObj = JSON.parse(toJsonString);
console.log("this is the copy: ", backObj);

/////////////////////////////////////////////////////////////////

const person1 = { name: "Anna", city: "London", age: 27 };

const clone = structuredClone(person1);

console.log("this is the clone: ", clone);
