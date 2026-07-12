let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){ // value at each index
    console.log(val);
});

arr.forEach((val)=>{
    console.log(val);
})

let city = ["Pune","Delhi","Banglore"];
city.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx);
})

// Higher order function -- wo functions jo dusre function ko as a param lete hain ya phir as a value usko return kar rahe hain.
// either take another function as an parameter or return another function as their output