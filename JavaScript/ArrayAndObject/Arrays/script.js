// Arrays 

// var arr =[12,13,14];

// What is Array?
// Array is the Data Structure Which can store multiple  values all at one place.

// How to use Array?

// How to create array 

// method-1 :- by using Squre brackets[].

// let fruits =['Apple','banana','manago'];


// method-2 :- using new Array().

// let numbers = new Array(10,20,30,40);

// let arr2 = new Array(100);


// let arr = new Array(30);

// for (let i =0; i<30;i++){
//     arr[i]=i;
// }



// How to access members of Array?
// by using indexing.


// let fruits =['Apple','banana','manago'];

// console.log(fruits[0]);
// console.log(fruits[2]);




// Note:- In JS Array is not homogeneous, you can store multiple type of values in an Array. 
// var arr = ['a',12,function () {},{},[],NaN,undefined]


// let arr = [10,20,30,40];

// console.log(arr); //  [10, 20, 30, 40]

// console.log(arr[0]); //10
// console.log(arr[1]); //20
// console.log(arr[2]); //30
// console.log(arr[3]); //40


// let arr = new Array()

// arr[0]=10;
// arr[2]=20;
// arr[3]=30;
// arr[4]=40;

// console.log(arr);//(5) [10, empty, 20, 30, 40]


// Array Methods

// let arr= [1,2,3,4,5];
// 1.puch Method
// arr.push(10);
// console.log(arr);

// 2.pop Method
// arr.pop();
// console.log(arr); //[1, 2, 3, 4]

// 3. shift() Method
// arr.shift();
// console.log(arr); //[2, 3, 4, 5]

// 4. unshift() Method
// arr.unshift(0);
// console.log(arr); //[0, 1, 2, 3, 4, 5]

// 5.splice() method:
// arr.splice(1,2);
// console.log(arr); //[1, 4, 5] Remove 2 items starting at index 1
                 
// 6.reverse():- Reverse order
// arr.reverse();
// console.log(arr); //[5, 4, 3, 2, 1]

// 7. map() Method:- Creates a new array by applying a function to each element.

// let nums = [1,2,3];
// let doubled = nums.map(n=> n*2);

// console.log(doubled); //2, 4, 6]

// 8.reduce() Method:

// let nums=[1,2,3];
// let sum = nums.reduce((acc,n)=>acc+n , 0);
// console.log(sum); //6

// 9. find(): Returns the first value that matches a condition.

// let arr = [10,20,30];

// let result = arr.find(x=> x>15)
// console.log(result); //20

// 10.findIndex():Returns the index of the first match.

// let arr =[5,12,8];
// let index = arr.findIndex(x=> x>10);
// console.log(index); //1


// 11.includes(): Checks if a value exists.

// let arr = [1, 2, 3];
// let bool= arr.includes(2);
// console.log(bool); //true


// 12. sort(): Sortd the array.

// let arr =[3,1,2];
// let sortArr= arr.sort();
// console.log(sortArr); //[1, 2, 3]

// 13. concat():Joins two arrays.

// let a = [1, 2];
// let b = [3, 4];
// let c = a.concat(b);
// console.log(c); // [1, 2, 3, 4]

// 14. slice():Returns a part of the array (does NOT change original).

// let arr = [1, 2, 3, 4];
// let sliceArr = arr.slice(1, 3); 
// console.log(sliceArr); // [2, 3]

// 15. splice(): Adds/removes items (changes original).

// let arr = [1, 2, 3, 4];
// let newArr= arr.splice(1, 2);
// console.log(soliceArr);
// removes 2 items starting at index 1 → [2, 3]
// new arr = [1, 4]


// forEach():

// let arr= [1,2,3,4];

// arr.forEach(function(val){
//     console.log(val*2);
    
// })

// map():

// let arr=[1,2,3,4]
// let newarr = arr.map(function(val){
//     return val; 
// });
// console.log(newarr); //[1, 2, 3, 4]


// filter():


// let arr =[1,2,3,4,5,6,7,8];

// let ans = arr.filter(function(val){
//     if(val>4) {
//         return true
//     }
// })
// console.log(ans); //[5, 6, 7, 8]

// reduce():

// let arr = [1,2,3,4,5,6];

// let ans=arr.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(ans); //21


// Some():-


// let arr = [10,28,67,89,50,60];

// let any = arr.some(function(val){
//     return val>85;
// });
// console.log(any); //true

// every():

// let arr = [40,55,60,67,80];

// let Every = arr.every(function(val){
//     return val>39;
// })

// console.log(Every); //true


// Destructring:

// let arr = [1,2,3,4,5,6];
// let [a,b, ,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);

// Sprad Operator:

// let arr =[1,2,3,4]
// let arr2= [...arr]
// arr2.pop()
// console.log(arr); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]

// Add mango at the end and pineapple at beginning of this Array

// let fruits = ["Apple","BAnana"];

// fruits.push("Manago");
// fruits.unshift("Pineapple");

// console.log(fruits); // ['Pineapple', 'Apple', 'BAnana', 'Manago']

// Replace "Banana" with "kiwi " in the array above.
// let fruits = ["Apple","BAnana"];
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits); //['Apple', 'kiwi']


// Insert "Red" and "Blue" at index 1 and 2 in this array

// let colors = ["green","yellow"];
// colors.splice(1,0,"Red", "Blue");
// console.log(colors); //['green', 'Red', 'Blue', 'yellow']

// Extract only the middle 3 elements from this array.
// let items =[1,2,3,4,5,6];

// let newarr=items.slice(2,4)
// console.log(newarr); //[3, 4]

// Sort this array alphaabetically and then reverse it:

// let names = ["zara","Arjun","Mira","Bhavya"];
// names.sort().reverse();
// console.log(names); //['zara', 'Mira', 'Bhavya', 'Arjun']


// Use .map() to square each number:

// let nums = [1,2,3,4,5];

// let square = nums.map(function(val){
//     return val*val;
// });
// console.log(square); //[1, 4, 9, 16, 25]


// Use .filter() to keep numbers greater then 10.

// let arr = [2,3,5,13,45,67,10];

// let newarr= arr.filter(function(val){
//      return val>=10;
// });
// console.log(newarr); //[13, 45, 67, 10]

// Use .reduce() to find th sum of this arrays:

// let arr = [10,20,30];

// let Sum= arr.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(Sum);  //60

// Use .find() to get the first number less then 10.

// let arr = [2,3,5,13,45,67,10];

// let num= arr.find(val=>{
//   return val<10;
// })

// console.log(num); //2


// Use .some() to check if any student has scored below 35:

// let arr = [45,60,28,90];

// let ans= arr.some(function(val){
//     return val<35;
// })

// console.log(ans); //true


// Use .every to check if all number are even:

// let num = [2,4,6,8,10];

// let ans = num.every(function(val){
//     return val%2===0
// })
// console.log(ans); //true


// Merge two Arrays using spread operator:

// let a= [1,2];
// let b=[3,4];
// let c= [...a,...b]
// console.log(c); //[1, 2, 3, 4]



