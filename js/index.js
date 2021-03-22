// Iteration 1: Names and Input
const hacker1 = 'Hélène';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'marcia';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
for (let i=0; i<hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
    console.log(' ');
}

for (let i=hacker2.length; i>0; i--) {
    console.log(hacker2[i-1]);
}

if (hacker2.localeCompare(hacker1) > -1){
    console.log(`Drivers name goes first`);
}
else if (hacker1.localeCompare(hacker2) > -1) {
    console.log(`Yo, the navigator goes first definitely`);
}
else {
    console.log(`What?! you both have the same name?`);
}




//Bonus 1

//Generate 3 paragraphs
const paragraph1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
const paragraph2 = 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'
const paragraph3 = 'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

//Make your program count the nr of words in the string
let paragraphSelector = paragraph1;
let wordCount = paragraphSelector.split(" ").length;
console.log(wordCount);

let etCount = paragraphSelector.split("et").length-1;
console.log(etCount);


