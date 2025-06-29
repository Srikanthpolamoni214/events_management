import {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from './firebase.js';
 
let login = document.getElementById("login");

login.addEventListener("submit",function(e){
    e.preventDefault();
    let mail = e.target[0].value;
    let psd = e.target[1].value;
    
    signInWithEmailAndPassword(auth, mail, psd)
    .then((x)=>{
        if(x.user.accessToken){
            fetch("https://events-management-1.onrender.com")
            .then(response =>
                {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error("Network response was not ok");
                }   

            )
            .then(data =>
                {
                    console.log(data);
                    const user = data.data.find(item => item.email === mail && item.password === psd);




if (user) {
    localStorage.setItem("role", user.role);
    localStorage.setItem("email", user.email);
    alert("Login successfully");
    if (user.role === "Organizer") {
        location.replace("./organizer.html");
    } else if (user.role === "User") {
        location.replace("./index.html");
    }
} else {
    alert("Invalid email or password");
}

                



                    }
            )
            .catch(error =>
                {
                    console.error('There has been a problem with your fetch operation:', error);
                    }
            );
        }
    })
    .catch((err)=>{
        alert(err.message);
    })
})
