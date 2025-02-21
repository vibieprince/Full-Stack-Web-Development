// console.log("MATH OBJECT")

// console.log(Math.PI)

// console.log(Math.max(30,507,3,6,2,4,503,5)) /// ---> 507
// console.log(Math.min(30,507,3,6,2,4,503,5)) // ---> 2

// console.log(Math.round(1.4)) // ---> 1
// console.log(Math.round(1.5)) // 0r 1.6 ---> 2

// console.log(Math.floor(1.9)) // ---> 1

// console.log(Math.ceil(1.9)) // ----> 2
// console.log(Math.ceil(1.1)) // ----> 2

// console.log(Math.abs(-34))

// console.log(Math.random())  // random betwwen 0 to 1

// console.log(Math.sqrt(5))

// console.log(Math.pow(2,6))

console.log("DATE TIME OBJECT")

let curr = new Date()
let date = new Date('December 15 2004 02:00')
let newdate = new Date(2004,11,15,2) // Months are zero based indexed
console.log(curr)
console.log(date)
console.log(newdate)

console.log(newdate.getFullYear())
console.log(newdate.getDay()) // 0 sun, 1 mon, 2 tue...