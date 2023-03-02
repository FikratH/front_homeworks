const input = document.querySelector(".input");
const input_btn = document.querySelector(".input_btn");
const tasklist = document.querySelector(".tasklist");
const reset_btn = document.querySelector(".input_btn_reset");

input_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const tasklist_item = document.createElement("li");
  tasklist_item.classList.add("tasklist_item");
  tasklist_item.innerHTML = `<span class="tasklist_item_text">${input.value}</span>
            <button class="tasklist_item_btn">Delete</button>`;
  tasklist.appendChild(tasklist_item);
  input.value = "";
});

tasklist.addEventListener("click", (event) => {
  if (event.target.classList.contains("tasklist_item_btn")) {
    event.target.parentElement.remove();
  }
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (input.value === "") {
      alert("Please enter a task");
    } else {
      const tasklist = document.querySelector(".tasklist");
      const tasklist_item = document.createElement("li");
      tasklist_item.classList.add("tasklist_item");
      tasklist_item.innerHTML = `<span class="tasklist_item_text">${input.value}</span>
                    <button class="tasklist_item_btn">Delete</button>`;
      tasklist.appendChild(tasklist_item);
      input.value = "";
    }
  }
});

reset_btn.addEventListener("click", (event) => {
  event.preventDefault();
  tasklist.innerHTML = "";
});
