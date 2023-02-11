//#region Task Description

const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canada",
    friends: [325330, 325326],
    residence: 10012,
  },
];

//#endregion

//#region First Task
function findById(num) {
  let result = persons.find((item) => item.id == num);
  return result;
}
console.log("First Task Result: ", findById(4));
//#endregion

//#region Second Task
function findByGender(str) {
  let result = persons.filter(
    (item) => item.gender.toLowerCase() == str.toLowerCase()
  );
  return result;
}
console.log("Second Task Result: ", findByGender("FEmale"));
//#endregion

//#region Third Task
function addObj(obj) {
  persons.push(obj);
  persons.unshift(obj);
  return persons;
}
console.log(
  "Third Task Result: ",
  addObj({ name: "Fikret", lastname: "Huseynov", age: 16, gender: "male" })
);
//#endregion

//#region Fourth Task
function checkByGender(str) {
  let result = persons.some(
    (item) => item.gender.toLowerCase() == str.toLowerCase()
  );
  let result2 = persons.every(
    (item) => item.gender.toLowerCase() == str.toLowerCase()
  );
  return {
    result,
    result2,
  };
}
console.log("Fourth Task Result: ", checkByGender("male"));
//#endregion
