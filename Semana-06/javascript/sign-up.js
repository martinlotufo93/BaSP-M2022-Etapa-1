
function validation(input,regex){

    console.log(input);

    var elemento = document.getElementById(input);

    if(!regex.exec(elemento.value)){

        elemento.style.backgroundColor='red';

        console.log("error");

    }else{
        
        console.log("ok");

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





