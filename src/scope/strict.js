/*
var = pi // Even if we don't declare it, JS will (Hoisting).
pi = 3.1446;
console.log(pi); // Output: 3.1446
*/

"use strict";
pi = 3.1446;
console.log(pi); // Output: Undefined

function myFunction() {
  // 'use strict';
  return (pi = 3.1416);
}

console.log(myFunction());
