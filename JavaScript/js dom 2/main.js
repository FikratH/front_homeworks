const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor == "red"
      ? (box.style.backgroundColor = null)
      : (box.style.backgroundColor = "red");
  });
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = null;
  });
});
