// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let gender = 'female';
let isMale = 'male' === gender;

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/


/* WRITE YOUR ANSWER HERE */

let num1 = 2;
let num2 = 6;
console.log(num1 === 8 || num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8 || num2 + num1 === 8)

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

let twoStrings = 'My first string.' + ' My secound String';

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

let num3 = 4;
let num4 = 45;
let num5 = 18;

/*
a,b,c
a,c,b
b,a,c,
b,c,a
c,a,b
c,b,a
*/

if (num3 > num4 && num4 > num5) {
    console.log(num3, num4, num5)
}
if (num3 > num5 && num5 > num4) {
    console.log(num3, num5, num4)
}
if (num4 > num3 && num3 > num5) {
    console.log(num4, num3, num5)
}
if (num3 > num4 && num4 > num5) {
    console.log(num3, num4, num5)
}
if (num5 > num3 && num3 > num4) {
    console.log(num5, num3, num4)
}
if (num5 > num4 && num4 > num3) {
    console.log(num3, num4, num5)
}




//more advanced solution
let numArr = [num3, num4, num5]

console.log(numArr.sort(function (a, b) {
    return a - b;
}));


/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
let num6 = 4;
let num8 = 3;

let average = (num6 + num8) / 2

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
let firstString = 'What a wonderfull day';
let secoundString = 'My secound string';

firstString.length > secoundString.length ?
    console.log(firstString) : console.log(secoundString);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

let intOrNot = 12;
console.log(typeof intOrNot)


/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

let pieceOfNumber = 13;
let wholeNumber = 300;

let thePercentage = pieceOfNumber / (wholeNumber / 100)
console.log(thePercentage)

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

let num11 = 7;

if (num11 % 2 === 0) {
    console.log('even')
}
else {
    console.log('odd')
}


