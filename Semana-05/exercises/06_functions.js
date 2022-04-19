//Point A
function add(number1, number2){
    console.log (number1 + number2);
    
}
var firstadd = add(32, 33);



//Point B
function add2 (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        return console.log (NaN);
    }else {
        return number1 + number2;
    }
}
var secondadd = add2("grillo, 22");



//Point C
function itsornot (number1){
    if(Number.isInteger(number1)) {
        return true;
    }else {
        return false;
    }
}
var xnumber = itsornot (18)
console.log (xnumber)



//Point D
function add4 (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        console.log (isNaN);
    }else{
        console.log (number1 + number2);
    }
    if (Number.isInteger(number1) || Number.isInteger(number2)) {
        console.log (number1 + number2);
    }else {
        console.log ("The number is not integer" + Math.round(number1) + Math.round(number2));
    }

}
var numdd = add4 (6, 7)
console.log (numdd)



guiones para separar




