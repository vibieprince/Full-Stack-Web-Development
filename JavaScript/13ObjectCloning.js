console.log("Prince")

let src = {
    age : 12,
    wt : 65,
    ht : 160
}

console.log(src)

src.color = 'White'
console.log(src) // hence objects are dynamic in nature

// Cloning by Spread Operator
let dest = {...src} // cloned src object

src.age = 7 // age is not changed in dest object hence it is a successful cloning

console.log("src :",src)
console.log("dest :",dest)

let src2 = {
    val : 45,
    name : "Prince"
}

// Cloning by Assign method
dest = Object.assign({},src,src2)

src.age = 77 // age is not changed in dest object hence it is a successful cloning
console.log("Src :",src)
console.log("dest :",dest)

// Cloning by iteration - Not suggested generally

dest = {}
for(let key in src){
    let newKey = key
    let newVal = src[key]

    // now insert newKey and newVal in dest and create a clone

    dest[newKey] = newVal
}

src.age = 90 // age is not changed in dest object hence it is a successful cloning
console.log("Src :",src)
console.log("dest :",dest)