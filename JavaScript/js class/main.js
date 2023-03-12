// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject, experience) {
//     super(name, age);
//     this.subject = subject;
//     this.experience = experience;
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }

// class School {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//     this.teachers = [];
//     this.students = [];
//   }

//   addTeacher(teacher) {
//     this.teachers.push(teacher);
//   }

//   addStudent(student) {
//     this.students.push(student);
//   }

//   getTeachers() {
//     return this.teachers;
//   }

//   getStudents() {
//     return this.students;
//   }
// }

// let teacher1 = new Teacher("Tural", 23, "Front End", 1);
// let student1 = new Student("Fikret", 16, 10);

// console.log(teacher1, student1);

// let school1 = new School("Code Academy", "Baku");

// school1.addTeacher(teacher1);

// school1.addStudent(student1);

// console.log(school1);

// console.log(school1.getTeachers());

// console.log(school1.getStudents());

class Car {
  constructor(brand, model, isNew, color, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.isNew = isNew;
    this.color = color;
  }
}

// function Carr(brand, model, isNew, color, year, mileage) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.mileage = mileage;
//   this.isNew = isNew;
//   this.color = color;
// }

class Truck extends Car {
  constructor(brand, model, isNew, color, year, mileage, weight) {
    super(brand, model, isNew, color, year, mileage);
    this.weight = weight;
  }
}

Car.prototype.getCarInfo = function () {
  return `This car is ${this.brand} ${this.model} and it is ${
    this.year
  } year model. It is ${this.isNew ? "brand new" : "used"} and has a ${
    this.mileage
  } miles mileage.`;
};

Truck.prototype.getCarInfo = function () {
  return `This truck is ${this.brand} ${this.model} and it is ${
    this.year
  } year model. It is ${this.isNew ? "brand new" : "used"} and has a ${
    this.mileage
  } miles mileage. It can carry up to ${this.weight} kg load.`;
};

let car1 = new Car("Tesla", "Model 3", true, "white", 2023, 0);

let truck1 = new Truck("Tesla", "Cybertruck", true, "white", 2023, 0, 1000);

console.log(car1.getCarInfo());

console.log(truck1.getCarInfo());
