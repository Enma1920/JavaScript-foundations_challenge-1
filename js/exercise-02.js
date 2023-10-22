/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.
*/
let varExample;
varExample = "Moo!";
console.log(varExample);

const varExample2; /*you can't declare a const variable without initializing it.
                    constant variable does not have undefined value, therefore if it's not inizialized it will break*/
console.log(varExample2);

varExample2 = "Moo!"; 
