// let counter = document.querySelector(".counter");
// counter.style.margin = "0px 10px";
// document.querySelector(".increase").addEventListener("click", function () {
//   counter.innerHTML = +counter.innerHTML + 1;
// });

// document.querySelector(".decrease").addEventListener("click", function () {
//   if (+counter.innerHTML > 0) {
//     counter.innerHTML = +counter.innerHTML - 1;
//   }
// });

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let action = document.querySelector(".action");
let res = document.querySelector(".sum");
let res_btn = document.querySelector(".sum_btn");
res_btn.addEventListener("click", function () {
  let result;
  switch (action.value) {
    case "*":
      result = (+num1.value * +num2.value).toFixed(2);
      break;
    case "/":
      result = (+num1.value / +num2.value).toFixed(2);
      break;
    case "+":
      result = (+num1.value + +num2.value).toFixed(2);
      break;
    case "-":
      result = (+num1.value - +num2.value).toFixed(2);
      break;
    default:
      result = "Wrong operator";
      break;
  }
  res.innerHTML = result;
});
