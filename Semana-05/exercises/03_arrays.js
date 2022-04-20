console.log ("Exercise number 3: Arrays");
//Point A
console.log ("Dado el siguiente array, mostrar por consola los meses 5 y 11 (utilizar console.log).");
console.log ("The array is: Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre");
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("Month number 5 is:" + " " + year[4]);
console.log("Month number 11 is:" + " " + year[10]);
console.log ("------------------------------------");

//Point B
console.log ("Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).");
var yearb = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var orderyear = yearb.sort();
console.log("The result of the alphabetically sorted array is:" + " " + orderyear);
console.log ("------------------------------------");

//Point C
console.log ("Agregar un elemento al principio y al final del array (utilizar unshift y push).");
var yearc = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
yearc.unshift("Arbol");
console.log ("The array with one more element at the beginning is:" + " " + yearc);
var yeard = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
yeard.push("Gallo");
console.log ("The array with one more element at the end is:" + " " + yeard);
console.log ("------------------------------------");

//Point D
console.log ("Quitar un elemento del principio y del final del array (utilizar shift y pop).");
var yeare = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
yeare.shift();
console.log ("The array without its first element is:" + " " + yeare);
var yearf = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
yearf.pop();
console.log ("The array without its last element is:" + " " + yearf);
console.log ("------------------------------------");

//Point E
console.log ("Invertir el orden del array (utilizar reverse).");
var yearg = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
yearg.reverse();
console.log ("The result of the inverted array is:" + " " + yearg);
console.log ("------------------------------------");

//Point F
console.log ("Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).");
var yearh = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The result of the dash-separated array is:" + " " + yearh.join('-'));
console.log ("------------------------------------");

//Point G
console.log ("Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).");
var yeari = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var shortyear = yeari.slice(4,11);
console.log ("The result of the array is:" + " " + shortyear);
console.log ("------------------------------------");
console.log ("------------------------------------");
console.log ("------------------------------------");
