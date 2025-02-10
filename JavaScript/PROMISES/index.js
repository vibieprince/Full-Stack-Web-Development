// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("First Promise");
// });
// // VM1211:2 First Promise
// // undefined
// firstPromise
// // Promise {<pending>}
// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("First Promise");
// });
// // VM1251:2 First Promise
// undefined
// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("First Promise"); resolve(1001);
// });
// // VM1283:2 First Promise
// undefined
// firstPromise
// // Promise {<fulfilled>: 1001}
// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("First Promise"); reject(new Error("Internal Server Error"));
// });
// // VM1513:2 First Promise
// // undefined
// // VM1513:2 Uncaught (in promise) Error: Internal Server Error
// //     at <anonymous>:2:42
// //     at new Promise (<anonymous>)
// //     at <anonymous>:1:20
// // (anonymous) @ VM1513:2
// // (anonymous) @ VM1513:1
// firstPromise
// // Promise {<rejected>: Error: Internal Server Error
// //     at <anonymous>:2:42
// //     at new Promise (<anonymous>)
// //     at <anony…}
// // function sayMyName(){console.log("My Name is Prince");}
// // undefined
// setTimeOut(sayMyName,1000);
// // VM1705:1 Uncaught ReferenceError: setTimeOut is not defined
// //     at <anonymous>:1:1
// // (anonymous) @ VM1705:1
// sayMyName
// // ƒ sayMyName(){console.log("My Name is Prince");}

// function sayMyName(){
//     console.log("My Name is Prince");
// }

// setTimeout(sayMyName,1000);

// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("My Name is Prince");
//     },15000);
// })

// firstPromise
// // Promise {<pending>}
// // index.js:53 My Name is Prince
// firstPromise
// // Promise {<pending>}


// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("My Name is Prince");
//     },5000);
//     resolve(1);
// })


// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success)
//         resolve("Promise Fullfilled");
//     else
//         reject("Internal Server Error");
// });

// promise1.then((message)=>{
//     console.log("Then ka message is "+message);
// }).catch((error)=>{
//     console.log("Error:"+error);
// })

// promise1.then((message)=>{
//     console.log("First message :"+message);
//     return "Promise fulfilled in second message";
// }).then((message)=>{
//     console.log("Second message :"+message);
//     return "Promise fullfilled in third message";
// }).then((message)=>{
//     console.log("Third message :"+message);
//     return "Promise fulfilled in fourth message";
// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("Main too final hu... chalunga hee chalunga");
// })

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Third");
})

Promise.all((promise3,promise2,promise1))
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("Error :"+error);
})