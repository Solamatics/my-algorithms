//Challange 1: reverse a string
//return a string in reverse

const reverseString = (str) => {
  //using the split, join and reverse strings
  //   return str.split("").reverse().join("");

  //using the decremental forLoop
  // let revString = '';
  // for(let i = str.length - 1; i >=0; i--) {
  //     revString = revString + str[i]
  // }
  // return revString

  //using the incremental forLoop
  //   let revString = "";
  //   for(let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString
  //   }
  //   return revString;

  //using ES6
  //   let revString = '';
  //   for(let char of str) {
  //       revString = char + revString;
  //   }
  //   return revString;

  //uisng the forEachLoop

  //   let reverseString = "";
  //   str.split("").forEach((char) => {
  //     reverseString = char + reverseString;
  //   });
  //   return reverseString;

  //using the Es6 reduce method

  return str.split("").reduce((revString, char) => {
    return char + revString;
  }, "");
};

// console.log(reverseString("olusola"));

//confirming a palindrome
const isPalindrome = (str) => {
  let reverseWord = str
    .split("")
    .reduce((reverseStr, char) => char + reverseStr, "");

  return reverseWord === str;
};

//reverse an Integer

const reverseInt = (int) => {
  const revString = int.toString().split("").reverse().join("");

  return parseInt(revString) * Math.sign(int);
};

//return a string with the first letter of every word capitalized

const capitalizeLetters = (str) => {
  // const strArr = str.toLowerCase().split(' ');
  // for(i = 0; i < strArr.length; i++) {
  //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ')

  //using map method
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  //using regex
  //   return str.replace(/\b[a-z]/gi, char => char.toUpperCase())
};



//Challenge 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 tp 100. FOr multiples of 3
//instead of the number, print 'Fizz", for multiples of 5 print "Buzz'. For numbers
//which  are multiples of both 3 and 5, print "Fizbuzz"

const fizzBuzz = () => {
  for(let i = 0; i <=100; i++) {
    if(i % 15 === 0) {
      console.log('FizzBuzz')
    } else if(i % 5 === 0) {
      console.log('Fizz')
    } else if(i % 3 === 0)console.log('Buzz')
  } 
}

const output = fizzBuzz();


console.log(output);