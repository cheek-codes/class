// grassroots volunteer

//firsttimersonly.com

// outreach for volunteer work

//gitforwindows.org


// aka.ms/learnwithleon

/*
template bob boberson
https://cvcomplier.com
*/

//code for america


// As Fatty the Birb tries to fly South for the winter, he encounters some obstacles. Being so rotund, he has a hard time flying up, but will fall quickly due to gravity and his large mass as soon as he stops flapping his small wings. A new "Flappy Bird" type game.





/*
Given an array of integers as strings and
numbers, return the sum of the array
values as if all were numbers. Return your
answer as a number

R: return a Number

E: If I were given [1, 2, 3], should return [1, 2, 3]
E: If I were given ["1", "2", "3"], should return [1, 2, 3]
E: If I were given [1, "2", 3], should return [1, 2, 3]
*/

//use reduce bc sum
//change everything to an integer
// function sum_num(arr){
//     return arr.reduce((a, c) => a + Number(c), 0)
// }

const sum_num = arr => arr.reduce((a, c) => +a+ + c)

console.log(sum_num([1, 2, 3]))
console.log(sum_num(["1", "2", "3"]))
console.log(sum_num([1, "2", 3]))

