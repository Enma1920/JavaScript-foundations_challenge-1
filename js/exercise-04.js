/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo"); 
/* output: moo
Since we have a true boolean value and it executes console.log(), therefore "moo" is printed to the console
*/
false && console.log("moo moo?"); 
/* output: false
Since the left operand is a false boolean value and the console.log() it is executed,
so false AND true = false, it will print to the console false

*/

true || console.log("hello friend");
/* output: true
The left operand is a true boolean value and console.log() it is not executed
therefore it will print true
*/


false || console.log("bye friend");
/* output: bye friend
the left operand it's a false boolean value and the console.log it is executed
therefore bye friend it is printed to the console
*/
