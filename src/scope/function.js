/**
 * Function scope
 */
function greetings() {
  let userName = "Ana";
  console.log(userName); // Output: Ana

  if (userName === "Ana") {
    console.log(`Hello ${userName}!`); // Output: Hello Ana!
  }
}

greetings();

console.log(userName); // Output: userName is not defined
