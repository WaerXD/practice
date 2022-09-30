const ps = require("prompt-sync");
const prompt = ps();


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