let a = 2+3
console.log(a)

a = 2**4
console.log(a)

a = 4%2
console.log(a)

a = 2*5
console.log(a)

a = 4/3
console.log(a)

a = 4-5
console.log(a)

a--

console.log(a)

a++
console.log(a)
++a
console.log(a)

a -= 2
console.log(a)

console.log('5'==5) // true
console.log('5'===5) // false

console.log('5' !== 5) // true
console.log(5 !== 5) // false

// Ternary Operator
console.log((a>4)?"True" : "False")

// Logical Operator (NON - BOOLEANS)
console.log(false && "Prince ") // false
console.log(false || "Prince") // Prince
console.log(false || 7 || 9 || 0) // 7 (Short circuiting)

console.log(~(0)) // Bitwise Not --> -1

// Coditionals
let age = 3
if(age>=18)
    console.log("Vote")
else
    console.log("Cannot vote")

switch(age){
    case 1:
        console.log("A")
        break
    case 2:
        console.log("B")
        break
    case 3:
        console.log("C")
        break
    case 4:
        console.log("D")
        break
    default:
        console.log("E")
}