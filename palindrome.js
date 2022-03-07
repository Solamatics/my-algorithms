var letters = [];

var word = "sola";

var reverseWord = "";

//loop through the given word
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//reverse letters
for (var i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (word === reverseWord) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
