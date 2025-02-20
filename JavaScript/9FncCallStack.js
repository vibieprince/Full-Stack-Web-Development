function solve(num){
    return function(num){
        return num*num
    }
}

let ans = solve(5)

console.log(ans(6))

function greetMe(greet,fullName){
    console.log("Hello ",fullName)
    greet()
}
let greet = function(){
    console.log("Good Afternoon")
}
greetMe(greet,"Prince")

const arr = [
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    }
]

let first = arr[1]
let newAns = first(5,10)
console.log(newAns)

let obj = {
    age : 20,
    wt : 36,
    ht : 180,
    greet : ()=>{
        console.log("Hello Dunia")
    }
}

console.log(obj.age)
obj.greet()

