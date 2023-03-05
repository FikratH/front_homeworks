//SANDY : Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock

//AMY: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

//TYRELL: If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

//WANDA: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

//JOHN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?

const box = document.querySelector(".container_slider_box");
const arrowLeft = document.querySelector(".container_slider_arrow_left");
const arrowRight = document.querySelector(".container_slider_arrow_right");

let obj_arr = [
  {
    name: "JOHN",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae?",
    image: "./img/JOHN.jpg",
  },
  {
    name: "SANDY",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    image: "./img/SANDY.jpg",
  },
  {
    name: "AMY",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: "./img/AMY.jpg",
  },
  {
    name: "TYRELL",
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    image: "./img/TYRELL.jpg",
  },
  {
    name: "WANDA",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "./img/WANDA.jpg",
  },
];

let index = 1;

arrowLeft.addEventListener("click", () => {
  if (index === 0) {
    index = obj_arr.length - 1;
  } else {
    index--;
  }
  box.innerHTML = `
  <img src="${obj_arr[index].image}" alt="" class="container_slider_box_img">
<div class="container_slider_box_text">
    <h2>${obj_arr[index].name}</h2>
    <p>${obj_arr[index].text}</p>
</div>
<i class="fa-solid fa-quote-left"></i>
        `;
});

arrowRight.addEventListener("click", () => {
  if (index === obj_arr.length - 1) {
    index = 0;
  } else {
    index++;
  }
  box.innerHTML = `
  <img src="${obj_arr[index].image}" alt="" class="container_slider_box_img">
<div class="container_slider_box_text">
    <h2>${obj_arr[index].name}</h2>
    <p>${obj_arr[index].text}</p>
</div>
<i class="fa-solid fa-quote-left"></i>
        `;
});
