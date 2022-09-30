const ps = require("prompt-sync");
const prompt = ps();
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
  