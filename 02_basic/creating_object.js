// **********__________OBJECT bnaane ke 5 trike hote hai ______+++++********

// 1. Object using literals 
// OBJECT banane ka sbse common and mot used way

const obj={
    name : "CP",
    age:23,
    isMarried : false,
}
console.log(obj);

// 2. USING CONSTRUCTOR
// isme hm new object() keyword ka use krte hai 

let stud = new Object();
stud.name="CP";
stud.age=22;

console.log(stud);

// 3. using CONSTRUCTOR FUNCTION 
//  isme hm phle  ak function declare kr dete hai 
//  function me kuch parameter pass kr deta hai  
//  jo hm constructor ke through use krte hai y ause update krte hai

function Student(name , age){
    this.name = name ;
    this.age = age;
}

const std1 = new Student("CP" ,22);
const std2 = new Student("DP" ,22);
console.log(std2.name);

// 4. usimg OBJECT CREATE 
// Object.create()
const person = {
  greet: function () {
    console.log("Hello " + this.name);
  }
};

const student = Object.create(person);
student.name = "CP";

student.greet();  // Hello CP

// 5. using class syntax 
class Student1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student1("CP", 22);
console.log(s1.name); // CP

console.log(Object.values(obj));


// +++++*******DESTRUCTURING******++++++++
// hm iske through kisi object  ke elements ko acces kr skte hai
//  . vale accessing ke jgh ye use me aa skta ahi 

const course = {
    name:"kuch JS",
    price : 9999,

}
console.log(course.name);

// upr vale method ke bdle hm 

const{name} = course
console.log(`Hello , ye maine new method se print kiya hai &{name}`);
console.log(name);

