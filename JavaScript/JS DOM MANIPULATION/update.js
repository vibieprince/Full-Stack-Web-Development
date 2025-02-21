document
// #document (http://127.0.0.1:5500/JavaScript/JS%20DOM%20MANIPULATION/index.html)<!DOCTYPE html><html lang=​"en">​scroll<head>​…​</head>​<body>​…​</body>​</html>​
let button = $0
undefined
button
{/* <h3 id=​"thead" class=​"textmatter">​ third Heading ​</h3>​ */}
button.innerHTML
' third Heading '
button.innerHTML = '<p> Hello ji </p>';
'<p> Hello ji </p>'
button
{/* <h3 id=​"thead" class=​"textmatter">​…​</h3>​ */}
button.outerHTML
'<h3 id="thead" class="textmatter"><p> Hello ji </p></h3>'
let element = document.querySelector('#fdiv')
undefined
element
{/* <div id=​"fdiv">​…​</div>​ */}
element.textContent
'\n        \n            This is my first \n            \n                Text\n            \n        \n         This is my second para\n    '
element.innerText
'This is my first Text\n\nThis is my second para'
let fHeading = document.createElement('h1')
undefined
fHeading.textContent = "My name is Prince"
'My name is Prince'
fHeading
{/* <h1>​My name is Prince​</h1>​ */}
let bodyTag = document.querySelector('body')
undefined
bodyTag
{/* <body>​…​</body>​ */}
bodyTag.appendChild(fHeading);
{/* <h1>​My name is Prince​</h1>​ */}
let mydiv = document.querySelector('#mydiv')
// undefined
// mydiv
// <div id=​"mydiv">​…​</div>​
let newElement = document.createElement('span')
undefined
newElement.textContent("This is me Prince")
// VM5321:1 Uncaught TypeError: newElement.textContent is not a function
//     at <anonymous>:1:12
// (anonymous) @ VM5321:1
newElement.textContent = "This is me Prince Singh";
'This is me Prince Singh'
mydiv.insertAdjacentHTML('beforebegin',newElement)
// undefined
mydiv.insertAdjacentElement('afterbegin',newElement)
//<span>​This is me Prince Singh​</span>​

let parent = chid.parent
let child = document.querySelector("#fpara");
parent.removeChild(child)