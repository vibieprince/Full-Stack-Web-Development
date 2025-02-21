// Variables as Default Parameters
function sayName(fname = "Prince",lname = fname.toUpperCase()){
    console.log("My name is :",fname,lname)
    console.log("My name is : " + fname + lname)
    console.log(`My name is : ${fname}${lname}`)
}
sayName()
// Object,arrays as default parameters
function solve(value = {age:15,wt:65,ht:190}){ // even can add arrays too
    console.log("HELLO JI NAMASTE",value)
}
solve()
// null,undefined as default parameters 
function hello(val = null){
    console.log(val)
}
// hello() 
hello(undefined) // --> null




class Human{
    // properties (Default : Public)
    age = 20
    weight = 65
    #height = 100 // add # to make any entry private

    // Constructor (default Parameter)
    constructor(newAge=120,newHeight=100){
        this.age = newAge
        this.#height = newHeight
    }

    // Behaviour 
    walking(){
        console.log("I am walking",this.#height) // this means current
        // and still it will give undefined because it is private
        // object
    }
    running(){
        console.log("I am running")
    }

    // getter
    get fetchHeight(){ // bina get and set use kiye bhi work kar sakta hai but hum isko isliye use karte hain takin humein clarity rahe
        return this.#height
    }

    // Setter
    set setHeight(val){
        this.#height = val
    }
}

let obj = new Human()
console.log(obj.age)
obj.walking()
// console.log(obj.#height) // ---> unaccessible (Private member)

// to accesss private members we use getter and setter 
let obj1 = new Human(50,180)
console.log(obj1.age)
console.log(obj1.weight)

obj1.walking()

obj.setHeight = 90
console.log(obj.fetchHeight)

function getAge(){
    return 45
}
// function as default parameters
// function utility(name="Prince",age=obj.age){
//     console.log(name,age)
// }
function utility(name="Prince",age=getAge()){
    console.log(name,age)
}
// utility("Prince",20)
utility("Prince")