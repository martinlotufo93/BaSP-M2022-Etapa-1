
    function CheckMail(){
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
        }

    function CheckPassword(){
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
        }

    function login (){
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
    }       
