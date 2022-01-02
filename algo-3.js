//Create a function that returns the sum of the two lowest poistive
//numbers given an array of minimum 4 positive integers. No floats or non-positive
//integers will be passed.


const sumOfTwoMinimumNumbers = (numbers) => {
  const [firstNumber, secondNumber]= numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
}


console.log(sumOfTwoMinimumNumbers([12, 4, 96, 3]))

//Given a string, replace every letter with its position in the 
//alphabet. If anything in the text isn't a letter, ignore it and don't return it.


const alphabetPosition = () => {}
  