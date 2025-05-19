import { auth, sendPasswordResetEmail } from "./firebase.js";


let forgot = document.getElementById("forgot");
forgot.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = e.target[0].value;
  // console.log(email);
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then((x) => {
        // Password reset email sent!
        // ..
        alert("Password reset email sent");
        location.replace("home.html");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(error.message);

      });

  } else {
    alert("Please enter your email");
  }
});
