//return the number (count) of vowels in the given string.

const numberOfVowels = (str) => {
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("pandemonium"));
