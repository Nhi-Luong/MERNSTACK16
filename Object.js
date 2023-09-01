var person = {
    Name: "Nhi",
    Address: "Somewher in the US",
    getPersonDetails: function(){
        return{
            Name: this.Name,
            Address: this.Address
        }
    }
}
console.log(person.getPersonDetails())

var student = Object.create(person);

console.log(student.getPersonDetails())

student.Name = "Johnson"
student.Session = "MERNStack"

console.log(student.getPersonDetails())

//override
student.getPersonDetails = function(){
    return{
        Name: this.Name,
        Session: this.Session,
        Address: "Somewhere on Earth"
    }
}

console.log(person.getPersonDetails())
console.log(student.getPersonDetails())

var std1 = Object.create(null)
std1.Address = "Somewhere in Asia"
console.log(std1.Address)

//object with same name and mutiple addresses
var obj1 = {name : "Name1", add1 : "Address1"}

var obj2 = {name : "Name2", add2 : "Address2"}

var obj3 = {name : "Name3", add3 : "Address3"}


//copy all objects not combine
var actualObj = {obj1, obj2, obj3}
obj1.something = "add something to obj1" // by this way, object is mutable
console.log(actualObj)

//use assign to create new combination object
var actualObj2 = {};
Object.assign(actualObj2, obj1, obj2, obj3) //des: actualObj2, srcs: obj1, obj2, obj3

console.log("==============================")
obj1.anotherThing="add another thing to obj1" //won't be shown in the object.
console.log(actualObj2)
