const accordion_items = document.querySelectorAll(".accordion_item");
const accordion_headers = document.querySelectorAll(".accordion_header");
const accordion_descs = document.querySelectorAll(".accordion_desc");
const accordion_arrows = document.querySelectorAll(".accordion_arrow");
accordion_headers.forEach((accordion_header) => {
  accordion_header.addEventListener("click", (e) => {
    accordion_descs.forEach((accordion_desc) => {
      accordion_desc.classList.remove("accordion_desc_active");
    });
    accordion_arrows.forEach((accordion_arrow) => {
      accordion_arrow.classList.remove("accordion_arrow_active");
    });
    accordion_header.nextElementSibling.classList.add("accordion_desc_active");
    accordion_header.lastElementChild.classList.add("accordion_arrow_active");
  });
});
