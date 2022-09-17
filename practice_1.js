const ps = require("prompt-sync");
const prompt = ps();

// номер 1
sum = (num1, num2) =>{
    return num1 + num2;
};

let num1 = parseInt(prompt("Enter Num1 > "), 10);
let num2 = parseInt(prompt("Enter Num2 > "), 10);

console.log(sum(num1, num2));

// номер 2
reverseCase = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char == char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
};

let str = prompt("Enter a string > ");
console.log(reverseCase(str));


// номер 3

reverseArray = (arr) => {
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

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