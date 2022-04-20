
console.log ("Exercise number 2: Strings");
//Boint A
console.log ("Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).");
var longstring = "real long string";
console.log ("The variable is:" + " " + longstring);
var longresult = longstring.toUpperCase();
console.log ("The result is:" + " " + longresult);
console.log ("------------------------------------");

//Point B
console.log ("Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).");
var secondlongstring = "second long string";
console.log ("The content of the variable is:" + " " + secondlongstring);
secondresult = secondlongstring.substring (0, 5);
console.log ("Its first five characters are:" + " " + secondresult);
console.log ("------------------------------------");


//Point C
console.log ("Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).");
var thirdlongstring = "third long string";
console.log ("The content of the variable is:" + " " + thirdlongstring);
thirdresult = thirdlongstring.substring (14, 17);
console.log ("Its last three characters are:" + " " + thirdresult);
console.log ("------------------------------------");

//Point D
console.log ("Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).");
var fourthlongstring = "fourth long string";
console.log ("The new string is:" + " " + fourthlongstring);
var firstparta = fourthlongstring.substring (0, 1);
var firstpartb = firstparta.toUpperCase();
//console.log (firstpartb)
var secondparta = fourthlongstring.substring (2,18);
var secondpartb = secondparta.toLowerCase();
//console.log (secondpartb)
fourthresult = firstpartb + secondpartb;
console.log ("The string with its first letter in uppercase is:" + " " + fourthresult);
console.log ("------------------------------------");

//Point E
console.log ("Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).");
var onespacestring = "one-space string";
console.log ("The string variable is:" + " " + onespacestring);
fifthresult = onespacestring.indexOf(" ");
console.log ("the position of the result is:" + " " + fifthresult);
console.log ("------------------------------------");

//Point F 
console.log ("Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).")
var longerwords = "longer words"
console.log ("Words without UpperCase are:" + " " + longerwords)

var word2 = longerwords.indexOf(" ")
//console.log (word2)
var upperworda1 = longerwords.substring(0,1)
var upperworda2 = upperworda1.toUpperCase()
//console.log (upperworda2)
var lowerworda1 = longerwords.substring(1,word2)
var lowerworda2 = lowerworda1.toLowerCase()
//console.log (lowerworda2)
var upperwordb1 = longerwords.substring(word2+1 ,(word2 +2))
var upperwordb2 = upperwordb1.toUpperCase()
//console.log (upperwordb2)
var lowerwordb1 = longerwords.substring((word2 + 2))
var lowerwordb2 = lowerwordb1.toLowerCase()
//console.log (lowerwordb2)
var sixthresult = upperworda2 + lowerworda2 + " " + upperwordb2 + lowerwordb2
console.log ("Words with UpperCase are:" + " " + sixthresult)


console.log ("------------------------------------");
console.log ("------------------------------------");
console.log ("------------------------------------");



