// Prompt the user to enter their full name. Generate a username for them based on the Input. Start username with @. followed by their full name and ending with the fullname length. 

// eg: user name = "Prince Singh", username should be "@princesingh11"

let fullName = String(prompt("Enter your full name"));
fullName = fullName.toLowerCase();
// fullName = fullName.trim();
fullName = fullName.replace(/\s+/g,'');
// \s+ matches one or more whitespace characters 
// g the glogal flag, which ensures it replaces every match in the string not just the first one

const userName = '@' + fullName + fullName.length;
// alert(userName);
alert("Your username is : "+userName);
console.log(userName);