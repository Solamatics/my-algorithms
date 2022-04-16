// // You are given three integers in the form of strings:
// // firstnum, secondnum, and thirdnum. Your task is to check whether it is
// // possible to erase at most one digit from firstnum, so that the resulting string contains at least one digit,
// // has no leading zeros and the value of thirdnum is equal to the sum of the values of firstnum and secondnum.

// function eraseOneDigit(firstnum, secondnum, thirdnum) {
//   let rtnVal = false;

//   if (parseInt(firstnum) + parseInt(secondnum) === parseInt(thirdnum)) {
//     return true;
//   } else {
//     let n = firstnum.length;

//     for (let i = 0; i < n; i++) {
//       let firstnumArr = firstnum.split("");

//       delete firstnumArr[i];

//       let tmpFirstNum = firstnumArr.join("");

//       if (tmpFirstNum.length > 1 && tmpFirstNum[i] === "0") {
//         continue;
//       }

//       if (parseInt(tmpFirstNum) + parseInt(secondnum) === parseInt(thirdnum)) {
//         rtnVal = true;

//         break;
//       }
//     }
//   }

//   return rtnVal;
// }

// console.log(eraseOneDigit(10534, 67, 1120));

// // Given an array of integers a of even length, your task is to split it into two arrays of equal length
// //such that all the numbers are unique in each of them.

// // There may be more than one possible answer, in which case you may return any of them. If there are no possible answers, return an empty array.

// // Hint: Count the number of occurrences of each integer in a. If there are integers occurring more than twice, then there is no solution. Next, put the integers occurring twice into both answer arrays.
// // Finally, put all other numbers in the answer arrays, following the condition that they should have equal sizes.

function getResult(nums, k) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= k) {
      counter += 1;
      return nums.shift(nums[i]);
    }
  }
}

// let myNum = [1, 2, 3, 4, 5, 6];

// let numPop = myNum.shift();

console.log(getResult([1, 2, 3, 4, 5, 6], 1));
