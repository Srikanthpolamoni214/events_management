// import {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "./firebase.js";

// let signUp = document.getElementById("signUp");
// let cd = document.getElementsByClassName(".cd");

// signUp.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let userName = e.target[0].value;
//   let mail = e.target[1].value;
//   let psd = e.target[2].value;
//   let rol = e.target[3].value;


//   createUserWithEmailAndPassword(auth, mail, psd ).then((x) => {
    
//   fetch("http://localhost:3000", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: userName,
//       email: mail,
//       password: psd,
//       role: rol,
//     }),
//   })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Network response was not ok");
//   }
//   )
//   .then((data) => {
//     console.log(data);
    
//     if (data.message === "Data received") {
//       // Account created successfully
//       // You can redirect the user or show a success message

//       alert("Account created successfully")
//       location.replace("./login.html");
//     }
//     else {
//       alert("Account already exists");
//     }
//   }

//   )
//   .catch((error) => {
//     console.error("Error:", error);
//     });
// ;


//   });





// });



//chatgpt
import {
  auth,
  createUserWithEmailAndPassword,
} from "./firebase.js";

let signUp = document.getElementById("signUp");

signUp.addEventListener("submit", function (e) {
  e.preventDefault();

  let userName = e.target[0].value;
  let mail = e.target[1].value;
  let psd = e.target[2].value;
  let rol = e.target[3].value;

  console.log(userName, mail, psd, rol);

  // Create Firebase user
  createUserWithEmailAndPassword(auth, mail, psd)
    .then((x) => {
      if (x.user) {
        // Store extra user data in backend
        return fetch("https://events-management-voe0.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: mail,
            password: psd,
            role: rol,
          }),
        });
      }
    })
    .then((response) => {
      if (response.ok) {
        console.log("User created");
        }

      if (!response.ok) {
        throw new Error("Backend response not OK");
      }
      return response.json();
      console.log(response.json())
    })
    .then((data) => {
      console.log(data)
      if (data.message ) {
        alert(data.message);
        login();
      } else {
        alert("Account already exists in backend");
      }
    })
    .catch((error) => {
      // Specific Firebase error handling
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please log in.");
      } else {
        alert("Error: " + error.message);
      }
      console.error("Error:", error.code || "", error.message);
    });
});

function login() {
  location.replace("./login.html");
}
