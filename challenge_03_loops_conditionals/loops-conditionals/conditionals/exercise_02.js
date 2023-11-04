/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
// as the second condition is executed since it's true, and it follows a vertical code, therefore, once a condition it's executed
// it's stops and it doesn't verify the rest even if they are true, because it already enters in a condition.
// A possible solution it's to use else if conditions that also verifies that are not in the range of the previous or the following conditions
// like this:
/*
else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
}
*/
