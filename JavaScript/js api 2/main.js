const apiUrl = "https://jsonplaceholder.typicode.com/photos";

const btn = document.querySelector(".btn");
const btn_put = document.querySelector(".btn_put");
const cards = document.querySelector(".cards");
btn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.slice(0, 20))
    .then((newData) => {
      newData.map((item) => {
        cards.innerHTML += `<div class="card">
            <h2 class="card_title">${item.title}</h2>
            <div class="card_img">
              <img src="${item.url}" alt="" />
            </div>
            <a target="blank" href="${item.thumbnailUrl}" class="card_link">Link</a>
          </div>`;
      });
    });
});

let arr = [
  {
    albumId: 1,
    id: 1,
    title: "Fikret beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "Ayxan est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];
btn_put.addEventListener("click", () => {
  fetch(`${apiUrl}/1`, {
    method: "PUT",
    body: JSON.stringify(arr),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
});
