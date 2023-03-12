// let arr = [1, 4, 2, 2, 3, 1, 5, 7];

// const removeDuplicates = (array1) => {
//   let array = array1
//     .sort((x, y) => x - y)
//     .filter((item, index) => array1.indexOf(item) == index);
//   let diff = array1.length - array.length;
//   return array;
// };

// console.log(removeDuplicates(arr));

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let array2 = [1, 2, 3, 4, 5];

// const getDifference = (arr1, arr2) => {
//   let arr1Len = arr1.length;
//   let arr2Len = arr2.length;
//   let diffArr;
//   if (arr1Len > arr2Len) {
//     diffArr = arr1.filter((item) => !arr2.includes(item));
//   } else {
//     diffArr = arr2.filter((item) => !arr1.includes(item));
//   }
//   return diffArr;
// };

// console.log(getDifference(array2, array1));

// let arrLast = [7, 8, 9];
// let arrSecond = [4, 5, 6, [...arrLast]];
// let arrBase = [1, 2, 3, [...arrSecond]];

// console.log(arrBase);

// const restFunc = (a, b, ...restNums) => {
//   let restNumsResult = restNums.reduce((result, item) => result * item, 1) / 2;
//   return a + b + restNumsResult;
// };

// console.log(restFunc(0, 0, 4, 5, 10, 15, 20));

//#region calculator with using prompt and alert

// const calculator = () => {
//   let firstNum = +prompt("Enter first number");

//   let secondNum = +prompt("Enter second number");

//   let operation = prompt("Enter operation");

//   let result;

//   switch (operation) {
//     case "+":
//       result = firstNum + secondNum;

//       break;

//     case "-":
//       result = firstNum - secondNum;

//       break;

//     case "*":
//       result = firstNum * secondNum;

//       break;

//     case "/":
//       result = firstNum / secondNum;

//       break;

//     default:
//       result = "Wrong operation";

//       break;
//   }

//   alert(result.toFixed(2));
// };

// calculator();

//#endregion

//make a cool animation to #diм
