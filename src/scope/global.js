// variables

var a; // declarada
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignación
var a = "aa"; // redeclaración

/**
 * Global scope
 */
var fruit = "apple"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // global porque estoy asignando sin declarar
  console.log(country);
}

countries();
console.log(country);
