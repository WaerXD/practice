const ps = require("prompt-sync");
const prompt = ps();


const {reverseArray} = require("./reverseArray")
const {reverseCase} = require("./reverseCase")
const {sum} = require("./sum")
//1
let arr = [];
let arrEl;

flag = true;

while(flag){
    arrEl = prompt("Enter New Array Element / enter 'stop' to exit > ");
    if(arrEl == "stop"){
        flag = false;
    } else {
        arr.push(arrEl);
    }
}

console.log(arr);
console.log(reverseArray(arr));

//2
let num1 = parseInt(prompt("Enter Num1 > "), 10);
let num2 = parseInt(prompt("Enter Num2 > "), 10);

console.log(sum(num1, num2));

 //3 
let str = prompt("Enter a string > ");
console.log(reverseCase(str));