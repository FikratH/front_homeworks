let navbar_items = document.querySelectorAll(".header_navbar_items_item");
let navbar_burger = document.querySelector(".header_navbar_items_burger");
let navbar = document.querySelector(".header_navbar");
let header = document.querySelector("header");
let navbar_list = document.querySelector(".header_navbar_items");
navbar_burger.addEventListener("click", function () {
  navbar_burger.innerHTML = navbar_burger.innerHTML == "☰" ? "✖" : "☰";
  navbar_items.forEach((item) => {
    item.classList.toggle("active");
  });
  navbar_list.style.flexDirection =
    navbar_list.style.flexDirection == "column" ? "row" : "column";

  navbar.style.height = navbar.style.height == "300px" ? "0px" : "300px";
  navbar.style.padding = navbar.style.padding == "20px" ? "0px" : "20px";
  navbar.style.backgroundColor = "#9d9d9d";
  navbar.style.transition = "all 1s ease-out";
});
