/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* WRITE YOUR ANSWER HERE */

/* 
1. String: A String can be anything besides numbers
2. Number: All the numbers, negative and positive
3. Boolean: Can only have 2 values, true or false
4. Null: A variable can be assigned with null, then it is empty
5. Undefined: A Variable that was declared but no value has been assigned yet
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
// It's something that you create and assign a value to. This value is than stored in this container 



/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/


/* WRITE YOUR ANSWER HERE */

let sum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/


/* WRITE YOUR ANSWER HERE */

//can't use 'x' for my variable name, because it's already been declared
let y = 12;
y - 12;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2)
console.log(name1 === 'john')


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let z = 7
if (z === 1) {
    console.log('one')
}
if (z === 2) {
    console.log('two')
}
if (z === 3) {
    console.log('three')
}
if (z === 4) {
    console.log('four')
}
if (z === 5) {
    console.log('five')
}
if (z === 6) {
    console.log('six')
}
if (z === 7) {
    console.log('seven')
}
if (z === 8) {
    console.log('eight')
}
if (z === 9) {
    console.log('nine')
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

let age = 12;
let youngerThan19 = 19 < age
