{
    var height = 100;
    let height1 = 150
    const height2 = 245;
}
console.log(height) // Var can be accessed outside the blocks too
// console.log(height1) ....
// console.log(height2) ... but these can't be

// console.log(marks) // ---> Reference error
console.log("Hi, I am Prince ")
console.log("Good AfterNoon")
console.log("Have a nice day") // So from line 10 to line 15 there's a temporal dead zone
// Temoral dead Zone
let marks = 100
console.log(marks)