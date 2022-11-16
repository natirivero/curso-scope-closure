/**
 * Var
 */
var firstName; // Undefined
firstName = "Natali";
console.log(firstName);

var lastName = "Castillo"; // declarando y asignando
lastName = "Rivero"; // reasignando
console.log(lastName);

var secondName = "Ale"; // declarar y asignar
var secondName = "Alejandra"; // reasignando
console.log(secondName);

/**
 * Let
 */
let fruit = "Apple"; // declarando y asignando
fruit = "Kiwi"; // reasignando
console.log(fruit);

// let fruit = "Banana"; // Error: Cannot redeclare block-scoped variable 'fruit'.

/**
 * Const
 */
const animal = "dog"; // declarando y asignando
// animal = "cat"; // Error: Assignment to constant variable.
// const animal = "Snake"; // Error: Cannot redeclare block-scoped variable 'animal'.
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles); // Output: [ '🚗' ]

vehicles.pop();
console.log(vehicles); // Output: []
