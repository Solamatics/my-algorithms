//program to coovert integer to binary

// const convertToBinary = (num) => {
//   let bin = 0;
//   let rem,
//     i = 1,
//     step = 1;
//   while (num != 0) {
//     rem = num % 2;
//     console.log(
//       `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
//         x / 2
//       )}`
//     );
//     num = parseInt(num / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//   }
//   console.log(`Binary: ${bin}`);
// };

const number = parseInt(prompt("Enter a decimal number: "));

const result = number.toString(2);
console.log('Binary:' + ' ' + result);
