//CHALLENGE 5: MAX Character
//retur the character that is most commnon in a string

const maxCharacter = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = 0;


  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
        charMap[char] = 1;
    }
  });

  for(let char in charMap) {
      if(charMap[char] > maxNum) {
          maxNum = charMap[char];
          maxChar = char;
      }
  }
  return maxChar;
};

const output = maxCharacter('javascript');

console.log(output)
