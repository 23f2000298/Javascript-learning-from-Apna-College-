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

// let student ={
//     name : "Joydev",
//     age:23,
//     cgpa : 7.69,
//     isPAss : true,
// }
// for (let key in student){
//     console.log("key:", key,",", "value:",student[key])
// }

//print 0-100 even numbers

// for (let num=0; num<=100;num++) {
//         if( num%2 === 0){

//             console.log(num)
//         }
        
// }

// gameNumber

// let a = prompt("Enter Your Gaussing Numnber Between [0-100]:")
// while (a != 10){ //prompt gives string
//     a = prompt("try again,Enter Your Gaussing Numnber Between [0-100]:")
// }
// console.log("hurra! Your Gaussing is correct.");

//templates leterals

// let obj = {
//     name:"Joydev",
//     class:10
// }
// let output = `My name is ${obj.name} from class ${obj.class} `;
// console.log(output)

// "\n" -> escape character or new line
// console.log("Apna \nCollege")
// console.log("Apna \tCollege")
// let char = "apple \nMango"
// console.log(char.length) // \n -> length is 1

//string Methods
// let str = "apnaCollege"
// let newStr = str.toUpperCase()
// console.log(str)
// console.log(newStr)
// let Upper = "AALUU"
// let newstr = Upper.toLowerCase()
// console.log(newstr)
// let a = "     Appple   "
// console.log(a)
// console.log(a.trim())

// let str0 = "Apna";
// let str1 = "College"
// console.log(str0.slice(1,4))
// console.log(str1.slice(1))
// let result = str0.concat(str1)
// let result = str1 + str0
// console.log(result)

// let res = str0.replace("a","A")
// let res = str0.replace(str0.at(1),"A")
// console.log(res)

// let r = "Applololo";
// let resul= r.replace("lo","e")
// console.log(resul)
// let result= r.replaceAll("lo","e")
// console.log(result)

// console.log(r.charAt(0))
// console.log(r.charAt(1))
// console.log(r.charAt(2))
// console.log(r.charAt(7))

// let str = "ILoveJS"
// str = str.replace("I","S")

// console.log(str)

//create username from user Name

// let Name = prompt("Enter Your full name");
// let userName = `@${Name}123`;
// console.log("Your User Name is",userName)

// let Name = prompt("Enter Your Full Name");
// let name = Name.replace(/\s/g,"");
// let len = name.length;
// console.log("@"+ name +len)

// /\s/g
// /.../ → this is a regular expression (regex).
// \s → means "any whitespace character" (spaces, tabs, line breaks).
// g → global flag → means "replace all matches", not just the first one.
// So /\s/g = "find all spaces in the string".






