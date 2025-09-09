// let marks = [77,88,9,90,99]
// console.log(marks)
// console.log(marks.length)

// let heroes = ["ironman","saktiman"]
// console.log(heroes)

// marks[0] = 100
// console.log(marks)

// In JAVAscript 
// string is immutable(not changeable) but array is mutable(changeable)

// looping over an array
// for (let i = 0 ;i<marks.length; i++){
    // console.log(marks[i])
// }

// for of

// for(let i of marks){
//     console.log(i)
// }

// let cities = ["delhi","Mumbai","Kolkata","Gurgaon"]
// for (let city of cities){
//     console.log(city);
// }

// let studentmarks = [77,88,44,37,67,20,99,68,100]
// let mark = 0
// let num = studentmarks.length
// for (let marks of studentmarks){
//     mark+=marks
// }
// console.log("Student average mark is :", mark/num)
// console.log("Student percentage is :", (mark/100)*num,"%")

// let Price = [77,88,44,30,60,20,90,68,100]
// create new array after 10% discount
// let newarray = []
// for (let i = 0;i<Price.length;i++){
//         newprice = (90/100)*Price[i]
//         Price[i] = newprice
    
    // console.log((90/100)*i)
// }
// console.log(Price)

// let veggies = ["Potato","Cabbage","Carrot","Brinjal"]

// console.log(veggies)
// let deleted = veggies.pop()
// console.log(veggies)
// console.log("deleted",deleted)

// console.log(veggies)
// console.log(veggies.toString())
// console.log(studentmarks)
// console.log(studentmarks.toString())

// Concat(): joins multiple Array and returns Result
// unshift():add to Start

// shift():delete from and return

// let marvel_heroes = ["Ironman","Thor","Captain America","Hulk"]
// let dc_heroes = ["Superman","Batman","Aquaman","Flash"]
// let indian_heroes = ["Krish","Saktiman"]
// let all_heroes = marvel_heroes.concat(dc_heroes)
// let alll_heroes = dc_heroes.concat(marvel_heroes,indian_heroes)

// console.log(all_heroes)
// console.log(alll_heroes)

// marvel_heroes.unshift("Thor")
// console.log(marvel_heroes)
// let val = marvel_heroes.shift()
// console.log("delete item",val)
// console.log(marvel_heroes)

// let hero  = ["Ironman","Thor","Captain America","Hulk"]
// console.log(hero.slice(1,3))
// console.log(hero.slice(1))
// splice()= changes original array(start,num delete items,add)
// let list = [1,2,3,4,5,6,7,8]
// console.log(list.splice(2,2,6))
// console.log(list)

// let List = [1,2,3,4,5,6,7,8]
// // adding 100 between 4,5
// List.splice(4,0,100)
// console.log(List)
// // adding 1000 between 5,8
// let new_array = [1,2,3,4,5,6,7,8]
// new_array.splice(5,2,100)
// console.log(new_array)

// new_array.splice(5,2)
// console.log(new_array)

// let company = ["bloomberg","TAta","tcs","Wipro"]
// console.log(company.shift())
// console.log(company)
// company.pop()
// console.log(company)

// let companies = ["bloomberg","TAta","tcs","Wipro"]
// companies.splice(1,1,"TATA","TCS")
// console.log(companies)
// companies.splice(1,2,"TATA","TCS")
// console.log(companies)
// companies.push("OLA")
// console.log(companies)

