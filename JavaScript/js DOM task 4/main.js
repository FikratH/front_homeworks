const button = document.querySelector(".btn");
let carArray = [];

class Car {
  constructor(brand, model, isNew, year, description) {
    this.brand = brand;
    this.model = model;
    this.isNew = isNew;
    this.year = year;
    this.description = description;
  }
}
let brand = document.querySelector(".brand");
let model = document.querySelector(".model");
let year = document.querySelector(".year");
let isNew = document.querySelector(".is_new");
let description = document.querySelector(".desc");
button.addEventListener("click", function () {
  if (
    !(
      brand.value === "" ||
      model.value === "" ||
      year.value === "" ||
      description.value === ""
    )
  ) {
    let car = new Car(
      brand.value,
      model.value,
      isNew.checked,
      year.value,
      description.value
    );
    carArray.push(car);
    let table = document.querySelector(".table");
    let row = document.createElement("tr");
    let brandCell = document.createElement("td");
    let modelCell = document.createElement("td");
    let yearCell = document.createElement("td");
    let isNewCell = document.createElement("td");
    let descriptionCell = document.createElement("td");
    brandCell.innerHTML = car.brand;
    modelCell.innerHTML = car.model;
    yearCell.innerHTML = car.year;
    isNewCell.innerHTML = car.isNew ? "Yes" : "No";
    descriptionCell.innerHTML = car.description;
    row.appendChild(brandCell);
    row.appendChild(modelCell);
    row.appendChild(yearCell);
    row.appendChild(isNewCell);
    row.appendChild(descriptionCell);
    table.appendChild(row);
    console.log(car);
    brand.value = "";
    model.value = "";
    year.value = "";
    isNew.checked = false;
    description.value = "";
  } else {
    alert("Please fill all the fields!");
  }
});
