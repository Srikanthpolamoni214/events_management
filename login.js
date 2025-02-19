import {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from './firebase.js';
 
let login = document.getElementById("login");

login.addEventListener("submit",function(e){
    e.preventDefault();
    let mail = e.target[0].value;
    let psd = e.target[1].value;
    
    signInWithEmailAndPassword(auth, mail, psd)
    .then((x)=>{
        if(x.user.accessToken){
            alert("login successfully");
            location.replace("home.html");
        }
    })
    .catch((err)=>{
        alert(err.message);
    })
})
