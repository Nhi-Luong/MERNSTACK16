console.log("hello world!")

var check_data_type = {
    name: "Nhi",
    session: "mernstack"
}

console.log("check_data_type-" + typeof check_data_type)
console.log("data is -" + JSON.stringify(check_data_type))

var age = 18
var isValidId = true 

isValidId && age == 18 ? console.log("valid voter") : console.log("invalid voter")

//var hoisting: 
console.log(a) //return ;
var a=10; 
//function hoisting
console.log(sum(10,5)); //return 15
function sum(a,b){
return a+b;
}