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