// ______*********Let's Learn About Function******______
function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
    console.log(" ");
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    
}
// sayMyName()   isse function ko call kr skte hai aur use print kr skte hai

//  Function to add 2 numbers

// function addNum(){
//     let a=2 ;
//     let b = 3;
//     let c = a+b
//     console.log(c);
    
// }

// addNum();

//  using parameter 
// yaaad rkhna isme hme variable ko declared nhi krna pdta hai okay

function addNum(num1 , num2){
  console.log(num1+num2);
  
}
addNum(4 , 8);

// little bit more 
 
function abc(n1 , n2){
   let ans = n1 + n2
    return ans
    console.log("mai print nahi ho paunga kyuki return mere se upr aa chuka hai ");
    
}
console.log("ans: ",abc(1,5));

// ++************Takig parameter*****++++

function log(username){
    return `${username} just loggedIn`
}

console.log(log("CP"));

//  example for add to card type website
// REST OPERATOR 
// ...variable ka name (3 dot )

function calcPrice(...price){
    return price;
}

// console.log(calcPrice(1)); 
//  agr ak se jyaade paramenter ek sath pass kr de 
// like calcPrice(2,3,6,5,4)

// iske liye hm Rest ... ka use krte hai
console.log(calcPrice(2,5,9,6));

// _-----====++++++++----------_____
function calc(val1 , val2 ,...Price){
    return Price;
}
console.log(calc(2,5,9,6)); // only 9,6 is printed 

// ++++++++**********HANDLE OBJECT in FUNCTION **********++++
//  WOOOOOOOooooooooooooowwwwwwwww  concept

const user={
    name : "CP BHAIYA ",
    age: 22,
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
    
}

// handleObject(user)
// iske andr hm direct object bhi pass kr skte hai 

handleObject({
    name:"Dev",
    age:23,
})

