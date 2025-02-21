document.getElementById('fpara')
{/* <p id=​"fpara" class=​"textmatter">​ First paragraph ​</p>​ */}
document.getElementById('fhead')
{/* <h1 id=​"fhead" class=​"textmatter">​ First Heading ​</h1>​ */}
document.getElementsByClassName('textmatter')
// HTMLCollection(5) [p#fpara.textmatter, h1#fhead.textmatter, h2#shead.textmatter, h3#thead.textmatter, h4#fohead.textmatter, fpara: p#fpara.textmatter, fhead: h1#fhead.textmatter, shead: h2#shead.textmatter, thead: h3#thead.textmatter, fohead: h4#fohead.textmatter]
document.getElementsByTagName('p')
// HTMLCollection [p#fpara.textmatter, fpara: p#fpara.textmatter]
document.getElementsByTagName('h2')
// HTMLCollection [h2#shead.textmatter, shead: h2#shead.textmatter]
document.querySelector('#fpara')
{/* <p id=​"fpara" class=​"textmatter">​ First paragraph ​</p>​ */}
document.querySelector('.textmatter')
{/* <p id=​"fpara" class=​"textmatter">​ First paragraph ​</p>​ */}
document.querySelectorAll('.textmatter')
// NodeList(5) [p#fpara.textmatter, h1#fhead.textmatter, h2#shead.textmatter, h3#thead.textmatter, h4#fohead.textmatter]
document.querySelectorAll('p')
// NodeList [p#fpara.textmatter]
$0
{/* <h3 id=​"thead" class=​"textmatter">​ third Heading ​</h3>​ */}
let para = $0
para
{/* <h3 id="thead" class="textmatter"> third Heading </h3> */}