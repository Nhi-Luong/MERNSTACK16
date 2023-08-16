// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
// a. Get heroes who are not evils
let isNotEvilHeroes = heroes.filter((hero)=>hero.isEvil === false)
console.log(isNotEvilHeroes)

// b. Print Unique family names
let uniqueFamilyNames = heroes.reduce((pre, curr, index, arr)=>{
    pre[curr.family] = pre[curr.family] ? pre[curr.family] + 1 : 1;
    return pre;
}, new Set())
console.log(uniqueFamilyNames)

// c. Print Hero Names from given objects, and append sir in each of them before printing
let sirHeroes = heroes.reduce((pre, curr, index, arr)=>{
    console.log(`Sir. ${curr.name}`)
    return pre;
})
// d. Do we have any hero in Marvel Family who is not evil
let isNotEvilMarvel = isNotEvilHeroes.filter((hero)=>hero.family === "Marvel")
console.log(isNotEvilMarvel)
//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
const std = new Map()
std.set("name","Nhi")
std.set("session",["MERNStack","SpringBoot", "Spring Framework"])
std.set("isGraduate", true)

console.log(std.get("name"))
console.log(std.has("isGraduate"))
std.delete("isGraduate")
console.log(std.has("isGraduate"))
std.clear();
console.log(std.size)

const mySet = new Set();
mySet.add(1);
mySet.add("apple")
console.log(mySet.has("apple"))
mySet.delete("apple")
console.log(mySet.has("apple"))
mySet.clear();
console.log(mySet.size)

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            "Five ES6 Features" : "Let and Const, Spread/Rest, Promise, For-In/For-Of, Map and Set",
            "Status":"Success"
        })
    },2000)

    setTimeout(()=>{
        reject({
            "Status":"Fail"
        })
    },3000)
})

promiseObj.then((data)=>{
    console.log("Resovle", data)
}).catch((err)=>{
    console.log("Reject", err)
})

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
var arr = [1,2,3,4,5]
function multiple(...restParams){
    let result = 1
    result= restParams.reduce((preval, currval, index, arr)=>{
        if(typeof(preval)=== typeof("")){
            console.log(preval)
        }
        if(typeof(currval)=== typeof("")){
            console.log(currval)
        }
        return preval*currval
    })
    return result
}

console.log("1*2*3*4*5 = "+ multiple(...arr))

var students = ["Nhi", "Dillon", "Sai", "Liam", "David", "Jeffery", "Luying", "Anant", "Arit", "Duc", "Thanh", "Jason", "Ryan", "Daniel", "Gustavo", "Jiahao", "Steven", "Lemar"]
// students.reduce((prevVal, currVal, index, arr)=>console.log(currVal))
console.log("Student of the session:")
multiple(...students)

//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

let{userDetails:{last}}=person
const personWithContact = {
    userDetails: {
        last,
        contact: "9119119110"
    }
};

console.log(personWithContact)


//6. Give me an example of const data manipulation
const user={
    name:"Nhi",
    session:"ES6"
}
user.session="MERNStack"
console.log(user)


//7. What is the difference between for-of and for-in show with examples
//For-of: iterate over values of objects, usually uses to iterate through the arrays, strings,...
const numbers=[1,2,3,4,5]
for(const num of numbers){//return all the value
    console.log(num) 
}
//For-in: iterate over properties of objects
for(const num in numbers){ //return all the key/properties of numbers
    console.log(num)
}

//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded
let signIn = new Promise((resovle, reject)=>{
    resovle({
        "State":"Sign In",
        "Status":"Success",
        "Status Code":200
    })
    reject({
        "State":"Sign In",
        "Status":"Success",
        "Status Code":500
    })
})
let userRegistration = new Promise((resovle, reject)=>{
    resovle({
        "State":"Registration",
        "Status":"Success",
        "Status Code":200
    })
    reject({
        "State":"Registration",
        "Status":"Success",
        "Status Code":500
    })
})
let nextpageToNavigate = new Promise((resovle, reject)=>{
    resovle({
        "State":"Navigate",
        "Status":"Success",
        "Status Code":200
    })
    reject({
        "State":"Navigate",
        "Status":"Success",
        "Status Code":500
    })
})

Promise.all([
    signIn,
    userRegistration,
    nextpageToNavigate
]).then((data)=>{console.log("data", data)})
.catch((err)=>{console.log("error", err)})

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios
let wakeUp = new Promise((resolve, reject)=>{
    resolve({
        "State":"Wake-up",
        "Status":"Success",
        "Status Code":200
    })
})
let brushTeeth = new Promise((resolve, reject)=>{
    reject({
        "State":"Brush-teeth",
        "Status":"Fail",
        "Status Code":500
    })
})
let goWork = new Promise((resolve, reject)=>{
    resolve({
        "State":"Go-work",
        "Status":"Success",
        "Status Code":200
    })
})

wakeUp.then((data)=>{
    console.log("First resolve: ", data);
    return brushTeeth;
}).then((data)=>{
    console.log("Second resolve: ", data);
    return goWork;
}).then((data)=>{
    console.log("Third resolve: ", data)
}).catch((err)=>{
    console.log("Routine can not be done because of ", err)
})

// Optional -
//10. Using the promise object at #3 create an async and await feature