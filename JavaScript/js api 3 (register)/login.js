const btn = document.querySelector(".main_appointment_form_button");
const email = document.querySelector(".main_appointment_form_email");
const password = document.querySelector(".main_appointment_form_date");
console.log(btn);
btn.addEventListener("click", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let isTrue = false;
  users.forEach((user) => {
    if (user.email == email.value && user.password == password.value) {
      isTrue = true;
    }
  });
  if (isTrue) {
    alert("Вы успешно вошли");
  } else {
    alert("Неверный логин или пароль");
  }
});
