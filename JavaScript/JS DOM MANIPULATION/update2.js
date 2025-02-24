let paraElement = document.getElementById('spara')
// undefined
paraElement
{/* <p id=​"spara" style=​"background-color:​ orange;​ padding:​ 0.8rem;​">​Second para​</p>​ */}
console.log(paraElement.style)
// VM377:1 CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// undefined
paraElement.style.backgroundColor = 'blue';
'blue'
paraElement.style.backgroundColor('white')
// VM608:1 Uncaught TypeError: paraElement.style.backgroundColor is not a function
    // at <anonymous>:1:19
// (anonymous) @ VM608:1
paraElement.style.backgroundColor = 'white';
'white'
let secondElement = document.getElementById('sdiv')
// undefined
secondElement
{/* <div id=​"sdiv" style=​"background-color:​ yellow;​ padding:​ 2rem;​">​…​</div>​ */}
secondElement.style.cssText;
'background-color: yellow; padding: 2rem;'
secondElement.style.cssText = "background-color:black;color:white;padding :0.5rem"
'background-color:black;color:white;padding :0.5rem'
paraElement.style.backgroundColor = 'blue';
'blue'
let firstElement = document.querySelector('#fdiv');
// undefined
firstElement
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​">​…​</div>​ */}
firstElement.setAttribute('class','divClass');
// undefined
firstElement
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"divClass">​…​</div>​ */}
// undefined
firstElement
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"divClass">​…​</div>​ */}
firstElement.setAttribute('class','SecondDivClass');
// undefined
firstElement
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"SecondDivClass">​…​</div>​ */}
firstElement.setAttribute('style',"padding:0.1rem");
// // undefined
// fpara = $0
// // undefined
// fpara
// <p id=​"fpara" style=​"background-color:​ green;​padding:​ 2rem;​">​ First para ​</p>​
// fpara.setAttribute('style','margin:1rem');
fpara = $0
undefined
fpara
{/* <p id=​"fpara" style=​"background-color:​ green;​padding:​ 2rem;​" class=​"para">​ First para ​</p>​ */}
fpara.className
'para'
fpara.className = "CSDS,DS"
'CSDS,DS'
fpara.className
'CSDS,DS'
let fpara = document.querySelector('#fpara');
undefined
fpara
{/* <p id=​"fpara" style=​"background-color:​ green;​padding:​ 2rem;​" class=​"CSDS,DS">​ First para ​</p>​ */}
fpara.className = 'firstClass secondClass';
'firstClass secondClass'
fpara
{/* <p id=​"fpara" style=​"background-color:​ green;​padding:​ 2rem;​" class=​"firstClass secondClass">​ First para ​</p>​ */}
fpara.classList
// DOMTokenList(2) ['firstClass', 'secondClass', value: 'firstClass secondClass']
fpara.classList.add('thirdClass');
// undefined
fpara.classList
// DOMTokenList(3) ['firstClass', 'secondClass', 'thirdClass', value: 'firstClass secondClass thirdClass']
fpara.classList.remove('firstClass');
// undefined
fpara.classList
// DOMTokenList(2) ['secondClass', 'thirdClass', value: 'secondClass thirdClass']
fpara.classList.toggle('secondClass');
// false
fpara.classList
// DOMTokenList ['thirdClass', value: 'thirdClass']
fpara.classList.toggle('secondClass')
// true
fpara.classList
// DOMTokenList(2) ['thirdClass', 'secondClass', value: 'thirdClass secondClass']
fpara.classList.contains('firstClass');
// false
fpara.classList.contains('secondClass')
// true