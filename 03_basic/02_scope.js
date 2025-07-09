// +++++ scoppe deals here with the use of 
// ******* let  const and var***

let a =2
const b = 3
var c = 10


{
  let  a = 10
   const b = 20
   var c = 30
   console.log("Inner : a" ,a);
   console.log("Inner : b" ,b);
   console.log("Inner : c" ,c);
   
}
console.log(a);
console.log(b);
console.log(c);

// ++++++***** Important notes****++++++
// ✅ let and const are block scoped — block ke bahar unka access nahi hota.

// ⚠️ var is function scoped, not block scoped — isliye uska value overwrite ho jaata hai agar block me likha ho.

// ⚠️ Block {} ke andar var likhne ka koi scope safety nahi hota.