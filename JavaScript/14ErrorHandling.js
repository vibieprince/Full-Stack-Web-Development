// compile time error

// syntax error
// console.log(1

// runtime error
// console.log(x) --- Reference error

// Handling
try{
    console.log("Try block starts here")
    // jaha error aa sakta hai
    console.log(x)
    console.log("Try block ends here")
}
catch(err){
    // Define error ke saath aap kya karna chahte hain
    // Retry logic
    // Fallback mechanism
    // logging
    // Custom error
    console.log("I am INSIDE catch block")
    console.log("Your error is here :",err)
}
finally{
    console.log("i will run every time because i am finally block")
}

// Let's create a custom error
// try{
//     console.log(x)
// }
// catch(err){
//     throw new Error("Bhai pehle declare karlo baad mein print karwana")
// }
let errorCode = 100
if(errorCode==100)
    throw new Error("Invalid Json")