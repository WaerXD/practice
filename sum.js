const ps = require("prompt-sync");
const prompt = ps();

// номер 1
sum = (num1, num2) =>{
    return num1 + num2;
};

let num1 = parseInt(prompt("Enter Num1 > "), 10);
let num2 = parseInt(prompt("Enter Num2 > "), 10);

console.log(sum(num1, num2));