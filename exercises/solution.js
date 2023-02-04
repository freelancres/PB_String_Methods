// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const parkWalkStr = "I can walk in the park all day!";
let pos = parkWalkStr.indexOf('park');
let park = parkWalkStr.slice(pos, pos + 4);
console.log(park);
//OR
console.log(parkWalkStr.substring(parkWalkStr.indexOf('park'), parkWalkStr.indexOf('park') + 4));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

// 3. Declare another variable with the value of "Earthlings". Convert the value to lower case and print the converted value to the console.
const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Print the the characters "aSc" to the console using the substring() method.
const jsStr = "JavaScript";
console.log(jsStr.slice(3, 6));
console.log(jsStr.substring(3, 6));

// 5. Check if the sentence "nice shoes" contains the letter l or n.
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
oldStr = "Yaman";
givvenStr = "Happy Country";
const newStr = `${givvenStr[0]}${oldStr}${givvenStr[0]}`;//
console.log(newStr)
//OR
let modifiedStr = oldStr.replace(oldStr, `${oldStr[0]}${oldStr}${oldStr[0]}`);
console.log(modifiedStr);
console.log(oldStr);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

let oldString = "JavaScript";
let lastThree = oldString.slice(oldString.length - 3);
//oldString = `${lastThree}${oldString}${lastThree}`;
console.log(oldString); 

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let first = oldString[0];
let last = oldString.at(-1);
let middleStr = oldString.slice(1, oldString.length - 1);
oldString = `${last}${middleStr}${first}`;
console.log(oldString);


// 9. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation e.g. "My name is Maria. I live in Berlin and I am a teacher".



//10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
first = "the brown fox"[0].toUpperCase(); // T
middleStr = "the brown fox".slice(1);
console.log(`${first}${middleStr}`);


