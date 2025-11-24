// Que: What is a Higher-Order Function in JavaScript?

// Ans: A Higher-Order Function (HOF) is a function that does any one of these:
// Takes another function as an argument, OR
// Returns a function, OR
// Does both.

// In short:
// 👉 A function that works with other functions.

// Why do we use Higher-Order Functions?

// They help in:
// 1. Writing cleaner code
// 2. Reusing logic
// 3. Making functions more powerful and flexible

// 1. Function taking another function as input:-

// function greet(name) {
//   return "Hello " + name;
// }

// function processUser(name, callback) {
//   return callback(name);   // calling the passed function
// }

// console.log(processUser("Aman", greet));

// Function returning another function:-

// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   }
// }

// const double = multiplier(2);
// console.log(double(5));  // Output: 10

// Real-life simple example
// Methods like:

// map()
// filter()
// reduce()
// forEach()

// are all higher-order functions because they take callback functions.

// Example:

// const numbers = [1, 2, 3];

// numbers.map(function(n) {
//   return n * 2;
// });

// CAll BACK FUNCTION:- A callback function is a function that you pass as an argument to another function,and it gets executed later (or “called back”) by that function.

// In short: A function that is passed inside another function.

// Why do we use Callback Functions?

// 1.To run code after something happens
// 2.To handle asynchronous tasks (API calls, timers, file loading, etc.)
// 3.To make functions flexible and reusable

// Simple Example (Very Easy):-

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   callback("Aman");   // calling the function passed
// }

// processUser(greet);

// Example with setTimeout (Real World):-

// setTimeout(function() {
//   console.log("This runs after 2 seconds");
// }, 2000);

//Que:- What is a Closure in JavaScript?

// A closure is created when:
// A function remembers the variables from its outer function – even after the outer function has finished running.

// In short:
// Inner function + outer function’s memory = Closure

// Ek aisa function jo return kare doosra function and jo fubction hua hai wo use kare parent function ka koi variable.

// Why do we need Closures?

// To access outer variables even when the function is executed later
// To protect data (private variables)
// To make function factories
// Used in callbacks, event listeners, setTimeout, etc.

// Ex:-

// function abcd(){
//     let a=12;
//     return function(){
//         console.log(a);

//     }
// }

// Que 1:- Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function abcd(fn) {
//   setTimeout(fn, 3000);
// }
// abcd(function () {
//   console.log("hello");
// });  


//Que 2:- Implement your own version of .map() as a higher-order function.


// var arr= [1,2,3,4,5,6,7];

// function hap(a,fn){
//     var newarr = [];
//     for(var i=0;i<a.length;i++){
//         newarr.push(fn(a[i]));
//     }
//     return newarr;
// }

// var ans=hap(arr,function(value){
//     return value*2;
// });


// console.log(ans);


// var arr= [1,2,3,4,5,6,7];

// function mapkiCopy(arr,fuc ){
//     var newarr =[];
//     for(var i=0;i<arr.length;i++){
//      newarr.push(fuc(arr[i]));
//     }
//     return newarr;
// }

// var ans = mapkiCopy(arr,function(value){
//     return value+3;
// })
// console.log(ans);


// Que 3:- Write a function that uses closures to create a counter.

// function counter(){
//     let count =0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }

// var makecount = counter();

// makecount();//1
// makecount();//2
// makecount();//3
// makecount();//4


// Que 4:- Implement a function that limits how many times another function can be called (Closure + HOF)?
// Ans:-

// function fnlimiter(fn , limit){
//     let totalcalled =0;

//     return function(){
//         if (totalcalled<limit){
//             totalcalled++;
//             fn();
//         }
//     };
// }

// let limiter = fnlimiter(function(){
//     console.log("Hey");
    
// },3);
// limiter(); //Hey
// limiter(); //Hey
// limiter(); //Hey
// limiter();
// limiter();