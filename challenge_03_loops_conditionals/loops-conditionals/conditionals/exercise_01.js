/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

function evenOdd(number) {
<<<<<<< HEAD
  let result= number + " is odd";;
  if (number % 2 === 0) {
    result = number + " is even";
=======
  let result;
  if (number % 2 === 0) {
    result = number + " is even";
  } else {
    result = number + " is odd";
>>>>>>> 420770f (UPDATE JSON)
  }
  return result;
}

console.log(evenOdd(42));
console.log(evenOdd(5));
