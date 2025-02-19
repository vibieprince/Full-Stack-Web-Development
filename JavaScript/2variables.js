// var age = 25
// if(true)
//     console.log(age)

function solve(){
    var age = 25
    console.log(age)
}

// console.log(age) // ReferenceError: age is not defined
solve() // ---> 25

var x = 10
var x = 20 // No error but not recommended otherwise have to face debugging issues

let a = 10

console.log(a) // ---> 10
{
let a = 20
}
console.log(a) // ---> 10

// also 'let' can not be reclared but changes are possible

let b = 10
b = "Prince" // ---> No error that's why it is called dynamically typed language
console.log(b) // ---> Prince

const c = 25
// c = 30 // TypeError: Assignment to constant variable.
console.log(c) // ---> 25

let marks = 30
console.log(marks) // 30
marks = "Prince"
console.log(marks) // Prince
marks = true
console.log(marks) // true
let k
console.log(typeof(k)) // --> undefined
