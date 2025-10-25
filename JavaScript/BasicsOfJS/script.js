// console.info("information")

// Data Types

// -premetive
// Number(10,10.56) 2^53-1
// String("A","Amana",'I am A boy')
// Boolean(True, false)
// undefined
// null
// symbol
// BigInt

// -Reference
// Array
// Object
// Function

// var a =10;
// console.log(a);
// var b =10.7;
// console.log(b);
// var str='Aman';
// console.log(str);

// var bool=true
// console.log(bool)

// var age = prompt("Enter your age")
// console.log(age)

// var a='Aman'
// var b='kumar'
// console.log(a + b);
// output:-Amankumar

// var a='12'
// var b='13'
// console.log(a + b);
// output:1213

// + : add , Concatination

// var num1 =prompt("Enter number1")
// var num2 =prompt("Enter number2")
// console.log(num1+num2)

// Type Conversion
// var num1 =prompt("Enter number1")
// var num2 =prompt("Enter number2")
// var numReal1 = Number(num1)
// var numReal2 = Number(num2)
// console.log(numReal1+numReal2)

// var num1 =Number(prompt("Enter number1"))
// var num2 =Number(prompt("Enter number2"))
// console.log(num1+num2)

// undefined
// var a;
// console.log(a);

// null
// var a=null;
// console.log(a);

// bigInt
// var a= 10000000000067766500087n
// console.log(a);

//  hoisting
// console.log(a)
// var a=10
// console.log(a)

// conditional statements

// var a = 10;
// var b = 5;

// if (a > b) {
//   console.log("Hello");
// }
// else{
//     console.log("bye");

// }

// var a = 10;
// var b = 10;

// if (a > b) {
//   console.log("yes");
// }
// else{
//     console.log("No");

// }

// var age = Number(prompt('Enter your age '))

// if(age>=18){
//     console.log("you are Adult");

// }
// else{
//     console.log("you are not Adult");
// }

// var marks = Number (prompt('Enter your marks'))

// if (marks>=90) {
//     console.log('you got A+ Grade');

// }else if(marks>=80){
//     console.log('you got B+ grade');

// }else if(marks>=70){
//     console.log('you got c+ grade');
// }
// else{
//     console.log('Failed');

// }

// Binary Operater(&& ,||)
// true - 1
// false -0

// var age =30

// if (age>18 && age<60) {
//     console.log('you can vote');

// }else{
//     console.log('you can not vote');
// }

// var a = 10;
// var b = "10";

// if (a === b) {
//   console.log("Condition True");
// }
// else{
//     console.log("Condition False");

// }

// !=:- Not Equal to
// = :- Value assine
// ==:-Compare Values
// ===:-Compare Values and Data type

// var unit = Number (prompt("Enter Units"))

// var bill

// if(unit>=100){
//     bill=unit*10
// }else if(unit>50){
//     bill=unit*8
// }else{
//     bill=unit*5
// }
// console.log(bill);

// Ternary Operator

// var a=18
// console.log(a>10?'Hello':'Not Hello');

// loops:-

// var i=0
// while (i<5) {
//     console.log('Hello',i)
//     i++

// }

// Do while Loop:-
// var a=0
// do {
//     console.log('Hello');
//     a++

// } while (a<10);

// for loop

// for(var a=0;a<10;a++){
//     console.log(a);

// }

// x=6
// x%=5;
// console.log(x);

// Quection 1: Age Category Message – Ask the user for their age. If they are under 18, print “You are a minor.” If they are between 18 and 60, print “You are an adult.” If they are above 60, print “You are a senior citizen.”
// Ans:-
// var age = Number(prompt("Enter your Age:"));

// if (age < 18) {
//   console.log("You are a minor.");
// } else if (age >= 18 && age <= 60) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a senior citizen.");
// }

// Quection 2:Even or Odd Sum – Take two numbers from the user using prompt(). If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.”

// Ans:-

// var num1 = Number(prompt("Enter your num1"));
// var num2 = Number(prompt("Enter your num2"));

// var sum=num1+num2

// if (sum%2==0) {

//     console.log('Even Sum');

// }else{
//     console.log('Odd sum');

// }

// Quection 3: Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

// var ch = prompt("Enter a Single Character");

// if (ch >= "A" && ch <= "Z") {
//   console.log("uppercase");
// } else if (ch >= "a" && ch <= "z") {
//   console.log("lowercase");
// } else {
//   console.log("The character is not a letter.");
// }

// Quection 4: Largest of Three Numbers – Take three numbers as input and print the largest number among them without using Math.max().

// var num1 = Number(prompt("Enter your num1"));
// var num2 = Number(prompt("Enter your num2"));
// var num3 = Number(prompt("Enter your num3"));

// let largest;

// if (num1 >= num2 && num1 >= num3) {
//   largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   largest = num2;
// } else {
//   largest = num3;
// }

// console.log("The largest number is" + largest);

// let x;
// console.log(x+2);

console.log(typeof NaN);

