// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way
//2. Encapsulation - data hiding can be done through closures, with the help of access modifiers
//3. Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4. Abstraction - Not required in js

// Closures : A phenomenon when we have two nested functions and the parent function returns child one, at the time of return
// child function only return some required properties and others are kep private.

// function Parent(params) {
//     //Whaterver we have not sent to the Child Function is private
//     return function Child(params) {
//         //return //Public Elements
//         //Whaterver we have sent from here is public
//     }
// }


function Parent(name, age) {
    var _name = name;
    var _age = age;
    var AccounBalance = "$5000" //can be shared
    var acctPwd = "45343w53$" //this should be private

    var child = function GetAccountInfo(acctNo, pwd) {
        //write the function properties that needs to be used by outer world
        return {
            Name : _name,
            Age : _age,
            AccounBalance, //short hand -  AccounBalance : AccounBalance,
            acctNo : acctNo
        }
    }

    return child;
}

var acct = Parent("Lemar", 21)

console.log(acct(124356, "pass"))