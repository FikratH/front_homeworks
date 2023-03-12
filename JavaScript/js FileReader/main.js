const fileInput = document.querySelector("#file_input");
// const fileReader = new FileReader();
// fileReader.onload = function (event) {
//   console.log(event.target.result);
// };

fileInput.addEventListener("change", function (e) {
  //   fileReader.readAsDataURL(this.files[0]);
  console.log(this.files[0].size);
  console.log(this.files[0].type);
});
