
//Q1. Create a file with name basics and show all the features that you know about javascript
console.log("JS features: hoisting, closures, binding, app & apply, prototype, call stack, event loop")
//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var type = "Robert "
console.log(typeof(type));//string
type = .0266
console.log(typeof(type))//number
type=false
console.log(typeof(type))//boolean
type = {
    myname: "Test Me"
}
console.log(typeof(type))//object
type = 25166665 
console.log(typeof(type))//number
type = undefined
console.log(typeof(type))//undefined
type = null
console.log(typeof(type))//object

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
var userInfo = function(firstName, lastName, age){
    this.fName = firstName,
    this.lname = lastName,
    this.age = age;
    this.getUserInfo = function(){
        return {
            first_name: this.fName,
            last_name : this.lname,
            age : this.age
        }
    }
}

var nu = new userInfo("Nhi", "Luong", 28)
console.log(nu.getUserInfo())

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
var doAdd = function(a, b, c){
    return a+b+c
}

console.log(doAdd(2,3,4))//return 9, normal addition
console.log(doAdd(2))//NaN, the function return one type of variable(can be string, number...). it starts with number input so return the value not a number
console.log(doAdd(2,3,3))//8, normal addition
console.log(doAdd("first", 2, "three"))//first2three - in this case, param a is a string, so the function becomes string concatenation


//Q5. A detailed example implementation of event loop using multiple settimeouts
console.log("start")      
setTimeout(function func1(){    
    console.log(1)
},1000)
setTimeout(function func2(){
    console.log(2)
    setTimeout(function func22(){
        console.log(2.1)
    },0)
},2000)
setTimeout(function func3(){
    console.log(3)
},3000)
console.log("end")
//return- start, end, 1, 2, 2.1, 3


//Q6. Print the topics you remember so far exporting it from one file and printing in another
//UserExport.js and export.js



//Q7. Give me an example of your choice on closure, callback, prototype, each.
//closure - nesting function in which child method uses to return some of desired values of parent
function parent(name, age, session){
    this.name = name,
    this.age = age,
    this.session = session
    this.child = function(id, pw){
        return{
            Name : this.name,
            Session: this.session,
        }
    }
}
var user = new parent("nhi", 28, "MERNStack")
console.log(user.child(1,123))

//callback- pass function as parameter

var callBack = function(calBack, num1, num2, num3){
    return calBack(num1, num2, num3)
}

console.log("callback-" + callBack(doAdd, 99, 2, 4));

//prototype- concept related to objects and inheritance
function Person(name, addr){
    this.name = "Nhi",
    this.addr = "California"
}

Person.prototype.hello = function(){
    console.log(`Hello, my name is ${this.name} and I live in ${this.addr}`)
}
var person1 = new Person;
person1.hello();