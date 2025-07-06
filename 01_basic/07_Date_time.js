// DATES 
// date ak object hota hai js me

let date = new Date();
console.log(date);  //ye date btayega jo aaj hai 
console.log(date.toString()); // ye btayega ki aaj kaun sa din hai like sunday , monday etc 
console.log(date.toLocaleString()); // date with  / like we write in copy

// agar hm khud kisi date pe kaun sa din hai use dekhna  chahte hai 
const myDate=new Date(2025 , 6, 6) // js me month 0  se start hote hai
console.log(myDate.toDateString()); // give current date

// ******** EXPLORE MORE **********
//  like TimeStamp , and many more 
// Date.now() concepr exact abhi ki value dega

// const dn= Date.now();
// console.log(dn)

let abc = new Date();
console.log(abc.getDay()); // current day btayega 
console.log(abc.getMonth());  // curr month btayegaa  but js me month ya day 0 se start hota hai

