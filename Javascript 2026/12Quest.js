// For a given array of numbers, print the square of each value using the forEach loop.

arr = [1,2,3,4,5,6,7];

// arr.forEach((val)=>{
//     console.log(val*val);
// })

let calcSquare = (num) => {
    console.log(num**2);
};

arr.forEach(calcSquare);