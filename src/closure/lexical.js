/*
Closure: Cuando una función anidada, accede a una variable fuera de su contexto.
*/
const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // inner function
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      // inner function
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}
myFunction();

/* Ejercicio */
function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  };
}
console.log(sumWithClosure(15)(3));
