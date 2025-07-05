// primitive  ye call by value  behave krte hai
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// symbol me hm bhale hi same value pass kre 
//  but alag alag symbol ka output alag alag hoga
const id = Symbol("222")
const id2 = Symbol("222")

console.log(id===id2); //false



// Reference type (non- primitive) 

// Array , Objects , Functions

//**********  ARRAY******* */
let arr = [1,2,3,"shyam"]
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

// ****** OBJECTS******
let Obj = {
    name : "CP" ,
    age : 22,
    isStudent : true,

}
console.log(Obj);

// *********FUNCTION**********/
  // declare a function
  // function(){}   // function declared 
//    assign a variable so that we can use as we want

var myFunction = function(){
    console.log("hiii");

    
}
myFunction();


//+++++++++++++++++++++******* STACK & HEAP******+++++++++++++++

// stack(primitive)   heap(non-primitive data type)