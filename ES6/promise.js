// let LunchPromise = new Promise((resolve, reject)=>{

//     //set timeout is assumed to be the server call / async call
//     setTimeout(() => {
//         resolve({ //this out put is assumed to be sent from server in async call on success case
//             "Planned" : "Yes",
//             "Status" : "Success",
//             "Status Code" : 200
//         })
//     }, 3000);    

//     setTimeout(() => {
//         reject({ //this out put is assumed to be sent from server in async call on success case
//             "Planned" : "Yes",
//             "Status" : "Failed",
//             "Status Code" : 500
//         })
//     }, 2000);    
// })

// console.log("Promise Status!!! ", LunchPromise);

// LunchPromise.then((data)=>{
//     console.log("resolve")
//     console.log(data)
// }).catch((err)=>{
//     console.log("reject")
//     console.log(err)
// })

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            "Student Name" : "Nhi Luong",
            "Status" : "Learn ES6",
            "Status Code" : 200
        })
    },2000)

    setTimeout(()=>{
        reject({
            "Student Name" : "Nhi Luong",
            "Status" : "Is Progressing",
            "Status Code" : 500,
        })
    }, 2000)
})

promise.then((data)=>{
    console.log("Resovle state")
    console.log(data)
}).catch((data)=>{
    console.log("Reject state")
    console.log(data)
})

//Multiple Promises

let spring2Session = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "Spring Frameworks",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let mernSession = new Promise((resolve, reject )=>{ 

    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "MERNStack",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let spring1Session = new Promise((resolve, reject)=>{ 

    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "Spring Boot",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);

})

console.log("Promises are working... ")


Promise.all([
    mernSession,
    spring1Session,
    spring2Session
]).then((data)=>{console.log("promises ", data)})
.catch((err)=>{console.log("errr ",err)})


//check the status of all the promises and then make decision
Promise.allSettled(
    [   mernSession,
        spring1Session,
        spring2Session]
    ).then((data)=>{
        console.log("then ", data)
    })