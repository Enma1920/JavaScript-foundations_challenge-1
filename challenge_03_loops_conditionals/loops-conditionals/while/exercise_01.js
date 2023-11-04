/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/
let indexWhile = 10;
while (indexWhile <= 40) {
  if (indexWhile % 2 == 0) {
    console.log(indexWhile);
  }
  indexWhile++;
}

indexWhile = 10;
while (indexWhile <= 40) {
  if (indexWhile % 2 != 0) {
    console.log(indexWhile);
  }
  indexWhile++;
}
