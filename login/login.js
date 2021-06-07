let loginForm = document.querySelectorAll('.login-form');
    loginForm = document.querySelector(".login-form").style.background = "#none";
    loginForm = document.querySelector('.login-form').style.display = "none";

let login = document.querySelector('.login').addEventListener('click', () =>{
     document.querySelector(".signup-form").style.display = "none";
     document.querySelector(".login-form").style.display = "block";
    document.querySelector(".signup").style.background = "rgb(223, 223, 223)";
    document.querySelector(".login").style.background = "#fff";

});
let signup = document.querySelector('.signup').addEventListener('click', () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
   document.querySelector(".login").style.background = "rgb(223, 223, 223)";
   document.querySelector(".signup").style.background = "#fff";
})

