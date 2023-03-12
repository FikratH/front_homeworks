const url = "https://jsonplaceholder.typicode.com/comments";

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let arr = [];
      let i = 0;
      data.forEach((element) => {
        console.log(data);
        Object.entries(element).forEach(([key, value]) => {
          arr.push(key + ": " + value);
        });
        document.body.innerHTML += `<li class = "list_item">${arr[i++]} </li>`;
      });
    });
});
