import {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from './firebase.js';

let signUp = document.getElementById("signUp");
let cd = document.getElementsByClassName('.cd');

signUp.addEventListener("submit", function (e) {
    e.preventDefault();
    let mail = e.target[1].value;
    let psd = e.target[2].value;
  
    
    createUserWithEmailAndPassword(auth, mail, psd)  
    .then((x)=>{
        if(x.user){
            alert("account created successfully");
            location.replace("login.html");
        }
    })

});
let login = document.getElementById("login");

login.addEventListener("submit",function(e){
    e.preventDefault();
    let mail = e.target[0].value;
    let psd = e.target[1].value;
    console.log(mail,psd);
    location.replace("home.html");
    // signInWithEmailAndPassword(auth, mail, psd)
    // .then((x)=>{
    //     if(x.user.accessToken){
    //         alert("login successfully");
    //         location.replace("home.html");
    //     }
    // })
    // .catch((err)=>{
    //     alert(err.message);
    // })
})


