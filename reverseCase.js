// номер 2
const reverseCase = (str) => {
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

  module.exports = {
    reverseCase,
}