
console.log ("Exercise number 6: Functions");
//Point A
console.log ("Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.");
console.log ("The numbers chosen for this exercise were 32 and 33");
function add(number1, number2){
    console.log (number1 + number2);
    
};
var firstadd = add(32, 33);
console.log ("------------------------------------");


//Point B
console.log ("A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.");
console.log ("The characters entered are: grillo and 22");
function add2 (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        console.log ("One of the characters entered is not a number");
        return console.log(NaN);
    }else {
        return number1 + number2;
    };
}
var secondadd = add2("grillo, 22");
console.log ("------------------------------------");


//Point C
console.log ("Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.");
console.log ("The chosen number was: 18.5");
function itsornot (number1){
    if(Number.isInteger(number1)) {
        return true;
    }else {
        return false;
    }
}
var xnumber = itsornot (18.5)
console.log (xnumber)
console.log ("------------------------------------");



//Point D
console.log ("A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).");
console.log ("The chosen parameters are: 22.2 and 22");
function add3 (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        console.log ("One of those parameters is not a number.");
        return NaN;
    }else if(itsornot(number1) == false || itsornot(number2) == false){
        console.log("One of two its not integer");
        return Math.round(add(number1, number2));
    }else{
        return add(number1, number2);
    }
}
var secondadd = add3("22.2", "22");
console.log ("------------------------------------");


//Point E
console.log ("Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.");
console.log ("The chosen parameters are: 22 and 28.5");
function add4 (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        console.log ("One of those parameters is not a number.");
        return false;
    }else if(itsornot(number1) == false || itsornot(number2) == false){
        console.log("One of two its not integer");
        return false;
    }else{
        return true;
    }
}

function add5(number1, number2){
    if (add4(number1, number2) == true){
        return add(number1, number2);
    }
}

var point6 = add5("22","28.5");







