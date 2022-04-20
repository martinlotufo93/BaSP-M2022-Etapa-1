console.log ("Exercise number 4: IF/ELSE");
//Point A
console.log ("Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.");
var randomnum =  Math.random();
console.log ("The random number is:" + " " + randomnum);
if (randomnum >= 0.5){
    console.log("Number greater than 0.5")
}else{
    console.log("Number lower than 0.5")
};
console.log ("------------------------------------");

//Point B
console.log ("Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:");
var numentero = Math.floor(Math.random()*100);
console.log (numentero);
if (numentero < 2){
    console.log("Is a Baby");
}else if(numentero >= 2 && numentero <= 12){
    console.log("Is a Child");
}else if(numentero >= 13 && numentero <= 19){
    console.log("Is a Teenager");
}else if(numentero >= 20 && numentero <= 30){
    console.log("Is a Young person");
}else if(numentero >= 31 && numentero <= 60){
    console.log("Is an adult");
}else if(numentero >= 61 && numentero <= 75){
    console.log("Is an older adult");
}else if(numentero >= 76){
    console.log("Is an old man");
};     
console.log ("------------------------------------");
console.log ("------------------------------------");
console.log ("------------------------------------");     
