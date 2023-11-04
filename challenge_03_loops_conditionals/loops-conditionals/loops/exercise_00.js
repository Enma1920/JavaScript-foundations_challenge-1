/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/
for (let num = 10; num <= 40; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

for (let num = 10; num <= 40; num++) {
  if (num % 2 != 0) {
    console.log(num);
  }
}
