


// function toggleResetPswd(e){
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle() // display:block or none
//     $('#logreg-forms .form-reset').toggle() // display:block or none
// }

// function toggleSignUp(e){
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle(); // display:block or none
//     $('#logreg-forms .form-signup').toggle(); // display:block or none
// }

// $(()=>{
//     // Login Register Form
//     $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
//     $('#logreg-forms #cancel_reset').click(toggleResetPswd);
//     $('#logreg-forms #btn-signup').click(toggleSignUp);
//     $('#logreg-forms #cancel_signup').click(toggleSignUp);
// })

// function signIn(email, password){
//     return{
//         email:email,
//         password:password
//     }
// }

// var x = signIn("eman@gmail.com", "331980134")

// $(".btn btn-success btn-block").click(function(){
    
//     if(($('#inputEmail').val() !== x.email) || ($('#inputPassword').val() !== x.password)){
//         alert('wrong email or password');
//     }
//     else{ 
//         $("#maindiv").css("display", "block");
// }
// })

function signin(){

    var username = "eman"
    var password = "331980134"
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
   
    if( (Username === username) && (Password===password)){
        alert("welcome " + username + " you have been logged in successfully")
    $("#firstdiv").hide()
     $("body").css("background-image","url(ima/iii.png)")
 }
    else{
        alert("sorry we can't find your username or password!!")
    }
}
