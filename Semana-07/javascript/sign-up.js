/*function hidemessage(input){

    var elemento = document.getElementById("error-" + input.id);
    document.getElementById(input.id).style.backgroundColor='white';
    elemento.innerHTML="";
    elemento.style.display="none";

}*/

function checkname(){

    var elemento = document.getElementById("name");
    if (elemento.value.length>=3){
        for (i=0;i<elemento.value.length;i++){
            if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-name").innerHTML="The name can only contain letters.";
                document.getElementById("error-name").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-name").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-name").innerHTML="Insufficient Characters.";
        document.getElementById("error-name").style.display="block";
        console.log("error");
        return false;
    }

}

function checklastname(){

    var elemento = document.getElementById("last-name");
    if (elemento.value.length>=3){
        for (i=0;i<elemento.value.length;i++){
            if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-last-name").innerHTML="The name can only contain letters.";
                document.getElementById("error-last-name").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-last-name").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-last-name").innerHTML="Insufficient Characters.";
        document.getElementById("error-last-name").style.display="block";
        console.log("error");
        return false;
    }

}

function checkdni(){

    var elemento = document.getElementById("dni");
    if (elemento.value.length>=7){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-dni").innerHTML="The DNI can only contain numbers.";
                document.getElementById("error-dni").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-name").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-dni").innerHTML="Insufficient Characters.";
        document.getElementById("error-dni").style.display="block";
        console.log("error");
        return false;
    }

}

function checkweek(){

    var elemento = document.getElementById("week");
    if (elemento.value.length>=10){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789/".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-week").innerHTML="The date it is not correct.";
                document.getElementById("error-week").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-week").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-week").innerHTML="The date it isn't correct.";
        document.getElementById("error-week").style.display="block";
        console.log("error");
        return false;
    }

}

function checktel(){

    var elemento = document.getElementById("phone");
    if (elemento.value.length>=10){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-phone").innerHTML="The phone you entered is not correct.";
                document.getElementById("error-phone").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-name").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-phone").innerHTML="The phone can only contain numbers.";
        document.getElementById("error-phone").style.display="block";
        console.log("error");
        return false;
    }

}

function checkaddress(){

    var elemento = document.getElementById("address");
    if (elemento.value.length>=5){
        for (i=0;i<elemento.value.length;i++){
            if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-address").innerHTML="The address it is not correct.";
                document.getElementById("error-address").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-address").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-address").innerHTML="The address it is not correct.";
        document.getElementById("error-address").style.display="block";
        console.log("error");
        return false;
    }

}

function checklocation(){

    var elemento = document.getElementById("location");
    if (elemento.value.length>=3){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-location").innerHTML="The location it is not correct.";
                document.getElementById("error-location").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-location").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-location").innerHTML="The location it is not correct.";
        document.getElementById("error-location").style.display="block";
        console.log("error");
        return false;
    }

}

function checkpostalcode(){

    var elemento = document.getElementById("postal-code");
    if (elemento.value.length>=3 && elemento.value.length<=4){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-postal-code").innerHTML="The postal code it is not correct.";
                document.getElementById("error-postal-code").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-postal-code").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-postal-code").innerHTML="The postal code it is not correct.";
        document.getElementById("error-postal-code").style.display="block";
        console.log("error");
        return false;
    }

}

function checkemail(){

    var regex = /^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    var elemento = document.getElementById("email");

    if(!regex.exec(elemento.value)){

        elemento.style.backgroundColor='red';
        document.getElementById("error-email").innerHTML="The e-mail it is not correct.";
        document.getElementById("error-email").style.display="block";

        console.log("error");

        return false;

    }else{
        
        elemento.style.backgroundColor='green';

        console.log("ok");

        return true;

    }

}


