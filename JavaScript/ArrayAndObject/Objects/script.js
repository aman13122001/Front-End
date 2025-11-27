// What is object?
// Ans:-An object in JavaScript is a collection of data (properties) and functions (methods) stored together in one structure.
// An object stores data in key–value pairs.
// Why Object
// When to make an object
// how to create an Object
// how to access an object

// Object Syntex
// var obj = {
//     property:value
// };

// Ex:-

// var obj = {
//     name:"Aman",
//     age: 23,
//     email: "amankumar1312@gmail.com"
    
// };


// When to make an object-> when you want to store the  info of one entity.

// how to create an object

// method-1 :- by using curly brackets {}.

// var obj = {};

// method-2 :- using new Object().

// var obj2 = new Object();

// How to access an object.


// var obj = {
//     name:"Aman",
//     age: 23,
//     email: "amankumar1312@gmail.com"
    
// };

// console.log(obj.email);
// console.log(obj.age);


// Create a object
// let student ={
//     name:"Aman",
//     age :21,
//     isEnrolled:true
// }
// how to access the object items/Values
// Dot vs Bracket notation
// console.log(student.name); //Aman
// console.log(student['age']); //21
// console.log(student.isEnrolled); //true

// Nesting and Deep Access:

// Nesting
// let user ={
//     name:"Aman",
//     address:{
//         city:"Noida",
//         pin:208010,
//         location:{
//             lag:"c220",
//             leg:"c216"

//         },
//     },
// };

// // Deep Access
// console.log(user.address.location.leg); //c216
 

// Object Destructuring:
// let user ={
//     name:"Aman",
//     address:{
//         city:"Noida",
//         pin:208010,
//         location:{
//             lag:"c220",
//             leg:"c216"

//         },
//     },
// };
// let {lag,leg}=user.address.location;

// console.log(lag); //c220
// console.log(leg); //c216

// loops throygh object:

// for-in loop:-

// let student ={
//     name:"Aman",
//     age :21,
//     email: "aman1312@hmail.com"
// }

// for(let key in student){
//     console.log(key);   
    
// }
// output :name
//         age
//         email

// for(let key in student){
//     console.log(key,student[key]);
    
// }
// output :
// name Aman
// age 21
// email aman1312@hmail.com


// Object.key , Object.values(), Object.entries()


//    

// console.log(Object.keys(student)); //['name', 'age', 'email']
// console.log(Object.values(student)); //['Aman', 21, 'aman1312@hmail.com']
// console.log(Object.entries(student)); //[Array(2), Array(2), Array(2)]

//Copying Objects

//1. Copying Objects by using Spread operater.

// let student ={
//     name:"Aman",
//     age :21,
//     email: "aman1312@hmail.com"
// }


// let student2 = {...student};
// console.log(student); //both ouput are same
// console.log(student2);

// 2.Copying Objects by using Object.assign

// let student ={
//     name:"Aman",
//     age :21,
//     email: "aman1312@hmail.com"
// }

// let student2 = Object.assign({},student);
// console.log(student2); //{name: 'Aman', age: 21, email: 'aman1312@hmail.com'}


// you can also add the keys value pair.

// let student ={
//     name:"Aman",
//     age :21,
//     email: "aman1312@hmail.com"
// }

// let student2 = Object.assign({city:"Noida"},student);
// console.log(student2); //{city: 'Noida', name: 'Aman', age: 21, email: 'aman1312@hmail.com'}


// Deep Clone:- You create a new copy of an object or array including all nested objects or arrays, so the new copy is totally independent from the original.


//1.Using JSON method (simple deep clone)


// const original = {
//     name: "Aman",
//     address:{
//         city:"delhi",
//         pin:201902
//     }
// };

// const deepClone = JSON.parse(JSON.stringify(original));

// deepClone.address.city="mumbai";

// console.log(original.address.city); // delhi
// console.log(deepClone.address.city); // mumbai

// 2. Better Deep Clone (using structuredClone)

// const original = {
//     name: "Aman",
//     address:{
//         city:"delhi",
//         pin:201902
//     }
// };

// const deepClone = structuredClone(original)

// deepClone.address.city="mumbai";

// console.log(original.address.city); // delhi
// console.log(deepClone.address.city); // mumbai



// Optional Chaining: It help to Avoids errors ,if a nested property is undefined. 

// const person = {
//     name: "Aman",
//     address:{
//         city:"delhi",
//         pin:201902
//     }
// };

// console.log(person?.address?.city); //delhi
// console.log(person?.profile?.city); //undefind


// 1. Create an Object for a student with nume, age and isEnrolled.

// let obj ={
//     name:"Aman",
//     age:"24",
//     isEnrolled : true
// };

// Use Object.entries() to print all key-value pairs as:
// title:JavaScript
// Duration :4 weeks

// const course ={
//     title: "JavaScript",
//     duration:"4 Weeks",
// };

// Object.entries(course).forEach(function(val){
//     console.log(val[0] +": "+val[1]);
    
// })


// Output:

// title: JavaScript
// duration: 4 Weeks

// Timing Events 

// setTimeout(): Runs a function once, after a given time.

// Syntax:-
// setTimeou(functiontimeInMilliseconds);

// setTimeout(()=>{
//     console.log("Hello Shivansh!");
    
// },2000)


// 2. setInterval(): Runs a function again and again after a specific time gap.

// Syntax
// setInterval(function,timeInMilliseconds);


// setInterval(()=>{
//     console.log("Repeating every 1 second");
    
// },1000);

// 3. clearTimeout():Stops a setTimeout() before it runs.

// Ex:

// let timer = setTimeout(()=>{
//     console.log("This will not run");
    
// },1000);
// clearTimeout(timer); //cancel timer


// 4.clearInterval():Stops a running setInterval() loop.

// let count =0;
// let interval = setInterval(()=>{
//     count++;
//     console.log(count);

//     if(count===5){
//         clearInterval(interval); //stop after 5 times
//     }
    
// },1000);

// Output:
// 1
// 2
// 3
// 4
// 5
// (Then stops.)

// Operation in Objects:-

// 1. Object.freeze():Freezes an object. You cannot add, delete, or change any property.

// Ex:-

// let user ={
//     name:"Shivansh",
//     age:21
// };
// Object.freeze(user);
// user.age = 30;    // ❌ no change
// user.city = "Patna";// ❌ cannot add
// delete user.name; // ❌ cannot delete

// console.log(user); 

// Output: { name: "Shivansh", age: 21 }

// 2. Object.seal():-
// You cannot add or delete properties,
// BUT you can modify existing properties.

// let user ={
//     name:"Shivansh",
//     Age:24
// };

// Object.seal(user);

// user.age = 22;      // ✔ allowed
// user.city = "Patna"; // ❌ cannot add
// delete user.name;    // ❌ cannot delete

// console.log(user);

// Output:
// {name: 'Shivansh', Age: 24}


// Object Destructuring: Destructuring means extracting values from an object into variables.

// let user = {
//     name: "Aman",
//     age: 21,
//     city: "Patna"
//   };
  
//   let { name, age } = user;
  
//   console.log(name); // Aman
//   console.log(age);  // 21

// this Keyword in JavaScript: Inside an object, this refers to that object.

// let user ={
//     name:"Aman",
//     age:21,
//     greet(){
//         console.log("Hello,"+this.name);
        
//     }
// };
// user.greet(); //Hello,Aman
  
// Here:
// this.name → refers to user.name
 

