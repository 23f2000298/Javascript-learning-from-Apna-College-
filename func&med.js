// function myFunction(){  //function
//     console.log("Hello World")
// }

// myFunction() //call function

// function myFunction(msg){   //function
//     //paramete ->input
//     console.log(msg)
// }

// myFunction("HEllo Inida") //"HEllo Inida"==argument

//function of two numbers and sum  it
// function sum(x,y){
//     console.log(x+y)
// }
// sum(100,200)

// function sum(x,y){
//     S = x+y
//     return S
// }
// sum(100,200)

// function sum(x,y){
//     S = x+y
//     return S
// }
// let x = sum(100,200)
// console.log(x)

//functions parameter are local variables -> block scope of function

// Array Function

// const sum = (a,b)=.{
//     return a+b
// }

// const arraySum= (a,b) =>{
//     console.log(a+b);
// }
// console.log(arraySum)
// arraySum(2,4)

// Q. Create a function using the "function" keyword that takes a string as argument and return 
// the number of vowels in the string .
// Q.create an array function to perform as task


// function numVowels(x){
    
//     count = 0
//     for (const char of x){
//         if (char === "a"||char==="e"||char === "i"||char==="o"||char ==="u"){
//             count++
//         }
        
//     }
//     console.log(count)
// }

// numVowels("apple")

// const countVow = numVowels("orrang")

//for each loop in an array


// let arr = [1,2,3,4,5,4,3]
// // arr.forEach(function printVal(val){
// //     console.log(val)
// // })

// let array = [1,2,3,4,5,4,3]
// array.forEach((val) =>{
//     console.log(val);
// })

// let arra = [1,2,3,4,5,4,3]
// arra.forEach((val,idx,arra) =>{
//     console.log(val,idx,arra);
// })

// let ar = [1,2,3,4,5,4,3]
// ar.forEach((val) =>{
//     console.log(val*val);
// })

let nums = [3,4,3,2,1,3]
// let calsqr = (num)=>{
//     console.log(num*num)
// }
// nums.forEach(calsqr)

// let newarray = nums.map((val)=>{
//     return val*val;
// })
// console.log(newarray)

// let calsqr = (num) =>{
//     console.log(num*num);
// };

// let arr = [1,2,3,4]

// let array = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(array)

// let arr = [1,2,3,4]

// let array = arr.filter((val)=>{
//     return val%2!==0;
// });
// console.log(array)


// let array = arr.filter((val)=>{
//     return val>2;
// });
// console.log(array)
// let arr = [1,2,3,4]
// const output = arr.reduce((pre,curr) => {

//     return pre+curr;
// });
// console.log(output);

let arr = [1,2,3,4]
const output = arr.reduce((pre,curr) => {

    return pre>curr?rrev :curr;
});
console.log(output);