// +++++++++++*********ARRAY********++++++++++++++++++
// +++++****ARRAY me different type ke items bhi rkh skte hai js ms *****+++++

//  Syntax and basic declarations 

const arr = [1 , 2 ,8,9];

const arrr = ["shktiman " , "Hero" , 5];

const myArr = new Array(1,2,3,4,5,699);

// access the elements of arr
console.log(myArr[2]);

//*******METHODS in ARRAY */
// .push() // add new element in last 
//  .pop() // remove the last element from the array 

//  .unshift() add eleemnt in the satrting and shift all previous elements by one one index further 
//  .shift() remove fist element
//  .include() btayega ki koi elemnt present hai yanhi array me
// indexOf() btayega ki vo index pe present hai ya nhi
 arrr.push(8)
 console.log(arrr);
 
 arrr.push("hello jii")
 
 
 arrr.pop()
 console.log(arrr);

//  +++++++********INTERVIEW IMP*******++++++++++

//  +++***slice  array ke ak mentioned part ko print krtahai but array ke element ko removenhi krta hai 
//  splice array ke original elements ko remove kr deta hai 

//  splice pooore range ko coverkrta ha i 
//  jbki slice last vale part ko exclude kr deta hai

const MeraArr = [1, 2  , 3, 5 , 8]
console.log("A" ,MeraArr);

MeraArr1 = MeraArr.slice(1,3);
console.log("B" , MeraArr1);
console.log("A" , MeraArr);


MeraArr2 = MeraArr.splice(1,3);
console.log("C" , MeraArr2);
console.log("A" , MeraArr);



 