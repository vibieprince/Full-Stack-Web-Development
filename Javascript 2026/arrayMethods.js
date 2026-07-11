let foodItems = ["potato","apple","litchi","tomato"];

foodItems.push("chips","burger","paneer");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(foodItems);

console.log("deleted",deletedItem);

let marks = [30,2,5,3,64,63,6];
console.log(marks);
marks = marks.toString()
console.log(marks);

let marvelHeroes = ["Thor","Spiderman","Ironman","Antman","Dr. Strange"];
let dcHeroes = ["Superman","Batman"];
let indianHeroes = ["shaktiman","krish"];
console.log(marvelHeroes);
console.log(dcHeroes);

let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// unshit --> push like 
// shift --> pop like 

// marvelHeroes.unshift("antman");
console.log(marvelHeroes);

// marvelHeroes.shift();


// console.log(marvelHeroes);

console.log(marvelHeroes.slice(1,3)); // kabhi kabhi we use it to make copy of our array

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,2,101,102); // delete and add

arr.splice(2,0,108); // add only

arr.splice(3,1); // delete only

arr.splice(3,1,101); // replace only

console.log(arr);