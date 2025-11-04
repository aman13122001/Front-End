// 1.What is a function?
// Ans:- Block of code,and reuse the code.

// function greet(){

//     console.log("hello World");

// }

// function call
// greet();
// greet();
// greet();
// greet();
// greet();

// pass Parameter to a function
// function greet(value){

//     console.log(value);

// }

// greet('hey');
// greet('hello');
// greet('halua');
// greet('ghoda');
// greet('nemaste');

// function add(a,b,c,d){

//     console.log(a+b+c+d);

// }
// -: pass Argument to a function:-
// add(1,20,3,5);

// function add(a,b,c,d){

//     console.log(a,b,c,d);

// }

// add(1,2,3);

// Type of function:-
// There are six type of function
// 1.Function Statement

// function abd(params) {
//     //function Statement
// }

// 2. function expression
// var abcd = function () {
//     // fun expression
// }

// 3. anonymous function

// function () {
//     //anonymous function
// }

// 4. fat arrow function:-

// ()=>{

// }

// 5.fat arrow with one parameter function :-

// let abcd = a =>{

// }

// abcd(12);

// 6.fat arrow with implicit return

// var abcd = ()=>'Aman';
// var ans = abcd();
// console.log(ans);

// Return the function:-

// function abcd(){
//     return 12;
// }

// let ans = abcd();
// console.log(ans);

// rest parameter:-

// function abcd(a, b, c, ...rest) {
//   console.log(a, b, c, rest);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8);

// hoisting:- js mein variables and functions unko js declaration waala part top pe move kr deta hai aur isey hu kahte hai hositing.

// variable Hositing:-

// console.log(a);
// var a=12;

// function Hositing:-

// abcd();

// function abcd(){
//     console.log("Hello World");

// }

// iife:- immediatety invoked function expression.

// Ex:-1

// (function abcd(){
//     console.log("iife");

// })();

// Ex:-2

// var ans = (function abcd(){
//     var a=10;
//     return a;
// })();

// Ex:-3

// var ans = (function abcd(){
//     var a =12;

//     return{
//         set: function (val){
//             a=val;
//         },
//         get: function(){
//             console.log(a);

//         },
//     };

// })();

// ans.set("32");
// ans.get();

// Ex:-4

// var Shary= (function sherylibrary() {
//     var abc = 12;
//   return{
    
//     imageEffect: function(){
//         console.log("Image effect");
        
//     },
//     mouseFollower: function(){
//         console.log("mouse follower");
        
//     },

//   }
// })();

// Shary.imageEffect();
// Shary.mouseFollower();

// HOF:- Higher Order Function

// ek aias Function jo yaa to return kare function nahi to accept kare function in parameter, ya fir dono.

// Ex:-1

// function abcd(){
//   return function(){
//     console.log("Heyheyhey");
    
//   }
// }
// abcd()();

// Ex:-2

// function abcd(){
//   return function(){
//     console.log("Heyheyhey");
    
//   }
// }
// var ans =abcd();
// ans();


// Ex:-3

// function abcd(fuc){
//   fuc();
// }

// abcd(function(){
//   console.log("HeyHeyhello");
  
// })


// CallBack function:- Kosi function mein jo function pass hota hai call krye wakt usey callback function kahte hai. 

// Ex:-
// function abcd(val){

// }

// abcd(function(){

// })

// First Class Function:-  first class function ek darja hai jo ki js mein function ko mila hai , is darje mein kaha jaata hai ki fnction ko aap value ki tarah use kr sakte ho.

// Pure function:- A function without side effects(does not modify external state).

// Ex:-

// function add(a,b) {
//   return a+b;
  
// }
// console.log(add(2,4)); 

// Impure Function:- A function that modifies external stste.

// let totol =0;
// function addTotal(a){
//     totol+=a; //Modifies external variable
// }
// addTotal(5);
// console.log(totol);


// Global Scope:- When a variable is declared outside of all function or blocks, it has global scope. That means the variable can be accessed from anywhere in the program inside function, loops, or any other blocks.


// Ex- 


// var a=12; //Global Scope

// function abcd(){
//     console.log(a);
    
// }
// abcd();


// Local Scope:- A variable has local scope when it declared inside a function or a block ({...}). that means it can be used only inside that function or block - not outside it.

// ex:-

// function abcd(){
//     var a=12; //local Scope
//     console.log(a);
    
// }
// abcd();

// What is Closure in JS?

// Ans:- A closure is when a function remembers and acesses variables from its outer function - even after that outer function has finished running.

//( Closure ek concept hai jismeie  function return karta hai ek aur function aand returnrd function mein app use krte ho parent function ka koi data.)

// Ex:-

//  function absd(){
//     var a=18;
//     return function(){
//         console.log(a);
        
//     }
//  }
// var ans = absd();
// ans();

// or
// absd()();




