const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

let emailAddress = "raymond.afrani@gmail.com";
let passcode = "12345678";

loginBtn.addEventListener("click", () => {
  if (email.value === emailAddress && password.value === passcode) {
    window.location.href = "index2.html";
  } else if (email.value === "" && password.value === "") {
    alert("Input your credentials first");
  } else {
    alert("Incorrect credentials. Please try again");
  }
});
