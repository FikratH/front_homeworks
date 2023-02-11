// let odds = [];
// let evens = [];
// function sortNumsToArrays(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       evens.push(i);
//     } else {
//       odds.push(i);
//     }
//   }
//   console.log({ evens });
//   console.log({ odds });
// }

// let number = prompt("Please, enter number:");

// sortNumsToArrays(number);

// document.write(
//   "<h2> Evens: </h2>" + "<h3>" + evens.join(", ") + "\n\n\n\n\n\n\n"
// );

// document.write("<h2> Odds: </h2> " + "<h3>" + odds.join(", "));

//#region customForEach
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const customMap = (arr, callbackFn) => {
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(callbackFn(arr[i]));
  }
  return copy;
};

function AddOne(item) {
  return item + 1;
}

console.log(customMap(array, (i) => i ** 2));
//#endregion

//#region customFilter

let arrayforFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const customFilter = (arr, condition) => {
  let copy = [];
  arr.forEach((element) => {
    if (condition(element)) {
      copy.push(element);
    }
  });
  return copy;
};

const conditionFn = (item) => {
  if (item % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(customFilter(arrayforFilter, (i) => (i % 3 == 0 ? true : false)));

//#endregion

//#region customIndexOf

let arrayforIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const customIndexOf = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }
};

console.log(customIndexOf(arrayforIndex, 10));

//#endregion

//#region customSome and customEvery

let arrayforSome = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const customSome = (array, conditionFn) => {
  array.forEach((e) => {
    if (conditionFn(e)) {
      return true;
    }
  });
  return false;
};

console.log(
  "CustomSome Result: ",
  customSome(arrayforSome, (i) => (i % 2 == 0 ? true : false))
);

const customEvery = (array, conditionFn) => {
  let copy = [];
  array.forEach((e) => {
    if (conditionFn(e)) {
      copy.push(e);
    }
  });
  return true;
};

console.log(
  "CustomEvery Result: ",
  customEvery(arrayforSome, (i) => i > 5)
);

//#endregion
