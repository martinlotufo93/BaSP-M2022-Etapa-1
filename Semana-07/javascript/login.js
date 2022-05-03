var inputemail = document.getElementById("email");
var inputpassword = document.getElementById("password");

function checkemail(){

    var regex = /^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

    if(!regex.exec(inputemail.value)){

        inputemail.style.backgroundColor='red';

        document.getElementById("message-error-email").innerHTML="The email it isn't correct";
        document.getElementById("message-error-email").style.display="block";
        
        console.log("error");

        return false;

    }else{
        
        inputemail.style.backgroundColor='green';
        document.getElementById("message-error-email").style.display="none";

        console.log("ok");

        return true;

    }

}

function checkpassword(){

    if (inputpassword.value.length>=8){
        for (i=0;i<inputpassword.value.length;i++){
            if ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(inputpassword.value.charAt(i),0) == -1){
                inputpassword.style.backgroundColor='red';
                document.getElementById("error-name").innerHTML="The password it isn't correct";
                document.getElementById("error-name").style.display="block";
                console.log("error");
                return false;
            }
        }

        inputpassword.style.backgroundColor='green';
        document.getElementById("message-error-password").style.display="none";
        console.log("ok");
        return true;

    }else{
        inputpassword.style.backgroundColor='red';
        document.getElementById("message-error-password").innerHTML="caracteres insuficientes 3 o mas";
        document.getElementById("message-error-password").style.display="block";
        console.log("error");
        return false;
    }

}

function login () {
if(checkpassword() == false){
    alert("The password i'ts wrong")
}

else if(checkemail() == false){
    alert("The E-mail i'ts wrong")
}

else {
    var password = "Password: " + document.getElementById("password").value;
    var email = "Email: " + document.getElementById("email").value;



    const baseUrl = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${inputemail.value}&password=${inputpassword.value}`
    
    fetch(baseUrl)
        .then(response =>
            response.json())
        .then(datarecived =>
            okcase(datarecived))
        .catch((error) => {
            errorcase(error)
        });



    alert("todo esta ok" + " - Los datos ingresados son: " + password + " | " + email );
}
return false;
}

function okcase (datarecived){
    console.log (datarecived);
    if (datarecived.success === true){
        alert (`Todo bien señor ${datarecived.msg}`);
    }
    else {
        errorcase(datarecived.msg);
    } 
}

function errorcase (error) {
    alert (`Todo mal señor ${error}`);
}

/*function login (){
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
}*/  



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
