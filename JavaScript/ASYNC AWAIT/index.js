// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set Timeout block");
//     },3000);
// }

// let output = getData();

// async function getData(){
//     // let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     // let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     let data = await response.json();
//     console.log(data);
// }

// getData();
// scenario
// prepare url / api endpoint -> sync
// fetch data -> network call ->sync
// process data - > sync

// const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json');

// const myRequest = new Request("https://example.org/post",{
//     method : "POST",
//     body: JSON.stringify({username: "example"}),
//     headers: myHeaders,
// });

// const response = await fetch(myRequest);

const myHeaders = new Headers();
myHeaders.append("Content-Type","aplication/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: "Prince bhai"}),
    headers: myHeaders,
};
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts/101";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get data response : ",data);
}
async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("My data : ",data);
}
async function processData(){
    await postData();
    await getData();
}
processData();