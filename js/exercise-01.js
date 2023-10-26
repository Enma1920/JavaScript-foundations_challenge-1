/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.

*/

let varName = "Enma";


function updateValue(value){
  varName = value;
  return varName;
}
console.log(updateValue("Lana del Rey"));
console.log(updateValue(true));
console.log(updateValue(28));
