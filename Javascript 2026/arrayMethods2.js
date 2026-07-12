nums = [1,2,3,4];

// map
let newArray = nums.map((val)=>{
    return val**2;
});

console.log(newArray);

// filter 

let evenArray = nums.map((val)=>{
    return val%2===0;
});

console.log(evenArray); // (4) [false, true, false, true]


// Reduce
// Reduces and array into a single value 

const array = [1,2,3,4,5,6];
const initialValue = 0;
const sumWithInitial = array.reduce(
    (accumlator,currentVal) => accumlator + currentVal,
    initialValue,
);

console.log(sumWithInitial);

// OR 
const output = array.reduce((prev,curr)=>{
    // return prev+curr; // (accumulation)
    return prev > curr ? prev : curr; // (maximum)
});

console.log(output);