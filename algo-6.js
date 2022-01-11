// Write a program to create a number from one to N. Let N be any number e.g 10 or 20.
// If any of the number is a modulus of 3 print fizz if it is a modulus of 5 print buzz
// if modulus of both 5 and 3 print fizzbuzz

const fizzBuzz = (N) => {
  for (let i = 1; i <= N; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(30));
