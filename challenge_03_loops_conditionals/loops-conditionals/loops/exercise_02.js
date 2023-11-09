/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/
for (let index = 1; index <= 100; index++) {
  let result = "Checkpoint! ";
  if( index%10===0){
    if(index === 50){
      result = "Half way there!";
    }
    if(index===100){
      result = "You made it!";
    }  
    console.log(result);
  }
  
}
console.log("All, done!");
