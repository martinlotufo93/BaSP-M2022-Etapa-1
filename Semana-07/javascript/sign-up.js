function validation(input,regex,message){

    console.log(input);

    var elemento = document.getElementById(input);

    if(!regex.exec(elemento.value)){

        elemento.style.backgroundColor='red';

        document.getElementById("error-" + input).innerHTML=message;
        document.getElementById("error-" + input).style.display="block";
        
        console.log("error");

        return false;

    }else{
        
        elemento.style.backgroundColor='green';
        document.getElementById("error-" + input).style.display="none";

        console.log("ok");

        return true;

    }

}

function hidemessage(input){

    var elemento = document.getElementById("error-" + input.id);
    document.getElementById(input.id).style.backgroundColor='white';
    elemento.innerHTML="";
    elemento.style.display="none";

}

function checkname(){

    return validation("name",/^([a-zA-Z]{3,})$/,"The name it isn't correct");

}
function checklastname(){

    return validation("last-name",/^([a-zA-Z]{3,})$/,"The lastname it isn't correct");

}
function checkdni(){

    return validation("dni",/^([0-9]{7,})$/,"The DNI it isn't correct");

}
function checktel(){

    return validation("phone",/^([0-9]{10,})$/,"The Phone it isn't correct");

}
function checkweek(){

    return validation("week",/^([0-9]{2}[/][0-9]{2}[/][0-9]{4})$/,"The Date it isn't correct");

}
function checkpassword(){

    return validation("password",/^([a-zA-Z0-9]{8,})$/,"The password it isn't correct");


}
function checklocation(){

    return validation("location",/^([a-zA-Z0-9]{3,})$/,"The Location it isn't correct");


}
function checkpostalcode(){

    return validation("postal-code",/^([0-9]{4,5})$/,"The Postal code it isn't correct");


}
function checkemail(){

    return validation("email",/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,"The email it isn't correct");


}
function checkaddress(){

    return validation("address",/^([a-zA-Z0-9 ]{5,})$/,"The address it isn't correct");


}

function checkrepassword(){

    var password = document.getElementById("password");
    var repassword = document.getElementById("re-password");
    if(password.value == repassword.value){
        repassword.style.backgroundColor='';
        document.getElementById("error-re-password").style.display="none";
        console.log ("coinciden");
        return true;
    }
        else{
        repassword.style.backgroundColor='red';
        document.getElementById("error-re-password").innerHTML="The passwords have to match";
        document.getElementById("error-re-password").style.display="block";
        console.log ("no coinciden");
        return false;
    }

}

function formstatus(){
    if (checkname() == false){
        alert("The name i'ts wrong")
    }
    else if(checklastname() == false){
        alert("The last name i'ts wrong")
    }
    else if(checkdni() == false){
        alert("The dni i'ts wrong")
    }
    else if(checktel() == false){
        alert("The phone number i'ts wrong")
    }
    else if(checkweek() == false){
        alert("The date i'ts wrong")
    }
    else if(checkpassword() == false){
        alert("The password i'ts wrong")
    }
    else if(checklocation() == false){
        alert("The location i'ts wrong")
    }
    else if(checkpostalcode() == false){
        alert("The postal code i'ts wrong")
    }
    else if(checkemail() == false){
        alert("The E-mail i'ts wrong")
    }
    else if(checkaddress() == false){
        alert("The Address i'ts wrong")
    }
    else if(checkrepassword() == false){
        alert("The Repeat Password i'ts wrong")
    }

    else {

        var name = "Name: " + document.getElementById("name").value;
        var lastname = "Last name: " + document.getElementById("last-name").value;
        var dni = "D.N.I.: " + document.getElementById("dni").value;
        var phone = "Phone Number: " + document.getElementById("phone").value;
        var password = "Password: " + document.getElementById("password").value;
        var location = "Location: " + document.getElementById("location").value;
        var postalcode = "Postal Code: " + document.getElementById("postal-code").value;
        var email = "Email: " + document.getElementById("email").value;
        var week = "Birth Date: " + document.getElementById("week").value;
        var address = "Address: " + document.getElementById("address").value;
        alert("todo esta ok" + " - Los datos ingresados son: " + name + " | " + lastname + " | " + dni + " | " + phone + " | " + password + " | " + location + " | " + postalcode + " | " + email + " | " + week + " | " + address);
    }


    return false;
    
 

}
