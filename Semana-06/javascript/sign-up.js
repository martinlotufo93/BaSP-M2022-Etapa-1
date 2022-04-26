function validation(input,regex){

    console.log(input);

    var elemento = document.getElementById(input);

    if(!regex.exec(elemento.value)){

        elemento.style.backgroundColor='red';

        console.log("error");

        return false;

    }else{

        elemento.style.backgroundColor='green';
        
        console.log("ok");

        return true;

    }

}

function checkname(){

    validation("name",/^([a-zA-Z]{3,})$/);

}
function checklastname(){

    validation("last-name",/^([a-zA-Z]{3,})$/);

}
function checkdni(){

    validation("dni",/^([0-9]{7,})$/);

}
function checktel(){

    validation("phone",/^([0-9]{10,})$/);

}
function checkweek(){

    validation("week",/^([0-9]{2}[/][0-9]{2}[/][0-9]{4})$/);

}
function checkpassword(){

    validation("password",/^([a-zA-Z0-9]{8,})$/);


}
function checklocation(){

    validation("location",/^([a-zA-Z0-9]{3,})$/);


}
function checkpostalcode(){

    validation("postal-code",/^([0-9]{4,5})$/);


}
function checkemail(){

    validation("email",/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/);


}
function checkaddress(){

    validation("address",/^([a-zA-Z0-9 ]{5,})$/);

}

function checkrepassword(){

    var password = document.getElementById("password");
    var repassword = document.getElementById("re-password");
    if(password.value == repassword.value){
        repassword.style.backgroundColor='';
        console.log ("coinciden");
    }
        else{
        repassword.style.backgroundColor='red';
        console.log ("no coinciden");
    }

}

function formstatus(){

}
