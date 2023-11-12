/*
    1. At the start of the program print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts at the value "cat"
    3. Create an if statement that checks if animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program print out: "--- Animal check complete ---"
    8. Change animal to different values to make sure it works in all cases
*/
function animalProgram(animal) {
  let message = "Must be an alien";

  if (animal === "cat") {
    message = "Meow!";
  }
  if (animal === "dog") {
    message = "Woof!";
  }
  return message;
}

console.log("--- Animal Checker Program ---");
console.log(animalProgram("dog"));
console.log(animalProgram("cat"));
console.log(animalProgram("unicorn"));
console.log("--- Animal check complete ---");
