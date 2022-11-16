var nameOfDog; // Undefined
console.log(nameOfDog);
var nameOfDog = "Firulai";
console.log(nameOfDog); // Firulai

// Function Hoisting
nameTheDog(); // Even though the function is called before it is declared, it works because of hoisting...

function nameTheDog() {
  var dogName = "Elmo";
  console.log(`El mejor peerito es ${dogName}`);
}
