# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is an object-oriented scripting language used to add interactivity and dynamic features to websites. 
```

## About values

### What is a primitive value?

```
Primitive values are basic data that are not immutable and not an object, which means that cannot be changed once they are created.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
JavaScript have 7 types of primitive values: number, string, boolean, undefined, symbol, BigInt and null.
```
```js
const name = "Enma"; // string--> list of characters
const age = 20; // number--> integer numbers
const booleanVariable= true; // boolean--> represents either true or false

const variable;
console.log(variable); // will output undefined--> variable with any value

const nullVariable = null; // Null--> absence of any object value

const uniqueKey = Symbol("description"); // symbol--> used as object property keys

```

## About variables

### What is a variable in JS?

```
Variables are containers for storing data.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
There are 3 ways to define a variable, such as:
- var--> not recommended way, since are only limited to the function declared, which means if they are declared outside the function, they become globally scoped and can lead to unexpected behavior in some cases
- let
- const
```

### Which are the most used var naming conventions in JS?

```
- CamelCase, snake_case, PascalCase, kebab-case, UPPERCASE, _underscorePrefix and $DollarSignPrefix
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
- Equal (==): returns true if operands are equal (5=="5";)
- Not equal(!=): true if the operand are not equal (10 != "5";)
- Strict eual (===): true fi operands are equal and of the same type (5 === 5;)
- Strict not equal (!==): true if the operands are of the same type but not equal (5 !== "5";)
- Greater than (>): true if the left operand is greater than or equal to the right operand (10 > 5;)
- Less than (<): true if the left operand is less than the right one (3 < 7;)
- Less that or equal (<=): true if left oprand is less or equal to the right one (4 <= 3;)
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
- Logical AND (&&): returns true if both operands are true.
const x = true;
const y = false;
const result = x && y; returns false

- Logical OR (||): return true if at least one of the operands is true.

result = x || y; returns true

- Logical NOT (!): The logical NOT operator negates the value of its operand. If the operand is true, it returns false; if the operand is false, it returns true.

const value = false;
const result = !value; returns true
```
