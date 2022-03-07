// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100, the second -
// from the year 101 up to and including the year 200, etc.

const returnYearCentury = (year) => Math.floor((year - 1) / 100) + 1;

// console.log(returnYearCentury(1999));

function solution(inputString) {
  let reversedWord = "";
  let letters = [];

  for (let i = 0; i < inputString.length; i++) {
    letters.push(inputString[i]);
  }

  for (let i = 0; i <inputString.length; i++) {
      reversedWord += letters.pop();
  }

  if (inputString === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("raceca"));
