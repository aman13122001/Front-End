// Que:-What is map() in JavaScript?

// Ans:-map() is an Array method in JavaScript.
// It is used to create a new array by applying a function to each element of an existing array.

// 👉 Important:

// map() does NOT change the original array.

// It returns a new array.

// Syntax
// array.map(function(element, index, array) {
//     // return new value
// });

// Simple Example:-
// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubled); // Output:-[2, 4, 6, 8]

// Use Cases of map():-

// ✓ 1. Modify values
// const prices = [100, 200, 300];
// const gstAdded = prices.map(price => price + (price * 0.18));

// ✓ 2. Extract a specific property from objects
// const users = [
//   { name: "Aman", age: 21 },
//   { name: "Shivansh", age: 22 }
// ];

// const names = users.map(user => user.name);
// console.log(names);  // ["Aman", "Shivansh"]

// ✓ 3. Converting data format
// const numbers = [1, 2, 3];
// const strings = numbers.map(n => `Number: ${n}`);

// Difference between map() and forEach()

// Feature	                                  map()	    forEach()
// Returns new array?	                      ✔ Yes	      ✖ No
// Used for transforming data	              ✔ Yes	      ✖ No
// Mainly used when you need the result	    ✔ Yes	      ✖ No

// Ex:-

// var arr= [1,2,3,4];
// var ans= arr.map(function(value){
//     return value;
// })

// console.log(ans); // output:- (4) [1, 2, 3, 4]

// Que:-What is forEach in JavaScript?

//Ans:- forEach() is a built-in method of arrays in JavaScript.
// It is used to run a function for every element of the array.

// Syntax
// array.forEach(function(element, index, array) {
//   // your code
// });

// Ex:-
// var arr= [1,2,3,4];

// arr.forEach(function(value){
//     console.log(value);

// })

// Que:- Why use forEach?
// Ans:-
// ✔ Very easy to read
// ✔ No need to write a loop like for
// ✔ Automatically handles the iteration
// ✔ Good for simple array operations

// let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(item, index) {
//   console.log(index + " : " + item);
// });

// let arr=["Apple","banana","mango"]

// arr.forEach(function(item,index){
//   console.log(item +" : "+index);

// })

// What is filter() in JavaScript?

// filter() is an array method in JavaScript used to create a new array with only those elements that pass a given condition.

// It does NOT change the original array.
// It returns a new filtered array.

// Syntax
// array.filter(function(element){
//     return condition;
// });

// Use Cases

// Filtering data (e-commerce: price < 500)
// Search results
// Remove unwanted data
// Filter objects based on conditions

// var arr = [1,2,3,4];

// var ans= arr.filter(function(value){
//   return true;
// })

// console.log(ans); // Output: (4) [1, 2, 3, 4]

// var arr = [1,2,3,4];

// var ans= arr.filter(function(value){
//   return false;
// })

// console.log(ans); //Output: []

// var arr = [1,2,3,4];

// var ans= arr.filter(function(value){
//   return value>2; //condition
// })

// console.log(ans); //Output: (2) [3, 4]

// var arr = [1,2,3,4];

// var ans= arr.filter(function(value){
//   return value===3;
// })

// console.log(ans); //Output: (1) [3]

// What is reduce() in JavaScript?

// reduce() is an array method that reduces the entire array into a single value.

// That single value can be:

// a number (sum, product, etc.)
// a string
// an object
// or even an array

// reduce() works by running a function on each element and carrying forward a result called the accumulator.

// ek array se koi ek value banaao.

// var arr= [1,2,3,4,5];

// var ans= arr.reduce(function(accumulator,key){
// return accumulator+key;

// },0);

// console.log(ans); //output: 15

// var arr = [1,2,3,4];
// var ans = arr.reduce(function(acc,val)
// {
//   return acc*val ;
// },1)

// console.log(ans); //output:24

// Que9. Create an array of 5 numbers and log the sum using .reduce().

// let arr = [1, 2, 3, 4, 5];

// let ans = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);

// console.log(ans);



// 3️⃣ Loops (5 Questions):-
// 11. Write a for loop to print numbers from 10 to 1 in reverse.

// for(let i=10;i>=1;i--){
//   console.log(i); 
// }


// 12. Use a while loop to print multiples of 3 from 3 to 30. 

// let i=1;
// while (i<=10) {
//   console.log(i*3);
//   i++;
// }


// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

// let sum=0;
// for(let i=0;i<=100;i++){
//   sum=sum+i;  
// }
// console.log("sum:",sum);

// 14. Create a nested loop to print a star pattern.

// for(let i=1;i<=5;i++){
//   for(let j=1;j<=i;j++){
//     console.log("*"); 
//   }
//   console.log("\n");  
// }

// 15. Use a for...of loop to iterate over the string "JavaScript".

// let str ="javaString"

// for(let i of str){
//   console.log(i);
  
// }

// 4️⃣ Arrays (5 Questions)
// 16. Remove duplicate values from an array.


// let arr =[1,2,3,1,1,1,1,2,3,5,3,2,2];
// let ans =[...new Set(arr)]
// console.log(ans); //(4) [1, 2, 3, 5]



// 17. Find the second largest number in an array.

// unique []
// sort array descending order
// 1st index

// var arr = [2,3,5,3,56,3,32,44,22];

// var unique = [...new Set(arr)];
// var newarr = unique.sort(function(a,b){
//     return b-a;
// });
// console.log(newarr[1]); //Output: 44


// var arr = [2,32,15,53,56,3,32,44,22];

// console.log([...new Set(arr)].sort(function(a,b){
//     return b-a;
// })[1]);






// 18. Sort an array in descending order.

// var arr= [1,4,23,54,2354,353,234];

// var ans = arr.sort(function(a,b){
//     return b-a;
// });

// console.log(ans);

//  or
// var arr= [21,400,23,54,234,353,234];

// var ans= arr.sort((a,b)=> b-a );
// console.log(ans);




// 19. Reverse an array without using .reverse().

// var arr = [1,2,3,4,5,6,7,9,10];
// var arr2=[];

// for(var i= arr.length-1; i>=0;i--){
// arr2.push(arr[i]);
// }

// console.log(arr2);

// 20. Find the most frequent element in an array.

// let arr = [2,3,4,2,3,4,5,3,45];

// var obj ={};

// arr.forEach(function(val){
//     obj[val]===undefined ?(obj[val]=1):obj[val]++;
// });

// console.log(obj);

// output:- {2: 2,
//           3: 3,
//           4: 2, 
//           5: 1, 
//          45: 1}









