// +++++++++******Nested scope*****+++++++

function one(){
    const username = "CP"

    function two(){
        const website = "youtube"

        console.log(username);
        
    }

    // console.log(website)  // ye answer dega ki website ki not defined
    // yha pe closure ki property ka use aa gya hai 
    //  andr vala function apne parent function ke variable ka use kr skta hai lekin 
    //  parent function apne child function ke variale ka us enh kr skt hai 

    two()
}
one()


//  One More exmple 

function outer() {
  let name = "CP";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greetFunc = outer();  // outer() to call ho gaya
greetFunc();  // Hello CP


// ++++++++ INTERESTING +++++++++ 