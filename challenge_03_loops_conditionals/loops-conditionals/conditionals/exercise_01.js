/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

function evenOdd(number) {
  let result;
  if (number % 2 == 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}

console.log(evenOdd(42));
console.log(evenOdd(5));
