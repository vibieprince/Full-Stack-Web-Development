// Strings - sequence of character
let firstName = "Prince"
let lastName = "Singh"

let fullName = `Prince
Singh`

console.log(firstName)
console.log(lastName)
console.log(fullName)

// Or 

let friendName = new String("Akash Singh") // Object
console.log(friendName)

console.log(typeof friendName); // "object"
console.log(friendName == "Akash Singh");  // true (values compared)
console.log(friendName === "Akash Singh"); // false (object vs. primitive)

let anotherName = `${firstName} ${lastName}`
console.log(anotherName)

console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())

console.log(firstName.substring(3))
console.log(firstName.substring(2,4)) // Ending exclusive

let sentence = "Mai keyaa namaste uncle jii...pechaanyaa?"
let words = sentence.split(' ')
console.log(words)

// sentence = "Mai keyaa \"namaste\" uncle jii...pechaanyaa?"
sentence = "Mai\\ keyaa \\namaste\\ uncle \\jii...\\pechaanyaa?"
words = sentence.split('\\')
console.log(words)
console.log(words.join('_'))