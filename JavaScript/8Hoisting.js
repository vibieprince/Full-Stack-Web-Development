// const object1 = new Human()// Reference error..i.e hoisting not available in class too.
// class Human{

// }


sayMyName("Pince Singh")

function sayMyName(finalName){
    console.log(finalName)
}

// Since we are calling the function befor its declaration so it must raise error but at the time of compliation function is itself shifted automatically to its top of scope to overcome these errors and this method is called as function hoisting

console.log(age) // Outputs -> undefined because by variable hoisting only declaration moves up not the value

// console.log(age1) // annot access 'age1' before initialization (variable hoisting is done only var types)

// console.log(age2) // annot access 'age1' before initialization (variable hoisting is done only var types)

var age = 25

let age1 = 25

const age2 = 25

// sayHello() // --->Reference error because hoisting works only for plain function syntax rather than function expression type declaration

let sayHello = function(){
    console.log("Hello ji kaise ho saare..!!")
}