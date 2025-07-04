let score = 33;
console.log(typeof score); // number 

let marks = "45" // this is in string data type 
console.log(typeof marks);

let valueInNumber = Number(marks) // Number change the string here in number datatype
console.log(valueInNumber);
console.log(typeof valueInNumber);  // number

let scoreInString = String(score);  // String convert number into string data type
console.log(typeof scoreInString);  // ... string as output :/ :/

//  okay means if we convert "33" into Number it gives number data type 
// and if we print that converted number then it give 33 as o/p

//  But what if we convert "33abc" string into number 
// Do it by youself (DIBY)
//  it give NaN as o/p 
// means Not a Number 
//  because after conversion from string "33abc" 
// it convert into 33abc which is definitely not a number 
//  -------- Let's see this -----------

let cp = "44abc"
console.log(typeof cp);
console.log(cp);

let cpInNumber = Number(cp);
console.log(typeof cpInNumber); // gives number 

console.log(cpInNumber);  // NaN

let abc = null
console.log(typeof abc);
console.log( abc);

let abcd = undefined
console.log(typeof abcd);
console.log( abcd);


// "" => false 
// "cp" => true 


// ****************** OPERATIONS**************

let a=3

let nega= -a;
console.log(nega);

//***************  just some important practice************* */

let str1 = "hii"
let str2 = "  hellooo"

console.log(str1+str2);

console.log("1" +2);  // 12
console.log(1 +"2");  //12
console.log("1" +"2"); //12 
console.log("1" +2 + 2); // 122
console.log(1+2 + "2");  //32






