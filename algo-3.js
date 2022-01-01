//Create a function that rteurns the sum of the two lowest poistive
//numbers given an array of minimum 4 positive integers. No floats or non-positive
//integers will be passed.

const sumTwoSmallestNumbers = (numbers) => {
  const [firstNumber, seconNumber] = numbers.sort((a, b) => a - b);

  return firstNumber + seconNumber;
};

const numbers = [19, 5, 42, 3, 77];

console.log(sumTwoSmallestNumbers(numbers));
