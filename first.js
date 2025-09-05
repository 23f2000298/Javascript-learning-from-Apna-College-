// console.log("Joydev Mandal,hii !")
//single line comment
/*
multi line comment
*/
//conditional statement
// age = 89
// if (age < 90) {
//     console.log("You can vote now")
// }

// let mode = "dark"
// let color;

// if (mode === "dark"){
//     color = "Dark"
// } else{
//     color = "not dark"
// }

// console.log(color)
// let mode = "green"
// let color;

// if (mode === "dark"){
//     color = "Dark";
// } else if (mode ==="white"){
//     color = "not dark";
// } else {
//     color = "red";
// }

// console.log(color)

// ternary conditions

// let age = 9
// let result = age>8?"small":"very small"
// console.log(result)
// let result = age>8? console.log("smalll"):console.log("very small")

// alert("Joydev")
// prompt("Joydev")

// let a = prompt("Enter Anythings")
// console.log(a)
// let a = prompt("Enter Number")
// if ( a%5 === 0) {

//     console.log(a,",Yes it is multiple of 5");
// } else {
//     console.log(a,",No it is not a multiple of 5")
// }

// let a = prompt("Enter a Number to know your Grade");
// if (a>=90){
//     console.log("Grade is S")
// }else if (a>=80){
//     console.log("grade is A")
// }else if (a>=70){
//     console.log("grade is B")
// }else if (a>=60){
//     console.log("grade is C")
// }else if (a>=50){
//     console.log("grade is D")
// }else if (a>=40){
//     console.log("grade is E")
// }else{
//     console.log("You Are Fail")
// }

//loop and strings
// for (let i = 1;i<=2;i++){
//     console.log("Joydev air 1")
// }

// for (let i = 1;i<=2;i++){
//     console.log("i = ",i)
// }
// console.log(i) // undefined beacause "let" is not globe

// for (var i = 1;i<=2;i++){
//     console.log("i = ",i)
// }
// console.log(i) //"var" is  globe

///but we prefer "let" in loop

// let i = 20
// do {
//     console.log("Joydev Air 01")
// } while (i<20);

// let i = 1
// do {
//     console.log("i",i)
//     i++;
// } while (i<=10);

//for of loop
// let str = "ApnaCollage"
// for (let i of str){
//     console.log("i", i)
// }

//for in loop
// let str = "ApnaCollage"
// for (let i in str){
//     console.log("i", i)
// }

let student ={
    name : "Joydev",
    age:23,
    cgpa : 7.69,
    isPAss : true,
}
for (let key in student){
    console.log("key:", key,",", "value:",student[key])
}
