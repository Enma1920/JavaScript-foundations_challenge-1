/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

function Even_Odd(number){
    if(number % 2 == 0){
        console.log(number+ " is even");
    }
    else{
        console.log(number+" is odd");
    }
}

console.log(Even_Odd(42));
console.log(Even_Odd(5));