function CheckMail(){
    element = document.getElementById("email");
    if(element.value == 'rose@radiumrocket.com'){
        document.getElementById('email').style.backgroundColor='green';
        document.getElementById("message-error-email").style.display="none";
    }else{
        document.getElementById('email').style.backgroundColor='red';
        document.getElementById("message-error-email").innerHTML="The email is not correct.";
        document.getElementById("message-error-email").style.display="block";
    }
}

function CheckPassword(){
    element = document.getElementById("password");
    if(element.value == 'BaSP2022'){
        document.getElementById('password').style.backgroundColor='green';
        document.getElementById("message-error-password").style.display="none";
    }else{
        document.getElementById('password').style.backgroundColor='red';
        document.getElementById("message-error-password").innerHTML="The password is not correct.";
        document.getElementById("message-error-password").style.display="block";
    }
}  

function login (){
    var elementemail = document.getElementById("email");
    var elementpassword = document.getElementById("password");
    if((elementemail.value == 'rose@radiumrocket.com') && (elementpassword.value == 'BaSP2022')){
        alert("Everything's fine" + " - The email entered is correct: " + elementemail.value + " The entered password is correct: " + elementpassword.value);
    }
    else if(elementemail.value != 'rose@radiumrocket.com'){
        alert("The email entered is not correct:");
    }else{
        alert("The entered password is not correct:");
    }
    return false;
}

/*function login (){
    var elementemail = document.getElementById("email");
    var elementpassword = document.getElementById("password");
    if((elementemail.value == 'rose@radiumrocket.com') && (elementpassword.value == 'BaSP2022')){
        alert("Everything's fine" + " - The email entered is correct: " + elementemail.value + " The entered password is correct: " + elementpassword.value);
    }
    else if(elementemail.value != 'rose@radiumrocket.com'){
        alert("The email entered is not correct:");
    }else(elementpassword.value != 'BaSP2022');{
        alert("The entered password is not correct:");
    }
    return false;
}*/ 

/*function CheckMail(){
    regex=/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    var elemento = document.getElementById("email");
    if(!regex.exec(elemento.value)){
        document.getElementById('email').style.backgroundColor='red';
        document.getElementById("message-error-email").innerHTML="Error";
        document.getElementById("message-error-email").style.display="block";
    }else{
        document.getElementById('email').style.backgroundColor='green';
        document.getElementById("message-error-email").style.display="none";

    }
}*/

/*function CheckPassword(){
    regex=/^([a-zA-Z0-9]{8,})$/;
    var elemento = document.getElementById("password");
    if(!regex.exec(elemento.value)){
        document.getElementById('password').style.backgroundColor='red';
        document.getElementById("message-error-password").innerHTML="Error";
        document.getElementById("message-error-password").style.display="block";
        }else{
        document.getElementById('password').style.backgroundColor='green';
        document.getElementById("message-error-password").style.display="none";
    }
}*/

/*    function login (){
        regexemail=/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
        var elementemail = document.getElementById("email");
        regexpassword=/^([a-zA-Z0-9]{8,})$/;
        var elementpassword = document.getElementById("password");
            if(regexemail.exec(elementemail.value) && regexpassword.exec(elementpassword.value)){
            alert("todo esta ok" + " - el email ingresado es correcto: " + elementemail.value + " el password ingresado es correcto: " + elementpassword.value);
            }
            else if(!regexemail.exec(elementemail.value)){
                CheckMail();
                alert("El correo no es valido");
            }else{
                CheckPassword();
                alert("La contraseña no cumple con los requisitos");
            }
            return false;
    } */     
