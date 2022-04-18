//Point A
var firstarray = ["montaña", "bosque", "lago", "arbol", "cielo"]

for (i=0; i< firstarray.length; i++){
    console.log (firstarray[i]);
}

//Point B
var secondarray = ["verde", "amarillo", "azul", "celeste", "naranja"]

for (i=0; i< secondarray.length; i++){
    console.log (secondarray[i].substring(0,1).toUpperCase() + secondarray[i].substring(1));
}

//Point C
var sentence = [];
for (i= 0 ; i < 5; i++){
    sentence = sentence + firstarray[i] + " ";
}
console.log (sentence);

//Point D
var emptyarray = []
for (i= 0 ; i < 10; i++){
    emptyarray = emptyarray + [i]
}
console.log (emptyarray)
