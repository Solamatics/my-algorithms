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
  },'');
};

// console.log(reverseString("olusola"));


//confirming a palindrome
const isPalindrome = str => {
    let reverseWord = str.split('').reduce((reverseStr, char) => char + reverseStr, '');
    
    return reverseWord === str;
}

;


//reverse an Integer

const reverseInt = int => {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int)
}

const output = reverseInt("-12345");

console.log(output)
