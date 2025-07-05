// *************+++++++++++STRING+++++++++++********
var a = "CP"
var b =  10001856

console.log(a + b);   //perfectly correct butt older version 

// let's see a new way thatis very much readable and useful 
// ``  yes `` this is new way to concatinate and explain with clearity 

console.log(`Hello myname is ${a} and my roll number is  ${b}`);

//  ****++++++some methods of string +++++++************
let name = "CHANdra PrakaSh"
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.charAt(2)); // A
console.log(name.indexOf('A')); // 2

//  somw e more methods 
//  trim , replace , substring , concat

console.log(name.trim()); // white spaces ko remove krne ka kam krtahai
console.log(name.replace("a" , "Aa"));

// we can convert string into array 
// using .split()

let STR = "Chandra Prakash Rai"
console.log(STR.split(" "));  // [ 'Chandra', 'Prakash', 'Rai' ]
// we can split on the basis of white spaces or on the basis of - like like


