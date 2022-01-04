//Create a function that returns the sum of the two lowest poistive
//numbers given an array of minimum 4 positive integers. No floats or non-positive
//integers will be passed.

const sumOfTwoMinimumNumbers = (numbers) => {
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
};

console.log(sumOfTwoMinimumNumbers([12, 4, 96, 3]));

//Given a string, replace every letter with its position in the
//alphabet. If anything in the text isn't a letter, ignore it and don't return it.

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(' ');
};

let stringResult = alphabetPosition("The sunset sets at twelve o' clock.");

console.log(stringResult);
