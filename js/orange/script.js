function validate() {
  let validMail =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  var emailinput = document.getElementById("emails").value;
  if (emailinput.match(validMail)) {
    document.getElementById("emailmessage").textContent = "valid email";
  } else {
    document.getElementById("emailmessage").textContent = "email not valid ";
  }
  var number = document.getElementById("phonenum");
  if (number.value.length <= 0) {
    document.getElementById("phonemessage").textContent =
      "The mobile field is required.";
  } else if (number.value.length != 10) {
    document.getElementById("phonemessage").textContent =
      "The mobile must be 10 characters.";
  } else if ((number.value.length = 10)) {
    document.getElementById("phonemessage").textContent =
      "phone number is valid";
  }
  var password = document.getElementById("pass").value;
  if (password.length < 6 || password.length > 18) {
    document.getElementById("passwordmessage").textContent =
      "The Password should be between 6-18 characters.";
  } else if (password.length > 6 && password.length < 18) {
    document.getElementById("passwordmessage").textContent =
      "password is valid";
  }
  let number2 = document.getElementById("phonenum").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  if (
    emailinput.match(validMail) &&
    number.value.length == 10 &&
    password.length > 6 &&
    password.length < 18
  ) {
    formData.push({ email: emailinput, pass: password, num: number2 });
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  let tx = false;
  let ind = null;
  formData.forEach((element, arrayIndex) => {
    if (element.email == emailinput) {
      tx = true;
      ind = arrayIndex;
    }
  });

  let gt = formData[ind].pass;
  let ml = formData[ind].email;
  if (tx && gt == password) {
    sessionStorage.email = ml;
    sessionStorage.pass = gt;
    e.preventDefault();
  }
  console.log(gt);
}
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#pass");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});
