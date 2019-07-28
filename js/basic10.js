// let scope is limited to Block of statement you declare in.
// var can be globle

function checkScope(){
    "use strict";
    let i = "function scope"; // change let to var for understading 
    if(true){
        let i = "Block scope";  // change let to var for understading
        console.log("In Block: ", i)
    }
    console.log("In function: ", i)
}
checkScope()

// "use strict" decalration on top of code or within function activate strict mode
// which catch common codding mistake Ex.
function checkErr(){
    "use strict";
    catName = "cat"
}

// let can be used as var to declare variable
// But let does not allow seting variable twice Ex.
let name = "ketan";
// let name = "mahesh"; // let throws Error here
name = "mahesh"; // this is allowed

// const variable is read-only // usully CAPITAL letters are used to declare variable with const
const PI_NUM = 3.14

const MATH_CONSTANTS = {    // objects can be const or let
    PI:3.14
};

Object.freeze(MATH_CONSTANTS); // freeze does not allow objects changes
try{
    MATH_CONSTANTS.PI = 23
} catch (err){
    console.log(err);
}
console.log(MATH_CONSTANTS.PI)
