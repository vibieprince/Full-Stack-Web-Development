let obj  = {
    Name : "Prince",
    "full name" : "Prince Singh",
    age : 20,
    weight : 65,
    height : "5ft 4in",
    greet : function(){
        console.log("Hello ji kaise ho saare")
    }
}

console.log(obj)
obj.greet()

console.log(typeof(obj))

let obj2 = obj // shallow copy [Another pointer poinitng the same data]


// Creation of array
let arr = [2,4,6,3,6,3]

// Array constructor
let arr2 = new Array('Prince',1,true)
console.log(arr2)

console.log(arr[1])
console.log(arr2[2])
console.log(arr2[0])

arr2.push("Singh")
arr2.pop()

arr.shift() // Removes leftmost side
arr.unshift("Hello") // Adds to leftmost side

console.log(arr.slice(2,4)) // 4 excluse
arr.splice(1,3,'Hello ji') // removes from index 1 to 2 and inserts Hello ji
// arr.splice(1,0,'Hello ji') // removes nothing and inserts Hello ji at index 1
console.log(arr)
console.log(arr2)

let arr1 = [10,20,30]
let ansArray = arr1.map((num) =>{
    return num*num
})

arr1.map((num,i)=>{
    console.log(num)
    console.log(i)
})

console.log(ansArray)

let arr3 = [10,40,2,4,5,3,53,6,24,46,4,63,5]
let evenArray = arr3.filter((num)=>{
    // if(num%2==0)
    //     return true
    // else
    //     return false
    return num%2==0
})

console.log(evenArray)

arr = [1,2,'Prince','Singh',true,null]
let ans = arr.filter((val)=>{
    if(typeof(val)=='string')
        return true
    else
        return false
})

console.log(ans)

arr = [10,20,30,40]
ans = arr.reduce((acc,curr)=>{
    return acc+curr
})

console.log(ans)

arr = [4,2,64,7,23,54,8,21,236]

// sort() methods sorts the element on the basis of there Unicode values and not by there face value.
arr.sort((a,b)=>{
    return a-b
})
console.log(arr)

// to sort in descending order 
arr.sort((b,a)=>{
    return a-b
})

console.log(arr)

console.log(arr.indexOf(23))

// find method
let numbers = [3, 7, 10, 15, 20];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 10 OR gives undefined when no match found

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
let user = users.find(user => user.id === 2);
console.log(user); // Output: { id: 2, name: "Bob" }

for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}
arr.forEach((val,index) => {
    console.log("Number :",val,"Index",index)
})

// for-in
for(let key in obj){
    console.log(key," ",obj[key]);
}

// for-of
arr = [56,6,3,46,3]
for(let val of arr)
    console.log(val)

let fName = "Prince Singh"
for(let val of fName)
    console.log(val)

let newArr = [5,7,4,67,43,5,7,4,3,7,3]
function getSum(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++)
        sum = sum + arr[i]
    return sum
}
function getSum1(arr){
    let sum = 0
    arr.forEach(val=> sum += val)
    return sum
}
console.log(getSum(newArr))
console.log(getSum1(newArr))