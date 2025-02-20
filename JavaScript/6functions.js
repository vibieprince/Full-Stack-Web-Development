// Function declaration : Type -1 
function sayMyName(){
    console.log("Prince")
}
sayMyName()

function printCounting(){
    for(let i=1;i<101;i++)
        console.log(i)
}

// printCounting()

function printNumber(num){
    console.log(num)
}

printNumber(9)

function getAvg(num1,num2){
    let avg = (num1+num2)/2
    console.log("Average :",avg)
}

getAvg(9,3)
function getSum(a,b,c){
    let sum = a + b + c
    return sum
}

ans = getSum(6,4,7)
console.log(ans)

function getName(firstName,lastName){
    let fullName = firstName + " " + lastName
    return fullName
}

console.log("Full Name :",getName("Prince","Singh"))

// Function declaration : Type - 2
let getMultiplication = function(a,b){ // better to use const
    return a*b
}

ans = getMultiplication(8,9)
console.log(ans)

const getSquare = function(num){
    return num*num
}

console.log(getSquare(5))

// Function declaration : Type - 3 
let getExp = (x,y) => {
    return x**y 
}

console.log(getExp(5,3))