function checkpassword(){

    var elemento = document.getElementById("password");
    if (elemento.value.length>=8){
        for (i=0;i<elemento.value.length;i++){
            if ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(elemento.value.charAt(i),0) == -1){
                elemento.style.backgroundColor='red';
                document.getElementById("error-password").innerHTML="The password it is not correct.";
                document.getElementById("error-password").style.display="block";
                console.log("error");
                return false;
            }
        }

        elemento.style.backgroundColor='green';
        document.getElementById("error-password").style.display="none";
        console.log("ok");
        return true;

    }else{
        elemento.style.backgroundColor='red';
        document.getElementById("error-password").innerHTML="The password it is not correct.";
        document.getElementById("error-password").style.display="block";
        console.log("error");
        return false;
    }

}

function checkrepassword(){

    var password = document.getElementById("password");
    var repassword = document.getElementById("re-password");
    if(password.value == repassword.value){
        repassword.style.backgroundColor='green';
        document.getElementById("error-re-password").style.display="none";
        console.log ("coinciden");
        return true;
    }
        else{
        repassword.style.backgroundColor='red';
        document.getElementById("error-re-password").innerHTML="The passwords do not match.";
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

        var name = document.getElementById("name").value;
        var lastname = document.getElementById("last-name").value;
        var dni = document.getElementById("dni").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var location = document.getElementById("location").value;
        var postalcode = document.getElementById("postal-code").value;
        var email = document.getElementById("email").value;
        var dob = document.getElementById("week").value;
        var address = document.getElementById("address").value;
        //alert("todo esta ok" + " - Los datos ingresados son: " + name + " | " + lastname + " | " + dni + " | " + phone + " | " + password + " | " + location + " | " + postalcode + " | " + email + " | " + week + " | " + address);

      

        const baseUrl = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${name}&lastName=${lastname}&dni=${dni}&phone=${phone}&address=${address}&dob=${dob}&city=${location}&zip=${postalcode}&email=${email}&password=${password}`
    
    fetch(baseUrl)
        .then(response =>
            response.json())
        .then(datarecived =>
            okcase(datarecived))
        .catch((error) => {
            errorcase(error)
        });



    alert("Everything is fine." + " - The data entered are: " + name + " | " + lastname + " | " + dni + " | " + phone + " | " + password + " | " + location + " | " + postalcode + " | " + email + " | " + dob + " | " + address);

    }
    return false;
    
}



function okcase (datarecived){
    console.log (datarecived);
    if (datarecived.success == true){
        alert (`Everything is fine: ${datarecived.msg}`);
        localStorage.setItem("address", datarecived.data.address);
        localStorage.setItem("city", datarecived.data.city);
        localStorage.setItem("dni", datarecived.data.dni);
        localStorage.setItem("dob", datarecived.data.dob);
        localStorage.setItem("email", datarecived.data.email);
        localStorage.setItem("id", datarecived.data.id);
        localStorage.setItem("lastName", datarecived.data.lastName);
        localStorage.setItem("name", datarecived.data.name);
        localStorage.setItem("password", datarecived.data.password);
        localStorage.setItem("phone", datarecived.data.phone);
        localStorage.setItem("zip", datarecived.data.zip);
    }
    else {
        errorcase(datarecived);
    } 
}

function errorcase (error) {
    var msg = `Error`;
    for (i=0;i<error.errors.length;i++){
        msg = msg + " | " + error.errors[i].msg;
    }

    alert(msg);


}


window.addEventListener("load", function () {

    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("last-name").value = localStorage.getItem("lastName");
    document.getElementById("dni").value = localStorage.getItem("dni");
    document.getElementById("phone").value = localStorage.getItem("phone");
    document.getElementById("password").value = localStorage.getItem("password");
    document.getElementById("location").value = localStorage.getItem("city");
    document.getElementById("postal-code").value = localStorage.getItem("zip");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("week").value = localStorage.getItem("dob");
    document.getElementById("address").value = localStorage.getItem("address");

});



/*function checklastname(){


    
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


}*/


