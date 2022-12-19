## JavaScript Fundamentals

### 4 Ways to Declare a JavaScript Variable:

-   Using `var`
-   Using `let`
-   Using `const`
-   Using nothing

### What are Variables?

Variables are containers for storing data (storing data values).

In this example, `x`, `y`, and `z`, are variables, declared with the `var` keyword:

```javascript
var x = 5;  
var y = 6;  
var z = x + y;
```

In this example, `x`, `y`, and `z`, are variables, declared with the `let` keyword:

```javascript
let x = 5;  
let y = 6;  
let z = x + y;
```

In this example, `x`, `y`, and `z`, are undeclared variables:

```javascript
x = 5;  
y = 6;  
z = x + y;
```

From all the examples above, you can guess:

-   x stores the value 5
-   y stores the value 6
-   z stores the value 11

### When to Use JavaScript var?

Always declare JavaScript variables with `var`,`let`, or`const`.

The `var` keyword is used in all JavaScript code from 1995 to 2015.

The `let` and `const` keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use `var`.

> It is recommendation as a good practice to use **const**  instead of `var` or `let`.


### When to Use JavaScript const?

If you want a general rule: always declare variables with `const`.

If you think the value of the variable can change, use `let`.

In this example, `price1`, `price2`, and `total`, are variables:

##### Example

```javascript
const price1 = 5;  
const price2 = 6;  
let total = price1 + price2;
```

The two variables `price1` and `price2` are declared with the `const` keyword.

These are constant values and cannot be changed.

The variable `total` is declared with the `let` keyword.

This is a value that can be changed.

#### Just Like Algebra

Just like in algebra, variables hold values:

```javascript
let x = 5;  
let y = 6;
```

Just like in algebra, variables are used in expressions:

```javascript 
let z = x + y;
```

From the example above, you can guess that the total is calculated to be 11.

>**Note:** Variables are containers for storing values.

### JavaScript Identifiers

All JavaScript **variables** must be **identified** with **unique names**.

These unique names are called **identifiers**.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

-   Names can contain letters, digits, underscores, and dollar signs.
-   Names must begin with a letter.
-   Names can also begin with $ and _ (but we will not use it in this tutorial).
-   Names are case sensitive (y and Y are different variables).
-   Reserved words (like JavaScript keywords) cannot be used as names.

> **Note:** JavaScript identifiers are case-sensitive.

### The Assignment Operator

In JavaScript, the equal sign (`=`) is an "assignment" operator, not an "equal to" operator.

This is different from algebra. The following does not make sense in algebra:

```javascript
x = x + 5
```

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

> **Note:** The "equal to" operator is written like `==` in JavaScript.

### JavaScript Data Types

#### JavaScript has 8 Datatypes

1. String  
2. Number  
3. Bigint  
4. Boolean  
5. Undefined  
5. Null  
7. Symbol  
8. Object

#### The Object Datatype

The object data type can contain:

1. An object  
2. An array  
3. A date


```javascript
// Numbers:  
let length = 16;  
let weight = 7.5;  
  
// Strings:  
let color = "Yellow";  
let lastName = "Johnson";  
  
// Booleans  
let x = true;  
let y = false;  
  
// Object:  
const person = {firstName:"John", lastName:"Doe"};  
  
// Array object:  
const cars = ["Saab", "Volvo", "BMW"];  
  
// Date object:  
const date = new Date("2022-03-25");
```

> **Note:** A JavaScript variable can hold any type of data.

#### The Concept of Data Types

In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

```javascript
let x = 16 + "Volvo";
```

Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

```javascript
let x = "16" + "Volvo";
```

> **Note:** When adding a number and a string, JavaScript will treat the number as a string.


JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```javascript
let x = 16 + 4 + "Volvo";
//Result:
//Volvo164
```

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.

#### JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```javascript
let x;       // Now x is undefined  
x = 5;       // Now x is a Number  
x = "John";  // Now x is a String
```

#### JavaScript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

```javascript
// Using double quotes:  
let carName1 = "Volvo XC60";  
  
// Using single quotes:  
let carName2 = 'Volvo XC60';
```

#### JavaScript Numbers

All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:

```javascript 
// With decimals:  
let x1 = 34.00;  
  
// Without decimals:  
let x2 = 34;
```

#### Exponential Notation

Extra large or extra small numbers can be written with scientific (exponential) notation:

```javascript
let y = 123e5;    // 12300000  
let z = 123e-5;   // 0.00123
```

#### JavaScript BigInt

All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

```javascript
let x = BigInt("123456789012345678901234567890");
```

#### JavaScript Booleans

Booleans can only have two values: `true` or `false`.

```javascript
let x = 5;  
let y = 5;  
let z = 6;  
(x == y)       // Returns true  
(x == z)       // Returns false
```

Booleans are often used in conditional testing.


#### Undefined

In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

```javascript
let car;    // Value is undefined, type is undefined
```

Any variable can be emptied, by setting the value to `undefined`. The type will also be `undefined`.

#### Empty Values

An empty value has nothing to do with `undefined`.

An empty string has both a legal value and a type.

```javascript
let car = "";    // The value is "", the typeof is "string"
```

#### The typeof Operator

You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.

The `typeof` operator returns the type of a variable or an expression:


```javascript
typeof ""             // Returns "string"  
typeof "John"         // Returns "string"  
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"  
typeof 314            // Returns "number"  
typeof 3.14           // Returns "number"  
typeof (3)            // Returns "number"  
typeof (3 + 4)        // Returns "number"
```


#### JavaScript Arrays

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called `cars`, containing three items (car names):

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

#### JavaScript Objects

JavaScript objects are written with curly braces `{}`.

Object properties are written as name:value pairs, separated by commas.

```javascript
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  
```

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
