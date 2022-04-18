//Point A
var randomnum =  Math.random()
console.log (randomnum)
if (randomnum >= 0.5){
    console.log("Number greater than 0.5")
}else{
    console.log("Number lower than 0.5")
}

//Point B
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
}          
