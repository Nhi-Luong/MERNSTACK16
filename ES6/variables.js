//var: functional scope hoisted variable
//let-const: block scope variables or lexical variable. hoisted not present in let and const

console.log(my_var)
//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
{
    var my_var = "new value"
    let my_let = "new value let"
    const my_const = "new value const"
}

// console.log(my_var)//define outside scope
// console.log(my_let)//x
// console.log(my_const)//x

//2. initialize and re-decalare

var my_var = "new value" //initialized
var my_var = "new value 1"

// console.log(my_var)
// let my_let = "new value let"
// //let my_let = "new value let" // can't be re- initialized or declared
// my_let = "new value for new let usage"

// //can't be reassigned any value. Only initilize one.
// const my_const = "new value const"
// my_const = "new value const"
// console.log(my_const) //TypeError: Assignment to constant variable.

//3. const needs to be assigned a value as soon as declared
var my_var;
let my_let;
//const my_const; // assignment of value is mandatory

// my_var = "new value"
// my_let = "new value let"
// my_const = "new value const"

//constants are immutable but there references can be changed
const user = {
    name : "Jeffary", session : "ES6"
}

//user = { name : "Nhi", session : "Ecmascript 2015" }
user.name = "Thanh"

console.log(user)

//Problems with functional scope variable

// for (var index = 1; index < 5; index++) {
//     setTimeout(() => {
//         console.log("Incremented value "+ index)
//     }, 1000);
// }

// console.log("Last Incremented Value "+ index)

for (let index = 1; index < 5; index++) {
    setTimeout(() => {
        console.log("Incremented value "+ index)
    }, 1000);
}

//using IIFE to invoke and get value immediately
for (var index = 1; index < 5; index++) {
    (function(params) {
        setTimeout(() => {
            console.log("Incremented value "+ params)
        }, 1000);    
    })(index)
}