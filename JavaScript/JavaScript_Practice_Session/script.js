// 1️⃣ console & Basic Operation1️



// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

// Ans:-

// console.log("Hello, JavaScript!");
// console.warn("Hello, JavaScript!");
// console.error("Hello, JavaScript!");
// console.info("Hello, JavaScript!");
// console.table({name:"harsh", age:"25"} );


// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

// Ans:-

// console.log(35 * 2 - (10 / 2) + 7);


// 3. Log the data type of "123", 123, true, and null using typeof.

// console.log(typeof"123");

// console.log(typeof 123);

// console.log(typeof true);

// console.log(typeof null);



// 4. Write a program that swaps the values of two variables.

// let a=12;
// let b=13;

// let c;
 
// c=a;
// a=b;
// b=c;

// console.log("a = ",a);
// console.log("b = ",b);

// 2 ways:-

// let a=12;
// let b=13;

// [a,b]=[b,a];

// console.log("a = ",a);
// console.log("b = ",b);

// 3 ways:-

// let a=12;
// let b=13;

// a = a+b;
// b = a-b;
// a = a-b;

// console.log("a = ",a);
// console.log("b = ",b);


// 5. Use console.group() to organize logs into a group.

// Ans:-

// console.group("Aaj ka hisaab");
// console.log("Daal Chaawal 50");
// console.log("neebu paani 20");
// console.log("paani puri 50");
// console.groupEnd();

// console.groupCollapsed("Aaj ka hisaab");
// console.log("Daal Chaawal 50");
// console.log("neebu paani 20");
// console.log("paani puri 50");
// console.groupEnd();



// 2️⃣ Variables & Data Types (5 Questions)

// 6. Declare a const object, modify its properties, and log the updated object.

// Ans:-


// const obj ={
//     name: "Aman",
//     age: 25,
//     email:"aman1312@gmail.com"
// };

// obj.age=27;
// console.log(obj);

// We can freeze the object .

// const obj ={
//     name: "Aman",
//     age: 25,
//     email:"aman1312@gmail.com"
// };

// Object.freeze(obj);
// obj.age=27;
// console.log(obj);




// 7. Convert "50" (string) into a number using 3 different methods.

 
// let a=Number("50");
// console.log(typeof a);
// console.log(a);

// let num = parseInt("60")
// console.log(typeof num);

// console.log(num);

// let num1= +"70";
// console.log(typeof num1);
// console.log(num1);





// 8. Check if "JavaScript" contains "Script" without using .includes().



// 1 way
// let str = "JavaScript";
// console.log(str.indexOf("Script")!==-1);

// 2 way
// let str = "JavaScript";
// if(str.indexOf("Script")=== -1){
//     console.log(false);
    
// }
// else{
//     console.log(true);
    
// }

// 3 way
// let str = "JavaScript";

// if(str.search("Script")=== -1){
//     console.log(false);
    
// }
// else{
//     console.log(true);
    
// }


// 9. Create an array of 5 numbers and log the sum using .reduce().

// Ans:-

// let numbers = [10,20,30,40,50];
// let sum = numbers.reduce((acc,num)=> acc+num,0);
// console.log("Sum:",sum);


// 10. Explain the difference between undefined, null, and NaN with examples.

// undefined:- A variable is declared but no value is assigned.

// Example:
// let a;
// console.log(a);   // undefined


// null:- null means empty value or intentional absence of value. You manually assign it.

// Example:
// let user = null;
// console.log(user);   // null

// NaN (Not a Number):- NaN represents an invalid number.
// It happens when a mathematical operation fails.

// Example:
// console.log("hello" * 10);  
// NaN (can't multiply a string with a number)