// intro Functions
function sum(x, y) {
  let result = x + y;
  return result;
}

//console.log(sum(5, 7));

// intro Methods

let cat = {
  name: "KittyKati",
  sayMeaw: function () {
    return "Meawwww !!!";
  },
};

//console.log(cat.sayMeaw());

/*----------String Methods ---------- */

// how to declare a string

let singleQuoted = "single quoted !";
let doubleQuoted = "double quoted :) ";

let JSVariable = 25;
let backticks = `backticks can include javascript code in ${JSVariable}`;
//console.log(backticks);

let guestList = `Guests:
* Jamal
* Mohammad
* Kamal
`;

//console.log(guestList);

// Special characters
// new line charaacter : \n
guestList = "Guests:\n * Nour\n * Omar\n * Talal";
//console.log(guestList);

//escaped quotes
let phrase = "I'm Safwan";
//console.log(phrase);

// String length property:

//console.log("I'm\n ".length); // 5

// Accessing characters :
/*
 * [pos]
 * .at(pos)
 */
let str = "Marhaba";
//console.log(str[2]); // pos 2 : 'r'
//console.log(str.at(2)); // pos 2 : 'r'

//console.log(str[str.length - 1]);
//console.log(str[20]) // undefined
//console.log(str[-1]) // undefined

//console.log(str[-2]) // undefined
//console.log(str.at(-2)) // b

// Strings are immutable
let strin = "Hi";
strin[0] = "h"; // error
// console.log(strin) // doesn't change

// Changing the case
let upperCase = strin.toUpperCase();
// console.log(upperCase);
// console.log(strin); // doesn't change
// console.log(strin.toLowerCase());

// Searching for a substring

let paragraph = `Today we are just recovering the topic that
 we missed last Sunday, Safwan had an appointment and he 
 suggested that we recover on Saturday, lots of students
  were busy so only Jamal and Mohammad could attend. `;

console.log(paragraph.indexOf("Safwan"));
console.log(paragraph.indexOf("an", 95));

// .includes()
console.log(paragraph.includes("Safwan", 70)); // false

// Getting a substring

let months = "Jan Feb Mar Apr May Jun Jul";
let AprPos = months.indexOf("Apr");
console.log(AprPos); // 12

let month = months.slice(AprPos, AprPos + 3);
month = months.slice(AprPos);

console.log(months.slice(-8, -4));// Jun
console.log(months);

function findSubString(substr, str) {
    // search for the substr inside the str
    let pos = str.indexOf(substr);

    // return facts
    if (pos == -1) {
        return `${substr} could not be found`;
    }

    return `${substr} could be found at position ${pos}`;
    
}

console.log(findSubString('Dec', months));

let copyOfMonths = months.slice();
console.log(copyOfMonths);

// Correct Compare
console.log("Safwan".localeCompare("Safwan Kher Allah")); // -1 
console.log("Safwan Kher Allah".localeCompare("Safwan")); // 1
console.log("Safwan".localeCompare("Safwan")); // 0