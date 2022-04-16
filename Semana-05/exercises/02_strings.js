
//Boint A
var longstring = "real long string"
console.log (longstring)
var longresult = longstring.toUpperCase()
console.log (longresult)

//Point B
var secondlongstring = "second long string"
console.log (secondlongstring)
secondresult = secondlongstring.substring (0, 5)
console.log (secondresult)

//Point C
var thirdlongstring = "third long string"
console.log (thirdlongstring)
thirdresult = thirdlongstring.substring (14, 17)
console.log (thirdresult)

//Point D
var fourthlongstring = "fourth long string"
console.log (fourthlongstring)
var firstparta = fourthlongstring.substring (0, 1)
var firstpartb = firstparta.toUpperCase()
//console.log (firstpartb)
var secondparta = fourthlongstring.substring (2,18)
var secondpartb = secondparta.toLowerCase()
//console.log (secondpartb)
fourthresult = firstpartb + secondpartb
console.log (fourthresult)

//Point E
var onespacestring = "one-space string"
console.log (onespacestring)
fifthresult = onespacestring.indexOf(" ")
console.log ("the position of the result is:" + " " + fifthresult)

//Point F 
var longerwords = "longer words"
console.log (longerwords)
var word1 = longerwords.indexOf("l")
//console.log (word1)
var word2 = longerwords.indexOf("w")
//console.log (word2)
var upperworda1 = longerwords.substring(0,1)
var upperworda2 = upperworda1.toUpperCase()
//console.log (upperworda2)
var lowerworda1 = longerwords.substring(1,6)
var lowerworda2 = lowerworda1.toLowerCase()
//console.log (lowerworda2)
var upperwordb1 = longerwords.substring(7,8)
var upperwordb2 = upperwordb1.toUpperCase()
//console.log (upperwordb2)
var lowerwordb1 = longerwords.substring(8,12)
var lowerwordb2 = lowerwordb1.toLowerCase()
//console.log (lowerwordb2)
var sixthresult = upperworda2 + lowerworda2 + " " + upperwordb2 + lowerwordb2
console.log (sixthresult)



