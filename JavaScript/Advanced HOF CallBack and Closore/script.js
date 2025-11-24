// Qun 1: Create a function that takes a callback and executes it after every n seconds indefinitely.

// function abcd( fun, time){
//     setInterval(fun,time)
// }

// abcd(function(){
//     console.log("hello");
    
// },2000)


// Que 2: Implement a function that returns a function with a preset greeting (Closure).


// function greet(greeting){
//     return function(name){
// console.log(`${greeting} ${name}`);

//     }
// }

// var greetingfun = greet("hello")

// greetingfun("Aman");
// greetingfun("Suman");
// greetingfun("Ankit");

// var spanishfun = greet("Hola !");
// spanishfun("Aman");


// Que 3: Implement a function that takes a callback and only executes it once (HOF + Closure).

// function onlyOneCaller(cb){
//     let executed = false;
//     return function(){
//         if(!executed){
//             executed=true;
//             cb();
//         }
//     };
// }

// var newfun = onlyOneCaller(function(){
//     console.log("rum");
    
// })
// newfun();
// newfun();
// newfun();
// newfun();
// Que 4:Implement a function that throttles another function (HOF + Closures).


// function throt(fun ,delay){
//     let lastCall =0;
//     return function (){
//         let current = Date.now();
//         if (current-lastCall>=delay){
//             lastCall=current;
//             fun();
//         }

//     }
// }

// var newfun = throt(function(){
//     console.log("will run in 2 seconds");
    
// },2000)

// newfun();




