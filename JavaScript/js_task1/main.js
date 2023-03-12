// let target = prompt("Please, enter a number:");
// for (let index = 1; index <= target; index += 2) {
//   console.log(index);
// }

let target2 = prompt("Please, enter a number:");
let sum = 0;
while (target2 != 0) {
  sum += target2 % 10;
  target2 = parseInt((target2 /= 10));
}
console.log(sum);
