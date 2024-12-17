/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwonumbers(a,b) {
    return a +b;
}
let sum = addTwonumbers (3,5);
console.log(sum);

// Arrow Function With Parameters
const addTwonumbers = (a,b) => {
    return a +b;
}
let sum = addTwonumbers (3,5);
console.log(sum);
// Single Line Arrow Function With Parameters
const addTwonumbers2 = (a,b) => (a + b); 
or
const addTwonumbers2 = (a,b) => a + b;
let sum2 = addTwonumbers(6,4);
console.log(sum2);

// Implicit Returns
const saysomething = message => console.log(message);
saysomething('hello there');
const sayhello = () => console.log('hello');
sayhello();

// Returning Multiple Lines
const returnmultiplelines = () => (
    `<p>
        this is a string
    </p>`
)
console.log(returnmultiplelines());