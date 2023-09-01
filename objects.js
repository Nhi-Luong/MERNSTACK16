//Objects : Are the basics building blocks in Javascript with many predefined functions to be used at various fetures
//Objects mainely are key value pair and can be used to create a class structure

//Creating an object
// new Object({}), Object.create({})

var User = {
    Name : "Arit",
    Age : 22,
    Session : "MERNStack",
    getUserDetails : function () {
        return {
            Name : this.Name,
            Session : this.Session,
            Address : this.Address
        }
    }
}

User.Address = "Somewhere on earth";

console.log(User.getUserDetails());

//Inheritance of JS Object
//1. Using new keyword - not a right way to inherit but a good way for extension and copy
// var Engineer = new Object(User);

// Engineer.Name = "Dillon";
// Engineer.Speciality = "Mechanical Engineer";

// console.log(Engineer.Session);

// Engineer.getSpecialityAndAddress = function () {
//     return {
//         Speciality : this.Speciality,
//         Address : this.Address
//     }   
// }

// console.log(Engineer.getSpecialityAndAddress());

// //override 

// Engineer.getUserDetails = function () {
//     return {
//         Speciality : this.Speciality,
//         Address : this.Address,
//         Name : this.Name
//     }   
// }

// console.log(Engineer.getUserDetails());
// console.log(User.getUserDetails());

//2. Object.Create({}) : correct way of inheriting and overriding

var Engineer = Object.create(User);

Engineer.Name = "Dillon";
Engineer.Speciality = "Mechanical Engineer";

//console.log(Engineer.Session);

Engineer.getSpecialityAndAddress = function () {
    return {
        Speciality : this.Speciality, //this - is the scope, context and is dynamic object
        Address : this.Address
    }   
}

//console.log(Engineer.getSpecialityAndAddress());

//override 

Engineer.getUserDetails = function () {
    return {
        Speciality : this.Speciality,
        Address : this.Address,
        Name : this.Name
    }   
}

// console.log(Engineer.getUserDetails());
// console.log(User.getUserDetails());

// console.log(Engineer.__proto__)
// console.log(User.__proto__)

//3. Prototype of Empty Object

var emptyObj = {}

//4. Object without prototype

var noPrototype = Object.create(null) //null prototype

//5. Object.Assign

var obj1 = {name : "Anant", add1 : "Lake City 1"}

var obj2 = {name : "Anant", add2 : "Lake City 2"}

var obj3 = {name : "Anant", add3 : "Lake City 3"}

var actualObj = {obj1, obj2, obj3}

obj1.session = "Object Session" //copying of data //mutability

console.log(actualObj)

var actualObj2 = {};
Object.assign(actualObj2, obj1, obj2, obj3) //object creation

//this preserves immutability
obj1.session2 = "Session 2 on object"
console.log(actualObj2)