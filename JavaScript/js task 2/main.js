//#region Task Description

const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// 1) MAP -- methodu istifadə etməklə aşağıdakı 4 tapşırığı yaz
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

// 2) FILTER -- methodu istifadə etməklə aşağıdakı 4 tapşırığı yaz
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters

// 3) SORT -- methodu istifadə etməklə aşağıdakı 4 tapşırığı yaz
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender

// 4) EVERY -- methodu istifadə etməklə aşağıdakı 4 tapşırığı yaz
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?

// 5) SOME -- methodu istifadə etməklə aşağıdakı 4 tapşırığı yaz
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

// ***REDUCE***

// 1. Get total mass of all characters

// 2. Get total height of all characters

// 3. Get total number of characters by eye color

// 4. Get total number of characters in all the character names

//#endregion

//#region Using MAP

//#region MAP #1 Get an array of all names

console.log(persons.map((obj) => obj.name));

//#endregion

//#region MAP #2 Get an array of all heights

console.log(persons.map((obj) => obj.height));

//#endregion

//#region MAP #3 Get an array of objects with just name and height properties

console.log(
  persons.map((obj) => {
    return { name: obj.name, height: obj.height };
  })
);
//#endregion

//#region MAP #4 Get an array of all first names

console.log(
  persons.map((obj) => {
    return obj.name.split(" ")[0];
  })
);

//#endregion

//#endregion

//#region Using FILTER

//#region FILTER #1 Get characters with mass greater than 100

console.log(persons.filter((obj) => obj.mass > 100));

//#endregion

//#region FILTER #2 Get characters with height less than 200

console.log(persons.filter((obj) => obj.height < 200));

//#endregion

//#region FILTER #3 Get all male characters

console.log(persons.filter((obj) => obj.gender.toLowerCase() == "male"));

//#endregion

//#region FILTER #4 Get all female characters

console.log(persons.filter((obj) => obj.gender.toLowerCase() == "female"));

//#endregion

//#endregion

//#region Using SORT

//#region SORT #1 Sort by name

console.log(persons.sort((a, b) => a.name.localeCompare(b.name)));

//#endregion

//#region SORT #2 Sort by mass

console.log(persons.sort((a, b) => a.mass - b.mass));

//#endregion

//#region SORT #3 Sort by height

console.log(persons.sort((a, b) => a.height - b.height));

//#endregion

//#region SORT #4 Sort by gender

console.log(persons.sort((a, b) => b.gender.localeCompare(a.gender)));

//#endregion

//#endregion

//#region Using EVERY

//#region EVERY #1 Does every character have blue eyes?

console.log(persons.every((obj) => obj.eye_color.toLowerCase() == "blue"));

//#endregion

//#region EVERY #2 Does every character have mass more than 40?

console.log(persons.every((obj) => obj.mass > 40));

//#endregion

//#region EVERY #3 Is every character shorter than 200?

console.log(persons.every((obj) => obj.height < 200));

//#endregion

//#region EVERY #4 Is every character male?

console.log(persons.every((obj) => obj.gender.toLowerCase == "male"));

//#endregion

//#endregion

//#region Using SOME

//#region SOME #1 Is there at least one male character?

console.log(persons.some((obj) => obj.gender.toLowerCase == "male"));

//#endregion

//#region SOME #2 Is there at least one character with blue eyes?

console.log(persons.some((obj) => obj.eye_color.toLowerCase() == "blue"));

//#endregion

//#region SOME #3 Is there at least one character taller than 200?

console.log(persons.some((obj) => obj.height > 200));

//#endregion

//#region SOME #4 Is there at least one character that has mass less than 50?

console.log(persons.some((obj) => obj.mass < 50));

//#endregion

//#endregion
