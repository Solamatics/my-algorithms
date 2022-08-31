/*
Given a string `s` containing just the characters '(', ')', '{', '}', '[', ']', '<' and '>' determine if the input string is valid.

An input string is valid if:

 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.

Example 1:

  Input: s = "()"
  Output: true

Example 2:

  Input: s = "()[]{}<>()"
  Output: true


Example 3:

  Input: s = "(]"
  Output: false
*/

const validateString = (str) => {
  //array of string
  const stringArray = [];

  //loop through string paramter
  for (let i = 0; i < str.length; i++) {
    const start = stringArray[stringArray.length - 1];
    if (str[i] === "(" || str[i] === "{" || str[i] === "[" || str[i] === "<") {
      stringArray.push(str[i]);
    } else if (str[i] === ")" && start === "(") {
      stringArray.pop();
    } else if (str[i] === "}" && start === "{") {
      stringArray.pop();
    } else if (str[i] === "]" && start === "[") {
      stringArray.pop();
    } else if (str[i] === ">" && start === "<") {
      stringArray.pop();
    } else {
      return false;
    }
  }

  return stringArray.length === 0;
};

console.log(validateString("(){"));
// console.log(stringArray)
