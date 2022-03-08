// Given an array of integers, find the
//pair of adjacent elements that has the largest product and return that product.

const solution = (inputArray) => {
  let first = 0,
    second = 0;
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < inputArray.length; i++) {
    first = inputArray[i];
    second = inputArray[i + 1];
    if (first * second > res) {
      res = first * second;
    }
  }
  return res;
};

console.log(solution([-23, 4, -3, 8, -12]));

//This solution doesn't treat all the edge cases!!!!!!!!!
// function solution(inputArray) {
//   let counter = 0;
//   let maxProduct;

//   for (let i = 0; i < inputArray.length; i++) {
//     let multiplier = inputArray[i] * inputArray[i + 1];

//     counter < multiplier ? counter = multiplier : counter;
//     maxProduct = counter
//   }
//   return maxProduct;
// }

// console.log(solution([-23, 4, -3, 8, -12]));
