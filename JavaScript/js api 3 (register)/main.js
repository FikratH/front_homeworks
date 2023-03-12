const btn = document.querySelector(".main_appointment_form_button");
const inputs = document.querySelectorAll("input");
const confirm = document.querySelector(".main_appointment_form_phone");
const password = document.querySelector(".main_appointment_form_date");
const email = document.querySelector(".main_appointment_form_email");
const name = document.querySelector(".main_appointment_form_name");
const terms = document.querySelector(".main_appointment_form_checkboxdiv_cb");
const signIn = document.querySelector(".sign_in");
let isTrue;
let id = 1;
let users = [];
console.log(btn);
console.log(inputs);
btn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (
      input.value != "" &&
      confirm.value != "" &&
      password.value != "" &&
      terms.checked == true
    ) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  });
  console.log(isTrue);
  if (isTrue) {
    alert("Ваша заявка принята");
    let obj = {
      id: ++id,
      name: name.value,
      email: email.value,
      password: password.value,
      isLogged: false,
    };

    users.push(obj);
    localStorage.setItem(`users`, JSON.stringify(users));
    // alert("Ваша заявка отправлена");
    // fetch("./data.json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(obj),
    // }).then((response) => {
    //   console.log(response);
    // });
  } else {
    alert("Заполните все поля");
  }
});

signIn.addEventListener("click", () => {
  window.location.href =
    "http://localhost:5500/front_tasks/JavaScript/js%20api%203%20(register)/login.html";
});
