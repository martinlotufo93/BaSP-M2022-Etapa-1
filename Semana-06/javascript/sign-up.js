function checkname(){

    var elemento = document.getElementById("name");

    if(!/^([a-zA-Z]{3,})$/.exec(elemento.value)){

        elemento.style.backgroundColor='red';
        console.log("error");

    }else{
        
        elemento.style.backgroundColor='green';
        console.log("ok");

    }

}
function checklastname(){

    var elemento = document.getElementById("last-name");

    if(!/^([a-zA-Z]{3,})$/.exec(elemento.value)){

        elemento.style.backgroundColor='red';
        console.log("error");

    }else{
        
        elemento.style.backgroundColor='green';
        console.log("ok");

    }

}
function checkdni(){
    var elemento = document.getElementById("dni");

    if(!/^([0-9]{7,})$/.exec(elemento.value)){

        elemento.style.backgroundColor='red';
        console.log("error");

    }else{
        
        elemento.style.backgroundColor='green';
        console.log("ok");

    }

}