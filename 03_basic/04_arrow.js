const user = {
    username : "CP" ,
    price : 636,

    welcomeMessage: function()
    {
        console.log(`${this.username}  , welcome`);
        
    }
    
}

user.welcomeMessage()
user.username = "Dev"
user.welcomeMessage()

// var a = function(){
//         const name = "cp"
//             console.log(this.name);
                
//                 }

//                 a()
// }

const cp = () => {
    console.log("Hii")
}

cp()

// ******** ARROW FUNCTION ***********

//  basic symtax  () => {}

//      const addTwo=(num1 , num2) => {
//         return num1+num2
//     }
//   console.log(addTwo(2,8))

//  upr vala  basic arrow function hai

// ********now we discuss about IMPLICIT RETURN *******

// implicit return me ak line me hi poora funstiona definiton likh skte hai { } curley braces htake 
//  return keyword likhn eki need nhi pdti hai


     const addTwo=(num1 , num2) =>   num1+num2

  console.log(addTwo(2,8))

//   %%%%%% _______---------- VERY VERY IMP NOTE --------___&&&&
//  jab hm  curley braces lgayenge to hme return statement likhn ahi likhna pdega 
//  jab hm paranthesis () ka use krenge to hme 
//  return statement likhne ki koi need nhi hai 

  const Arrow = () => ({Name: "CP JII"})
  console.log(Arrow())