let marvel_heroes = [ "thor" , "ironman" ,"spiderman"];
const dc_heroes =["superman" , "flash" , " batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  // ye merge kr dega ak  array ke andr dusra aary aa gya isme 
//  o/p is [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', ' batman' ] ]

// for add both the array in a single array 
//  USE CONCATE

const all = marvel_heroes.concat(dc_heroes)
console.log(all);

// ...spread ka usekr skte hai like  ...marvel_heroes 
let allHero = [...marvel_heroes , ...dc_heroes]; // modern way to concatination
console.log(allHero); // combime both array like concate methid

//++++******Read About flat() ******++++++  
//******** for interview POV */

//+++++kisi bhi string ko array banana ho*******+

//  Array.from() ka usekrke kr skte hai

console.log(Array.from("hero"));
// ********* one more important 
//  Array.of() ka use krke hm kai sare variables ke data  ko array me convert kr sktehai